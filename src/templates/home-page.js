import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'


export const HomePageTemplate = (props) => {
  console.log(props)
  const { hero, tourTitle, infoSection, blogImages, map, tourImages, html } = props
  const { content, contentComponent } = props
  const PostContent = contentComponent || Content
  return (
    <div>
      <div className="container-fluid hero-container">
        <img src={hero.bgImage} className="hero-bg-img" />
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-7 hero">
                  <h1 className="white-text">
                    {hero.title}
                  </h1>
                  <h3>
                    {hero.payoff}
                  </h3>
                  <Link to={hero.buttonLink} className="btn btn-primary">{hero.buttonText}</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container home-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center">{tourTitle}</h2>
          </div>

          {tourImages && [1, 1, 1, 1, 1, 1].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card home-card">
                <Img sizes={tourImages.edges[1].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
                <div className="card-body">
                  <Link to="/tour" className="plus-button-card">
                    <i className="material-icons">add</i>
                  </Link>
                  <h5 className="card-title">Grand Culinary Tour of Tuscany</h5>
                  <p className="card-text">A memorable gourmet journey among the most antique and precious culinary and cultural traditions of Italy. Aura
                    spreads light smoothly around a cozy space. Its smooth contoured edges create soft shadows that entice a relaxing
                    environment. Smoothly around a cozy space. </p>
                  <h6 className="card-subtitle">Highlights</h6>
                  <p className="card-text no-margin">Highlights wine tastings - relaxing environment - horse riding - private chaffeur - boutique hotels and high-level
                    agriturismi
                  </p>
                </div>
                <div className="card-action text-center">
                  <Link to="/tour" className="btn btn-link">Discover more</Link>
                </div>
              </div>
            </div>
          ))}




        </div>
      </div>


      <div className="container-fluid home-section smaller-section brand-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center white-text">More than clients, but Cari Amici</h2>
          </div>

          {blogImages && [1, 1, 1, 1].map((item, i) => (
            <div className="col-md-6" key={i}>
              <div className="card home-card">
                <Img sizes={blogImages.edges[0].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
                <div className="card-body">
                  <Link to="/" className="plus-button-card">
                    <i className="material-icons">nature_people</i>
                  </Link>
                  <h5 className="card-title font-italic">John and Katina - Brisbane (Australia)</h5>
                  <p className="card-text">Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
                    mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
                    to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
                    country with us.
                  </p>
                  <div className="card-date text-center">
                    June 2018
                  </div>
                </div>
                <div className="card-action text-center">
                  <Link to="/" className="btn btn-link">Discover more</Link>
                </div>
              </div>
            </div>
          ))}


          <div className="col-md-12 text-center cta-blog">
            <Link to="/" className="btn btn-outline-light btn-lg">see the blog</Link>
          </div>

        </div>
      </div>


      <div className="container-fluid cari-amici-section grey-bg">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title-wrapper">
                  <h2 className="text-center dk-brand-text">Let's start from here your tailor-made holidays</h2>
                </div>
                <form className="col-md-6 d-flex flex-column home-form">
                  <div className="select-group">
                    <div className="form-group select-form" style={{ marginBottom: 80 }}>
                      <select className="form-control" id="region-select">
                        <option style={{ marginTop: 50 }} value="" disabled selected>Select the region you don’t want missy</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group select-form">
                      <select className="form-control" id="activity-select">
                        <option value="" disabled selected>Select one “must to do” holiday’s activity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Your email address" />
                    <strong className="brand-text">I will let you know within 24-hrs</strong>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Let Me know</button>
                    </div>
                  </div>
                </form>
                <div className="col-md-6">
                  {map && <Img sizes={map.childImageSharp.sizes} className="img-fluid" alt="" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container home-section smaller-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center brand-text">{infoSection.title}</h2>
          </div>
          <div className="col-md-12 lead-text">
            <PostContent content={content} />
          </div>
          <div className="col-md-12 lead-text" style={{ marginBottom: '8rem' }}>
            <strong>I forgot something? Just ask me, I can make your holiday dream true!</strong>
          </div>
          <div className="col-md-12 text-center">
            <Link to={infoSection.buttonUrl} className="btn btn-primary btn-large">
              {infoSection.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const HomePage = ({ data: { blogImages, herobg, map, pageData, tourImages, } }) => {
  return (
    <HomePageTemplate
      hero={{
        bgImage: pageData.frontmatter.hero.image,
        title: pageData.frontmatter.hero.title,
        payoff: pageData.frontmatter.hero.payoff,
        buttonText: pageData.frontmatter.hero.ctaText,
        buttonLink: pageData.frontmatter.hero.ctaUrl
      }}
      tourTitle={pageData.frontmatter.tourSectionTitle}
      infoSection={{
        title: pageData.frontmatter.infoSection.title,
        buttonUrl: pageData.frontmatter.infoSection.ctaUrl,
        buttonText: pageData.frontmatter.infoSection.ctaText
      }}
      blogImages={blogImages}
      map={map}
      tourImages={tourImages}
      content={pageData.html}
      contentComponent={HTMLContent}
    />
  )
}

export default HomePage


export const HomePageQuery = graphql`
  query MapImage {
    map: file(relativePath: { eq: "mappa@2x.png" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
        } 
      }
    }
    herobg: file(relativePath: { eq: "travel.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        } 
      }
    }
    tourImages: allFile(filter: { absolutePath: { regex: "/img/tour/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 400) {
              ...GatsbyImageSharpSizes
            } 
          }
        }
      }
    }
    blogImages: allFile(filter: { absolutePath: { regex: "/img/tour/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            } 
          }
        }
      }
    }

    pageData: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      id
      html
      frontmatter {
        hero {
          ctaText
          ctaUrl
          image
          payoff
          title
        }
        tourSectionTitle
        blogNewsTitle
        contactSectionTitle
        infoSection {
          ctaText
          ctaUrl
          title
        }
      }
    }

  }
`