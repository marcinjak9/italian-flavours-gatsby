import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Icon from 'material-icons-react'
import PageTransition from 'gatsby-v2-plugin-page-transitions';

import Content from '../../components/Content'
import instagram from '../../img/instagram-icon-black.png'
import InstagramPhoto from '../../components/InstagramPhoto'
import ContactForm from '../../components/ContactForm'
import styles from '../../layouts/styles/styles'
import HelmetSection from '../../components/HelmetSection';
import { getImageLink } from '../../components/Image'

const AboutPageTemplate = ({
  hero, instagramPhotos, contentComponent, descriptionTitle, contactSectionTitle, content, seoSection,
}) => {
  const PostContent = contentComponent || Content
  return (
    <PageTransition>
      {seoSection && <HelmetSection seoSection={seoSection} />}
      <div className="container-fluid hero-container" style={{ backgroundImage: `url('${getImageLink(hero.image)}')` }}>
        {hero.bgOverlay && <div className="hero-overlay" /> }
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-8 hero">
                  <h1 className="white-text">{hero.title}</h1>
                  <h3>
                    {hero.subtitle}
                  </h3>
                  <Link href={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container home-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center">{descriptionTitle}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <PostContent content={content} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Icon icon="favorite" color={styles.primary} />
          </div>
        </div>

      </div>
      <ContactForm title={contactSectionTitle} />
      <div className="container cari-amici-section white-bg">
        <h2 className="text-center dk-brand-text">Follow me on Instagram</h2>
        <div className="instagram-container text-center">
          <a href="https://www.instagram.com/italian_flavours/">
            <img src={instagram} alt="" />
              @italian_flavours
          </a>
        </div>
        <div className="row justify-content-center">
          {instagramPhotos.map(item => (
            <InstagramPhoto key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

AboutPageTemplate.propTypes = {
  seoSection: PropTypes.shape({
    ogImage: PropTypes.any,
    ogTitle: PropTypes.string,
    ogUrl: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
  hero: PropTypes.shape({
    subtitle: PropTypes.string,
    image: PropTypes.any,
    ctaLink: PropTypes.string,
    ctaText: PropTypes.string,
  }),
  instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  contactSectionTitle: PropTypes.string,
  descriptionTitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}


export default AboutPageTemplate
