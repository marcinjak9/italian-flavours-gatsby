import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
// import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'
import TourCard from '../components/TourCard'
import BlogCard from '../components/BlogCard'
import MapFormContainer from '../components/MapFormContainer'
import HelmetSection from '../components/HelmetSection'


export const HomePageTemplate = (props) => {
  const {
    hero, tourTitle, infoSection,
    content, contentComponent, tours,
    contactSection, seoSection,
  } = props
  const PostContent = contentComponent || Content
  return (
    <PageTransition>
      {seoSection && <HelmetSection seoSection={seoSection} />}
      <div className="container-fluid hero-container">
        <img src={hero.bgImage} className="hero-bg-img" alt="" />
        {hero.bgOverlay && <div className="hero-overlay" />}
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row d-flex flex-column justify-content-center">
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

          {tours && tours.edges && tours.edges.map(item => (
            <TourCard
              key={item.node.id}
              title={item.node.frontmatter.title}
              image={item.node.frontmatter.hero.image}
              description={item.node.frontmatter.tourShortDescription}
              highlights={item.node.frontmatter.highlights}
              url={item.node.fields.slug}
            />
          ))}

        </div>
      </div>


      <div className="container-fluid home-section smaller-section brand-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center white-text">More than clients, but Cari Amici</h2>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                {[1, 1, 1, 1].map((item, i) => (
                  <BlogCard key={i} /> // eslint-disable-line
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center cta-blog">
            <Link to="/" className="btn btn-outline-light btn-lg">see the blog</Link>
          </div>

        </div>
      </div>

      {tours
        && (
        <MapFormContainer
          regions={tours.edges.map(tour => tour.node.frontmatter.region)}
          title={contactSection.title}
          options={contactSection.list}
          subregion={tours.edges.map(tour => tour.node.frontmatter.subRegion)}
        />
        )}

      <div className="container home-section smaller-section description-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center brand-text">{infoSection.title}</h2>
          </div>
          <div className="col-md-12 lead-text">
            <PostContent content={content} />
          </div>
          <div className="col-md-12 lead-text">
            <strong>I forgot something? Just ask me, I can make your holiday dream true!</strong>
          </div>
          <div className="col-md-12 text-center">
            <Link to={infoSection.buttonUrl} className="btn btn-primary btn-large">
              {infoSection.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

HomePageTemplate.propTypes = {
  seoSection: PropTypes.shape({
    ogImage: PropTypes.string,
    ogTitle: PropTypes.string,
    ogUrl: PropTypes.string,
    seoDescription: PropTypes.string,
    seoKeywords: PropTypes.string,
    seoTitle: PropTypes.string,
  }),
  hero: PropTypes.shape({
    bgImage: PropTypes.string,
    title: PropTypes.string,
    payoff: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    bgOverlay: PropTypes.bool,
  }),
  tourTitle: PropTypes.string,
  infoSection: PropTypes.shape({
    title: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonText: PropTypes.string,
  }),
  tours: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      hero: PropTypes.shape({
        image: PropTypes.string,
      }),
    }),
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  contactSection: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
  }),
}

const HomePage = ({
  data: {
    pageData, tours,
  },
}) => (
  <HomePageTemplate
    seoSection={pageData.frontmatter.seoSection}
    hero={{
      bgImage: pageData.frontmatter.hero.image,
      title: pageData.frontmatter.hero.title,
      payoff: pageData.frontmatter.hero.payoff,
      buttonText: pageData.frontmatter.hero.ctaText,
      buttonLink: pageData.frontmatter.hero.ctaUrl,
      bgOverlay: pageData.frontmatter.hero.heroBgOverlay,
    }}
    tourTitle={pageData.frontmatter.tourSectionTitle}
    infoSection={{
      title: pageData.frontmatter.infoSection.title,
      buttonUrl: pageData.frontmatter.infoSection.ctaUrl,
      buttonText: pageData.frontmatter.infoSection.ctaText,
    }}
    tours={tours}
    content={pageData.html}
    contentComponent={HTMLContent}
    contactSection={{
      title: pageData.frontmatter.contactSectionTitle,
      list: pageData.frontmatter.contactFormOptions,
    }}
  />
)


HomePage.propTypes = {
  data: PropTypes.shape({
    pageData: PropTypes.shape({
      frontmatter: PropTypes.shape({
        seoSection: PropTypes.shape({
          ogImage: PropTypes.string,
          ogTitle: PropTypes.string,
          ogUrl: PropTypes.string,
          seoDescription: PropTypes.string,
          seoKeywords: PropTypes.string,
          seoTitle: PropTypes.string,
        }),
        hero: PropTypes.shape({
          image: PropTypes.string,
          title: PropTypes.string,
          payoff: PropTypes.string,
          buttonText: PropTypes.string,
          buttonLink: PropTypes.string,
          bgOverlay: PropTypes.bool,
        }),
        tourSectionTitle: PropTypes.string,
        infoSection: PropTypes.shape({
          title: PropTypes.string,
          ctaUrl: PropTypes.string,
          ctaText: PropTypes.string,
        }),
      }),
      html: PropTypes.string,
    }),
    tours: PropTypes.object,
  }),
}

export default HomePage


export const HomePageQuery = graphql`
  query HomepageQuery {
    tours: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "tour-page" } featured: { eq: true } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            hero {
              image
            }
            region
            subRegion
            tourShortDescription
            highlights
          }
        }
      }
    }

    pageData: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      id
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
        hero {
          ctaText
          ctaUrl
          image
          heroBgOverlay
          payoff
          title
        }
        tourSectionTitle
        blogNewsTitle
        contactSectionTitle
        contactFormOptions {
          title
        }
        infoSection {
          ctaText
          ctaUrl
          title
        }
      }
    }

  }
`
