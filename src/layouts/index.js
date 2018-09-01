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
  },
}) => (
  <div>
    <Helmet>
      <title>Home | Gatsby + Netlify CMS</title>
    </Helmet>
    <Navbar
      menuItems={menuItems}
      menuCta={{ text: menuCtaText, link: menuCtaLink }}
      pathname={location.pathname}
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
  }  
`
