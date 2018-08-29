import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import like from '../img/like.svg'
import comment from '../img/comment.svg'
import mappa from '../img/mappa@2x.png'
import instagram from '../img/instagram-icon-black.png'
import InstagramPhoto from '../components/InstagramPhoto'

export const AboutPageTemplate = ({
  hero, instagramPhotos, contentComponent, descriptionTitle, contactSectionTitle, content,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <div className="container-fluid hero-container" style={{ backgroundImage: `url('${hero.image}')` }}>
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-8 hero">
                  <h1 className="white-text">{hero.title}</h1>
                  <h3>
                    {hero.subtitle}
                  </h3>
                  <a href={hero.ctaLink} className="btn btn-primary">{hero.ctaText}</a>
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
          <div className="col-md-10 offset-md-1 text-spacing-container">
            <PostContent content={content} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <i className="material-icons brand-text">favorite</i>
          </div>
        </div>

      </div>


      <div className="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
        <div className="row">
          <div className="container">
            <form className="row contact-form d-flex flex-column">
              <div className="col-md-12">
                <h2 className="text-center dk-brand-text">{contactSectionTitle}</h2>
              </div>
              <div className="col-md-12 contact-form-wrapper">
                <div className="row">
                  <div className="col-md-7">
                    <div className="form-group">
                      <input type="text" className="form-control" id="nome" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message" />
                    </div>
                  </div>
                  <div className="col-md-5 d-flex justify-content-center align-items-start">

                    <div className="dashed-container flex-column">
                      <p className="title">HEADQUARTER</p>
                      <div className="d-flex flex-row">
                        <i className="material-icons">location_on</i>
                        <p>
                          Piazza Roma 46
                          <br />
                          09170 - Oristano
                          <br />
                          Sardinia - Italy
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <i className="material-icons">phone</i>
                        <p>
                          +39 123 456 7890
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <i className="material-icons">email</i>
                        <p>
                          angelafadda@italianflavours.it
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </form>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container cari-amici-section white-bg">
        <h2 className="text-center dk-brand-text">Follow me on Instagram</h2>
        <div className="instagram-container text-center">
          <img src={instagram} alt="" />
          @italian_flavours
        </div>
        <div className="row">
          {instagramPhotos.map(item => (
            <InstagramPhoto id={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
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
        hero, instagramPhotos,
      },
      html,
    },
  },
}) => (
  <AboutPageTemplate
    hero={{
      title,
      subtitle: hero.subtitle,
      image: hero.bgImage,
      ctaLink: hero.ctaLink,
      ctaText: hero.ctaText,
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
        title
        hero {
          subtitle
          bgImage
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
