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
import Hero from '../components/Hero';

export const AboutPageTemplate = ({
  hero, instagramPhotos, contentComponent, descriptionTitle, contactSectionTitle, content, seoSection,
}) => {
  const PostContent = contentComponent || Content
  return (
    <PageTransition>
      {seoSection && <HelmetSection seoSection={seoSection} />}
      <Hero
        images={{
          bgImage: hero.image,
          bgImage1280: hero.image1280,
          bgImage1024: hero.image1024,
          bgImage768: hero.image768,
          bgImage480: hero.image480,
          bgImage320: hero.image320,
        }}
        bgOverlay={hero.bgOverlay}
        title={hero.title}
        payoff={hero.subtitle}
        cta={() => <Link to={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</Link>}
        centerText
      />
      <div className="container home-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center">{descriptionTitle}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 text-spacing-container">
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
          <img src={instagram} alt="" />
          @italian_flavours
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
    ogImage: PropTypes.string,
    ogTitle: PropTypes.string,
    ogUrl: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
  hero: PropTypes.shape({
    subtitle: PropTypes.string,
    image: PropTypes.string,
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


const AboutPage = ({
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
      image1280: hero.bgImage1280,
      image1024: hero.bgImage1024,
      image768: hero.bgImage768,
      image480: hero.bgImage480,
      image320: hero.bgImage320,
      ctaLink: hero.ctaLink,
      ctaText: hero.ctaText,
      bgOverlay: hero.heroBgOverlay,
    }}
    instagramPhotos={instagramPhotos}
    contentComponent={HTMLContent}
    descriptionTitle={descriptionTitle}
    contactSectionTitle={contactSectionTitle}
    content={html}
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
          ogImage
          ogTitle
          ogUrl
          seoDescription
          seoKeywords
          seoTitle
        }
        title
        hero {
          subtitle
          bgImage
          bgImage1280
          bgImage1024
          bgImage768
          bgImage480
          bgImage320
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
