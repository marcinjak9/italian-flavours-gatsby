import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
import shortid from 'shortid'
import Content from '../../components/Content'
import instagram from '../../img/instagram-icon-black.png'
import BlogSection from '../../components/BlogSection';
import ContactForm from '../../components/ContactForm';
import InstagramPhoto from '../../components/InstagramPhoto';
import HelmetSection from '../../components/HelmetSection';
import Image, { getImageLink } from '../../components/Image';

const PersonalizedEventsTemplate = ({
  hero, descriptionSection, gallerySection, blogSectionTitle, contactSectionTitle,
  content, contentComponent, instagramPhotos, seoSection, blogPosts,
}) => {
  const PostContent = contentComponent || Content
  const posts = blogPosts ? blogPosts.map(post => post.slug) : []
  return (
    <PageTransition>
      {seoSection && <HelmetSection seoSection={seoSection} />}
      <div className="container-fluid hero-container" style={{ backgroundImage: `url('${getImageLink(hero.image)}')` }}>
        {hero.bgOverlay && <div className="hero-overlay" /> }
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-8 offset-md-2 hero">
                  <h1 className="white-text">{hero.title}</h1>
                  <h3>{hero.subtitle}</h3>
                  <Link to={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container personalized-events-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper mb-5">
            <h2 className="grey-text text-center">{descriptionSection.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 text-spacing-container">
            <PostContent content={content} />
          </div>
        </div>
      </div>

      <div className="container-fluid personalized-events-section">
        <div className="row">
          {gallerySection.images.map(item => (
            <div className="col-md-4 padding-1" key={shortid.generate()}>
              <div className="card card-gallery">
                <Image className="card-img-top" image={item.image} alt="Card image cap" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container personalized-events-section">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center dk-brand-text">{gallerySection.title}</h2>
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
                {card.icon && <Image image={card.icon} className="card-icon" />}
              </div>
            </div>
          ))}


        </div>
      </div>


      <BlogSection
        posts={posts}
        title={blogSectionTitle}
        cta={() => <a href="https://blog.it.marcinjakubik.io" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">see the blog</a>}
        home
      />

      <ContactForm title={contactSectionTitle} />

      <div className="container cari-amici-section white-bg">
        <h2 className="text-center dk-brand-text">Follow me on Instagram</h2>
        <div className="instagram-container text-center">
          <img src={instagram} alt="Instagram image" />
          @italian_flavours
        </div>
        <div className="row justify-content-center">

          {instagramPhotos.map(photo => <InstagramPhoto id={photo.id} key={photo.id} />)}

        </div>
      </div>
    </PageTransition>
  )
}

PersonalizedEventsTemplate.propTypes = {
  seoSection: PropTypes.shape({
    ogImage: PropTypes.any,
    ogTitle: PropTypes.string,
    ogUrl: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
  hero: PropTypes.shape({
    image: PropTypes.any,
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
      image: PropTypes.any,
    })),
    title: PropTypes.string,
    body: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    })),
  }),
  blogSectionTitle: PropTypes.string,
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
  })),
  contactSectionTitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),

}

export default PersonalizedEventsTemplate
