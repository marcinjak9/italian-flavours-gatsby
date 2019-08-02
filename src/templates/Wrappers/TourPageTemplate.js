import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import shortid from 'shortid'
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import instagramIcon from '../../img/instagram-icon-black.png'
import InstagramPhoto from '../../components/InstagramPhoto'
import ContactForm from '../../components/ContactForm'
import CalendarComponent from '../../components/CalendarComponent'
import BlogSection from '../../components/BlogSection'
import HelmetSection from '../../components/HelmetSection'
import Image, { getImageLink } from '../../components/Image'


const TourPageTemplate = ({
  hero, descriptionSection, gallery, blogSectionTitle, calendar, instagram, seoSection,
  blogPosts,
}) => (
  <PageTransition>
    {seoSection && <HelmetSection seoSection={seoSection} />}
    <div className="container-fluid hero-container" style={{ backgroundImage: `url('${getImageLink(hero.image)}')` }}>
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
              {card.icon && <Image image={card.icon} className="card-icon" />}
            </div>
          </div>
        ))}


      </div>
    </div>


    <BlogSection
      posts={blogPosts ? blogPosts.map(post => post.slug) : []}
      title={blogSectionTitle}
      // cta={() => <Link to="/" className="btn btn-outline-light btn-lg">see the blog</Link>}
      tour
    />

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
        <a href="https://www.instagram.com/italian_flavours/">
          <img src={instagramIcon} alt="" />
          {' '}
            @
          {instagram.username}
        </a>
      </div>
      <div className="row justify-content-center">

        {instagram.images.map(photo => (
          <InstagramPhoto id={photo.id} key={photo.id} />
        ))}

      </div>
    </div>

  </PageTransition>
)


TourPageTemplate.propTypes = {
  seoSection: PropTypes.shape({
    ogImage: PropTypes.string,
    ogTitle: PropTypes.string,
    ogUrl: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
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
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
  })),
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

export default TourPageTemplate
