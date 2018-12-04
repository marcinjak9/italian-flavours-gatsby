import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout from '../components/LayoutWrapper'
import HomePageTemplate from './Wrappers/HomePageTemplate'

const HomePage = ({
  location,
  data: {
    pageData, tours,
  },
}) => (
  <Layout location={location}>
    <HomePageTemplate
      seoSection={pageData.frontmatter.seoSection}
      hero={{
        bgImage: pageData.frontmatter.hero.image,
        title: pageData.frontmatter.hero.title,
        payoff: pageData.frontmatter.hero.payoff,
        buttonText: pageData.frontmatter.hero.ctaText,
        buttonLink: pageData.frontmatter.hero.ctaUrl,
        bgOverlay: pageData.frontmatter.hero.heroBgOverlay,
      }}
      tourTitle={pageData.frontmatter.tourSectionTitle}
      infoSection={{
        title: pageData.frontmatter.infoSection.title,
        buttonUrl: pageData.frontmatter.infoSection.ctaUrl,
        buttonText: pageData.frontmatter.infoSection.ctaText,
      }}
      blogTitle={pageData.frontmatter.blogNewsTitle}
      blogPosts={pageData.frontmatter.blogPosts}
      tours={tours}
      content={pageData.html}
      contentComponent={HTMLContent}
      contactSection={{
        title: pageData.frontmatter.contactSectionTitle,
        list: pageData.frontmatter.contactFormOptions,
      }}
      location={location}
    />
  </Layout>
)


HomePage.propTypes = {
  location: PropTypes.any,
  data: PropTypes.shape({
    pageData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        seoSection: PropTypes.shape({
          ogImage: PropTypes.any,
          ogTitle: PropTypes.string,
          ogUrl: PropTypes.string,
          seoDescription: PropTypes.string,
          seoKeywords: PropTypes.string,
          seoTitle: PropTypes.string,
        }),
        blogNewsTitle: PropTypes.string,
        blogPosts: PropTypes.arrayOf(PropTypes.shape({
          slug: PropTypes.string,
        })),
        hero: PropTypes.shape({
          image: PropTypes.any,
          title: PropTypes.string,
          payoff: PropTypes.string,
          buttonText: PropTypes.string,
          buttonLink: PropTypes.string,
          bgOverlay: PropTypes.bool,
        }),
        tourSectionTitle: PropTypes.string,
        infoSection: PropTypes.shape({
          title: PropTypes.string,
          ctaUrl: PropTypes.string,
          ctaText: PropTypes.string,
        }),
      }),
      html: PropTypes.string,
    }),
    tours: PropTypes.object,
  }),
}

export default HomePage


export const HomePageQuery = graphql`
  query HomepageQuery {
    tours: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "tour-page" } featured: { eq: true } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            hero {
              image {
                childImageSharp {
                  fluid(maxWidth: 750) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            region
            subRegion
            tourShortDescription
            highlights
          }
        }
      }
    }

    pageData: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      id
      html
      frontmatter {
        seoSection {
          ogImage {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ogTitle
          ogUrl
          seoDescription
          seoKeywords
          seoTitle
        }
        hero {
          ctaText
          ctaUrl
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroBgOverlay
          payoff
          title
        }
        tourSectionTitle
        blogNewsTitle
        blogPosts {
          slug
        }
        contactSectionTitle
        contactFormOptions {
          title
        }
        infoSection {
          ctaText
          ctaUrl
          title
        }
      }
    }
  }
`
