import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'

import '../layouts/all.sass'

class TemplateWrapper extends Component {
  state = {
    menuOpen: false,
  }

  componentDidMount() {
    // eslint-disable-next-line
    (function () {
      const options = {
        facebook: '207512882926609', // Facebook page ID
        whatsapp: '+393661461483', // WhatsApp number
        // call_to_action: 'Message us', // Call to action
        button_color: '#00B2A7', // Color of button
        position: 'right', // Position may be 'right' or 'left'
        order: 'facebook,whatsapp', // Order of buttons
      };
      const proto = document.location.protocol; const host = 'whatshelp.io'; const
        url = `${proto}//static.${host}`;
      const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = `${url}/widget-send-button/js/init.js`;
      s.onload = function () { WhWidgetSendButton.init(host, proto, options); }; // eslint-disable-line
      const x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }());
  }

  getRegions = edges => edges.map(singleRegion => ({ id: singleRegion.node.id, slug: singleRegion.node.fields.slug, name: singleRegion.node.frontmatter.region }))

  render() {
    const { menuOpen } = this.state
    const { children, location } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteMetadata {
            siteOptions: markdownRemark(frontmatter: { dataType: { eq: "headerAndFooterOptions" } }) {
              frontmatter {
                generalSeoSection {
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
                menuItems {
                  href
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
      `}
        render={(data) => {
          const {
            siteOptions: {
              frontmatter: {
                menuItems, menuCtaText, menuCtaLink, footerMenu, footerContacts, creditsText, copyrightText, socialInfo, generalSeoSection,
              },
            },
            regions: { edges },
          } = data
          const regions = edges.map(singleRegion => ({ id: singleRegion.node.id, slug: singleRegion.node.fields.slug, name: singleRegion.node.frontmatter.region }))
          return (
            <div className="main-container-overflow">
              <div className={`mobile-menu-overlay ${menuOpen && 'show'}`}>
                <MobileNavbar
                  menuItems={menuItems}
                  menuCta={{ text: menuCtaText, link: menuCtaLink }}
                  pathname={location.pathname}
                  regions={regions}
                  close={() => this.setState({ menuOpen: false })}
                />
              </div>
              <div className={`content-to-push ${menuOpen && 'active'}`}>
                <Helmet>
                  <title>{generalSeoSection.seoTitle || ''}</title>
                  <meta name="description" content={generalSeoSection.seoDescription || ''} />
                  <meta name="keywords" content={generalSeoSection.seoKeywords || ''} />
                  <meta name="og:title" content={generalSeoSection.ogTitle} />
                  <meta name="og:url" content={generalSeoSection.ogUrl} />
                  <meta name="og:image" content={generalSeoSection.ogImage} />
                  <meta name="og:description" content={generalSeoSection.seoDescription} />

                </Helmet>
                <Navbar
                  menuItems={menuItems}
                  menuCta={{ text: menuCtaText, link: menuCtaLink }}
                  pathname={location.pathname}
                  regions={regions}
                  openMobileMenu={() => this.setState({ menuOpen: true })}
                />
                <div>{children}</div>
                <Footer
                  footerMenuItems={footerMenu}
                  footerContacts={footerContacts}
                  creditsText={creditsText}
                  copyrightText={copyrightText}
                  socialInfo={socialInfo}
                />
              </div>
            </div>
          )
        }}
      />
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object, // eslint-disable-line
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      generalSeoSection: PropTypes.shape({
        ogImage: PropTypes.string,
        ogTitle: PropTypes.string,
        ogUrl: PropTypes.string,
        seoDescription: PropTypes.string,
        seoKeywords: PropTypes.string,
        seoTitle: PropTypes.string,
      }),
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
