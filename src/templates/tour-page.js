import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import TourPageTemplate from './Wrappers/TourPageTemplate'
import Layout from '../components/LayoutWrapper'

const TourPage = ({
  location,
  data: {
    markdownRemark: {
      frontmatter: {
        blogSectionTitle, gallery, hero, instagramPhotos, instagramUsername, title, tourDescription,
        galleryUpper, calendarTitle, calendarBody, calendarNotes, aviabilityDates, descriptionCards, seoSection,
        blogPosts,
      },
    },
  },
}) => (
  <Layout location={location}>
    <TourPageTemplate
      seoSection={seoSection}
      hero={{
        title,
        subtitle: hero.subtitle,
        image: hero.image,
        ctaText: hero.ctaText,
        ctaLink: hero.ctaLink,
        bgOverlay: hero.heroBgOverlay,
      }}
      descriptionSection={{
        title: tourDescription.title,
        body: tourDescription.body,
        image: tourDescription.image,
      }}
      gallery={{
        galleryUpper,
        galleryTitle: gallery.textTitle,
        galleryDescription: gallery.textBody,
        cards: descriptionCards,
      }}
      blogSectionTitle={blogSectionTitle}
      blogPosts={blogPosts}
      calendar={{
        body: calendarBody,
        title: calendarTitle,
        notes: calendarNotes,
        dates: aviabilityDates,
      }}
      instagram={{
        images: instagramPhotos,
        username: instagramUsername,
      }}
    />
  </Layout>
)

TourPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TourPage


export const tourPageQuery = graphql`
  query TourPageById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id 
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
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
          ctaText
          ctaLink
          heroBgOverlay
        }
        tourDescription {
          title
          body
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
        galleryUpper {
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        gallery {
          textTitle
          textBody
        }

        descriptionCards {
          title
          subtitle
          body
          icon {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
        blogSectionTitle
        blogPosts {
          slug
        }
        
        calendarTitle
        calendarBody
        calendarNotes
        aviabilityDates {
          startDate
          endDate
        }
        
        instagramUsername
        instagramPhotos {
          id
        }
        
        
        
      }
    }
  }
`
