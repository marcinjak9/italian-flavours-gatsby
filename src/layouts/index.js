import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({
  location,
  children,
  data: {
    markdownRemark: {
      frontmatter: {
        menuItems, menuCtaText, menuCtaLink, footerMenu, footerContacts, creditsText, copyrightText, socialInfo
      },
    },
    regions: { edges },
  },
}) => {
  const regions = edges.map(singleRegion => ({ id: singleRegion.node.id, slug: singleRegion.node.fields.slug, name: singleRegion.node.frontmatter.region }))
  return (
    <div>
      <Helmet>
        <title>Home | Gatsby + Netlify CMS</title>
      </Helmet>
      <Navbar
        menuItems={menuItems}
        menuCta={{ text: menuCtaText, link: menuCtaLink }}
        pathname={location.pathname}
        regions={regions}
      />
      <div>{children()}</div>
      <Footer
        footerMenuItems={footerMenu}
        footerContacts={footerContacts}
        creditsText={creditsText}
        copyrightText={copyrightText}
        socialInfo={socialInfo}
      />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        menuItems: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          path: PropTypes.string,
        })),
        menuCtaText: PropTypes.string,
        menuCtaLink: PropTypes.string,
        footerMenu: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
        })),
        footerContacts: PropTypes.shape({
          emailAddress: PropTypes.string,
          phoneNumber: PropTypes.string,
        }),
        creditsText: PropTypes.string,
        copyrightText: PropTypes.string,
        socialInfo: PropTypes.shape({
          facebookUrl: PropTypes.string,
          instagramUsername: PropTypes.string,
        }),
      }),
    }),
    regions: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            region: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
}

export default TemplateWrapper

export const templateWrapperQuery = graphql`
  query metadataQuery {
    markdownRemark(frontmatter: { dataType: { eq: "headerAndFooterOptions" } }) {
      frontmatter {
        menuItems {
          path
          title
          regionDropdown
        }
        menuCtaText
        menuCtaLink
        footerMenu {
          title
          url
        }
        footerContacts {
          emailAddress
          phoneNumber
        }
        creditsText
        copyrightText
        socialInfo {
          facebookUrl
          instagramUsername
        }
      }
    }

    regions: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "tour-page"}}}) {
      edges {
        node {
          id
           fields {
             slug
           }
           frontmatter {
             region
           }
        }
      }
    }
  }  
`
