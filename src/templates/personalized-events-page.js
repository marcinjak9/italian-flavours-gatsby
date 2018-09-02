import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import instagram from '../img/instagram-icon-black.png'
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import InstagramPhoto from '../components/InstagramPhoto';

export const PersonalizedEventsTemplate = ({
  hero, descriptionSection, gallerySection, blogSectionTitle, contactSectionTitle,
  content, contentComponent, instagramPhotos,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <div className="container-fluid hero-container" style={{ backgroundImage: `url('${hero.image}')` }}>
        {hero.bgOverlay && <div className="hero-overlay" /> }
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-8 offset-md-2 hero">
                  <h1 className="white-text">{hero.title}</h1>
                  <h3>{hero.subtitle}</h3>
                  <a href={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container personalized-events-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="grey-text text-center">{descriptionSection.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 padding-2 text-spacing-container">
            <PostContent content={content} />
          </div>
        </div>
      </div>

      <div className="container-fluid personalized-events-section">
        <div className="row">

          {gallerySection.images.map(item => (
            <div className="col-md-4 padding-1" key={item.image}>
              <div className="card card-gallery">
                <img className="card-img-top" src={item.image} alt="Card image cap" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container personalized-events-section">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center dk-brand-text padding-2">{gallerySection.title}</h2>
            <div className="col-md-10 offset-md-1">
              <p className="text-center grey-text">
                {gallerySection.body}
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid personalized-events-section">
        <div className="row">

          {gallerySection.cards.map((card, i) => (
            <div className="col-md-4 no-padding" key={i}> {/* eslint-disable-line */}
              <div className={`events-card ${i % 2 === 1 && 'light'}`}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
          ))}


        </div>
      </div>


      <div className="container-fluid cari-amici-section brand-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center white-text">{blogSectionTitle}</h2>
          </div>

          <div className="col">
            <div className="container">
              <div className="row">
                {[1, 1].map((post, i) => (
                  <BlogCard key={i} /> /* eslint-disable-line */
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm title={contactSectionTitle} />

      <div className="container cari-amici-section white-bg">
        <h2 className="text-center dk-brand-text">Follow me on Instagram</h2>
        <div className="instagram-container text-center">
          <img src={instagram} alt="" />
          @italian_flavours
        </div>
        <div className="row justify-content-center">

          {instagramPhotos.map(photo => <InstagramPhoto id={photo.id} key={photo.id} />)}

        </div>
      </div>
    </div>
  )
}

PersonalizedEventsTemplate.propTypes = {
  hero: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    ctaLink: PropTypes.string,
    bgOverlay: PropTypes.string,
    bgImage: PropTypes.string,
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
  }),
  blogSectionTitle: PropTypes.string,
  contactSectionTitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),

}

const PersonalizedEvents = ({
  data: {
    markdownRemark: {
      frontmatter: {
        contactSectionTitle, blogSectionTitle, descriptionCards,
        descriptionTitle, hero, title, personalizedEventsGallery,
        midDescriptionTitle, midDescriptionBody, instagramPhotos,
      }, html,
    },
  },
}) => (
  <PersonalizedEventsTemplate
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
    contactSectionTitle={contactSectionTitle}

    content={html}
    contentComponent={HTMLContent}
    instagramPhotos={instagramPhotos}
  />
)

export default PersonalizedEvents

PersonalizedEvents.propTypes = {
  data: PropTypes.shape({
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
        title
        hero {
          subtitle
          bgImage
          heroBgOverlay
          ctaText
          ctaLink
        }
        descriptionTitle
        personalizedEventsGallery {
          image
        }
        midDescriptionTitle
        midDescriptionBody
        descriptionCards {
          title
          body
        }
        blogSectionTitle
        contactSectionTitle
        instagramPhotos {
          id
        }
      }
    }
  }
`
