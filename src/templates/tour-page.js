import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import shortid from 'shortid'
import instagramIcon from '../img/instagram-icon-black.png'
import InstagramPhoto from '../components/InstagramPhoto'
import ContactForm from '../components/ContactForm'
import CalendarComponent from '../components/CalendarComponent'
import BlogCard from '../components/BlogCard'

export const TourPageTemplate = ({
  hero, descriptionSection, gallery, blogSectionTitle, calendar, instagram,
}) => (
  <div>
    <div className="container-fluid hero-container" style={{ backgroundImage: `url('${hero.image}')` }}>
      {hero.bgOverlay && <div className="hero-overlay" /> }
      <div className="row outer-row">
        <div className="col">
          <div className="container">
            <div className="row no-margin d-flex flex-column justify-content-center">
              <div className="col-md-12 hero">
                <h1 className="white-text">{hero.title}</h1>
                <div className="col-md-6 offset-md-3">
                  <h3>
                    {hero.subtitle}
                  </h3>
                </div>
                <Link to={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="container personalized-events-section first-section white-bg">
      <div className="row">
        <div className="col-md-8 section-title-wrapper">
          <h2 className="grey-text">{descriptionSection.title}</h2>
          <p className="text-spacing">
            {descriptionSection.body}
          </p>
        </div>
        <div className="col-md-4">
          <img src={descriptionSection.image} alt="" className="img-fluid" />
        </div>
      </div>
    </div>

    <div className="container-fluid personalized-events-section">
      <div className="row">

        {gallery.galleryUpper && gallery.galleryUpper.map(photo => (
          <div className="col-md-4 padding-1" key={shortid.generate()}>
            <div className="card card-gallery">
              <img className="card-img-top" src={photo.image} alt="" />
            </div>
          </div>
        ))}

      </div>
    </div>

    <div className="container-fluid personalized-events-section">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center dk-brand-text">{gallery.galleryTitle}</h2>
          <p className="text-center grey-text">
            {gallery.galleryDescription}
          </p>
        </div>
      </div>
    </div>

    {/* <div className="container-fluid personalized-events-section">
      <div className="row">

        {gallery.galleryBottom && gallery.galleryBottom.map(photo => (
          <div className="col-md-4 padding-1" key={shortid.generate()}>
            <div className="card card-gallery">
              <img className="card-img-top" src={photo.image} alt="" />
            </div>
          </div>
        ))}

      </div>
    </div> */}
    <div className="container-fluid personalized-events-section tour-page-cards">
      <div className="row">

        {gallery.cards.map((card, i) => (
          <div className="col-md-4 no-padding" key={i}> {/* eslint-disable-line */}
            <div className={`events-card ${i % 2 === 0 && 'light'}`}>
              <h3>{card.title}</h3>
              <h4 className="text-center">{card.subtitle}</h4>
              <p>{card.body}</p>
            </div>
          </div>
        ))}


      </div>
    </div>


    <div className="container-fluid cari-amici-section grey-bg">
      <div className="row">
        <div className="col-md-12 section-title-wrapper">
          <h2 className="text-center brand-text">{blogSectionTitle}</h2>
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

    <div className="container-fluid cari-amici-section white-bg">
      <h1 className="text-center grey-text">{calendar.title}</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h6 className="text-center grey-text mb-4 mt-4">
            {calendar.body}
          </h6>
        </div>
        <div className="col-md-6 offset-md-3 d-flex justify-content-center">
          <div id="calendar" />
          {calendar.dates && <CalendarComponent dates={calendar.dates} />}
        </div>
        <div className="col-md-4 offset-md-4">
          <br />
          <h6 className="text-center grey-text">
            {calendar.notes}
          </h6>
        </div>
      </div>
    </div>

    <ContactForm title={"Let's talk about your staying in Italy!"} />

    <div className="container cari-amici-section white-bg">
      <h2 className="text-center dk-brand-text">Follow me on Instagram</h2>
      <div className="instagram-container text-center">
        <img src={instagramIcon} alt="" />
        {' '}
        @
        {instagram.username}
      </div>
      <div className="row justify-content-center">

        {instagram.images.map(photo => (
          <InstagramPhoto id={photo.id} key={photo.id} />
        ))}

      </div>
    </div>

  </div>
)


TourPageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
    bgOverlay: PropTypes.bool,
  }),
  descriptionSection: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
  }),
  gallery: PropTypes.shape({
    galleryUpper: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    galleryTitle: PropTypes.string,
    galleryDescription: PropTypes.string,
    // galleryBottom: PropTypes.arrayOf(PropTypes.shape({
    //   image: PropTypes.string,
    // })),
  }),
  blogSectionTitle: PropTypes.string,
  calendar: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
    notes: PropTypes.string,
    dates: PropTypes.arrayOf(PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })),
  }),
  instagram: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
    username: PropTypes.string,
  }),
}

const TourPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        blogSectionTitle, gallery, hero, instagramPhotos, instagramUsername, title, tourDescription,
        galleryUpper, calendarTitle, calendarBody, calendarNotes, aviabilityDates, descriptionCards,
      },
    },
  },
}) => (
  <TourPageTemplate
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
        title
        hero {
          image
          subtitle
          ctaText
          ctaLink
          heroBgOverlay
        }
        tourDescription {
          title
          body
          image
        }
        
        galleryUpper {
          image
        }
        gallery {
          textTitle
          textBody
        }

        descriptionCards {
          title
          subtitle
          body
        }
        
        blogSectionTitle
        
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
