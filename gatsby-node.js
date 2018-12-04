const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      if (edge.node.frontmatter.templateKey) {
        createPage({
          path: edge.node.fields.slug,
          // tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })

    // // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
    return true
  })
}

const fs = require('fs')

exports.onCreateNode = ({
  node, boundActionCreators, getNode, getNodes,
}) => {
  const { createNodeField } = boundActionCreators

  fmImagesToRelative(node);
  if (node.internal.type === 'MarkdownRemark') {
    // if (node.frontmatter && node.frontmatter.hero) {
    //   if (node.frontmatter.hero.image) {
    //     const pathToFile = path
    //       .join(__dirname, 'static', node.frontmatter.hero.image)
    //       // .split(path.sep)
    //       // .join('/');
    //     // console.log(pathToFile)
    //     const fileNode = getNodes()
    //     // fs.writeFile('./prova.json', fileNode, () => console.log('written'))
    //     fs.writeFile('./prova.json', JSON.stringify(fileNode), 'utf8', (err) => {
    //       if (err) {
    //         return console.log(err);
    //       }

    //       console.log('The file was saved!');
    //     });
    //     // console.log(fileNode)
    //   }
    // }
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
