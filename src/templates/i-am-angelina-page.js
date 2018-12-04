import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Icon from 'material-icons-react'
import PageTransition from 'gatsby-plugin-page-transitions';

import Content, { HTMLContent } from '../components/Content'
import instagram from '../img/instagram-icon-black.png'
import InstagramPhoto from '../components/InstagramPhoto'
import ContactForm from '../components/ContactForm'
import styles from '../layouts/styles/styles'
import HelmetSection from '../components/HelmetSection';
import AboutPageTemplate from './Wrappers/IAmAngelinaTemplate'

const AboutPage = ({
  location,
  data: {
    markdownRemark: {
      frontmatter: {
        title, contactSectionTitle, descriptionTitle,
        hero, instagramPhotos, seoSection,
      },
      html,
    },
  },
}) => (
  <AboutPageTemplate
    seoSection={seoSection}
    hero={{
      title,
      subtitle: hero.subtitle,
      image: hero.bgImage,
      ctaLink: hero.ctaLink,
      ctaText: hero.ctaText,
      bgOverlay: hero.heroBgOverlay,
    }}
    instagramPhotos={instagramPhotos}
    contentComponent={HTMLContent}
    descriptionTitle={descriptionTitle}
    contactSectionTitle={contactSectionTitle}
    content={html}
    location={location}
  />
)

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        seoSection: PropTypes.shape({
          ogImage: PropTypes.string,
          ogTitle: PropTypes.string,
          ogUrl: PropTypes.string,
          seoDescription: PropTypes.string,
          seoKeywords: PropTypes.string,
          seoTitle: PropTypes.string,
        }),
        title: PropTypes.string,
        contactSectionTitle: PropTypes.string,
        descriptionTitle: PropTypes.string,
        instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
        })),
        contentComponent: PropTypes.func,
        hero: PropTypes.shape({
          subtitle: PropTypes.string,
          image: PropTypes.string,
          ctaLink: PropTypes.string,
          ctaText: PropTypes.string,
          heroBgOverlay: PropTypes.bool,
        }),
      }),
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPageQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "i-am-angelina-page"}}) {
      
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
        title
        hero {
          subtitle
          bgImage {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroBgOverlay
          ctaText
          ctaLink
        }
        descriptionTitle
        contactSectionTitle
        instagramPhotos {
          id
        }
      }
    }
    
  }
`
