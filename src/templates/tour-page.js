import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import like from '../img/like.svg'
import comment from '../img/comment.svg'
import instagramIcon from '../img/instagram-icon-black.png'
import InstagramPhoto from '../components/InstagramPhoto'
import ContactForm from '../components/ContactForm'

export const TourPageTemplate = ({
  hero, descriptionSection, gallery, blogSectionTitle, calendar, instagram,
}) => (
  <div>
    <div className="container-fluid hero-container" style={{ backgroundImage: `url('${hero.image}')` }}>
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

    <div className="container-fluid personalized-events-section first-section white-bg">
      <div className="row padding-2">
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
          <div className="col-md-4 padding-1" key={photo.image}>
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
          <h2 className="text-center dk-brand-text padding-2">{gallery.galleryTitle}</h2>
          <p className="text-center grey-text left-right">
            {gallery.galleryDescription}
          </p>
        </div>
      </div>
    </div>

    <div className="container-fluid personalized-events-section">
      <div className="row">

        {gallery.galleryBottom && gallery.galleryBottom.map(photo => (
          <div className="col-md-4 padding-1" key={photo.image}>
            <div className="card card-gallery">
              <img className="card-img-top" src={photo.image} alt="" />
            </div>
          </div>
        ))}

      </div>
    </div>

    <div className="container-fluid cari-amici-section grey-bg">
      <h1 className="text-center grey-text">{blogSectionTitle}</h1>
      <div className="row">

        <div className="col-md-6">
          <div className="card home-card">
            <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-italic">Alex and Jane Sullivan (Canada)</h5>
              <p className="card-text">
                Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
                mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
                to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
                country with us.
              </p>
              <div className="card-date text-center">
                September 2017
              </div>
            </div>
            <div className="card-action text-center">
              <a href="/" className="btn btn-link">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card home-card">
            <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-italic">Yu Yan - Taipei (Taiwan)</h5>
              <p className="card-text">
                Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
                mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
                to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
                country with us.
              </p>
              <div className="card-date text-center">
                September 2017
              </div>
            </div>
            <div className="card-action text-center">
              <a href="/" className="btn btn-link">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid cari-amici-section white-bg">
      <h1 className="text-center grey-text padding-2">{calendar.title}</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h6 className="text-center grey-text">
            {calendar.body}
          </h6>
        </div>
        <div className="col-md-6 offset-md-3 d-flex justify-content-center">
          <div id="calendar" />
          {calendar.dates.map(date => (
            <p key={date.startDate}>
              {date.startDate}
              {' '}
              {date.endDate}
            </p>
          ))}
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
      <div className="row">

        {instagram.images.map(photo => (
          <InstagramPhoto id={photo.image} key={photo.image} />
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
    galleryBottom: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string,
    })),
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
        galleryUpper, galleryBottom, calendarTitle, calendarBody, calendarNotes, aviabilityDates,
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
      galleryBottom,
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
        }
        tourDescription {
          title
          body
          image
        }
        
        galleryUpper {
          image
        }
        galleryBottom {
          image
        }
        gallery {
          textTitle
          textBody
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
