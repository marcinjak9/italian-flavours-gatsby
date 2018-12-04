import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout from '../components/LayoutWrapper'
import PersonalizedEventsTemplate from './Wrappers/PersonalizedEventsTemplate'

const PersonalizedEvents = ({
  location,
  data: {
    markdownRemark: {
      frontmatter: {
        contactSectionTitle, blogSectionTitle, descriptionCards,
        descriptionTitle, hero, title, personalizedEventsGallery,
        midDescriptionTitle, midDescriptionBody, instagramPhotos,
        seoSection, blogPosts,
      }, html,
    },
  },
}) => (
  <Layout location={location}>
    <PersonalizedEventsTemplate
      seoSection={seoSection}
      hero={{
        image: hero.bgImage,
        title,
        subtitle: hero.subtitle,
        ctaText: hero.ctaText,
        ctaLink: hero.ctaLink,
      }}
      descriptionSection={{
        title: descriptionTitle,
      }}

      gallerySection={{
        images: personalizedEventsGallery,
        title: midDescriptionTitle,
        body: midDescriptionBody,
        cards: descriptionCards,
      }}

      blogSectionTitle={blogSectionTitle}
      blogPosts={blogPosts}
      contactSectionTitle={contactSectionTitle}

      content={html}
      contentComponent={HTMLContent}
      instagramPhotos={instagramPhotos}
    />
  </Layout>
)

export default PersonalizedEvents

PersonalizedEvents.propTypes = {
  data: PropTypes.shape({
    seoSection: PropTypes.shape({
      ogImage: PropTypes.string,
      ogTitle: PropTypes.string,
      ogUrl: PropTypes.string,
      seoDescription: PropTypes.string,
      seoKeywords: PropTypes.string,
      seoTitle: PropTypes.string,
    }),
    hero: PropTypes.shape({
      bgImage: PropTypes.string,
      title: PropTypes.string,
      payoff: PropTypes.string,
      buttonText: PropTypes.string,
      buttonLink: PropTypes.string,
    }),
    descriptionSection: PropTypes.shape({
      title: PropTypes.string,
    }),
    gallerySection: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
      })),
      title: PropTypes.string,
      body: PropTypes.string,
      cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
      })),
      content: PropTypes.string,
      contentComponent: PropTypes.func,
      instagramPhotos: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }),
}

export const personalizedEventsQuery = graphql`
  query PersonalizedEventsQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "personalized-events-page"}}) {
      id
      html
      frontmatter {
        seoSection {
          ogImage {
            childImageSharp {
              fluid(maxWidth: 2880) {
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
        personalizedEventsGallery {
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        midDescriptionTitle
        midDescriptionBody
        descriptionCards {
          title
          body
          icon {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        blogSectionTitle
        blogPosts {
          slug
        }
        contactSectionTitle
        instagramPhotos {
          id
        }
      }
    }
  }
`
