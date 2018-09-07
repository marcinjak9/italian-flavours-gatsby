import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions';
// import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'
import TourCard from '../components/TourCard'
import MapFormContainer from '../components/MapFormContainer'
import HelmetSection from '../components/HelmetSection'
import BlogSection from '../components/BlogSection';
import Hero from '../components/Hero'

export const HomePageTemplate = (props) => {
  const {
    hero, tourTitle, infoSection,
    content, contentComponent, tours,
    contactSection, seoSection, blogTitle, blogPosts,
  } = props
  const PostContent = contentComponent || Content
  const posts = blogPosts ? blogPosts.map(post => post.slug) : []
  return (
    <PageTransition>
      {seoSection && <HelmetSection seoSection={seoSection} />}
      <Hero
        images={{
          bgImage: hero.bgImage,
          bgImage1280: hero.bgImage1280,
          bgImage1024: hero.bgImage1024,
          bgImage768: hero.bgImage768,
          bgImage480: hero.bgImage480,
          bgImage320: hero.bgImage320,
        }}
        bgOverlay={hero.bgOverlay}
        title={hero.title}
        payoff={hero.payoff}
        cta={() => <Link to={hero.buttonLink} className="btn btn-primary">{hero.buttonText}</Link>}
      />

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


      <BlogSection
        posts={posts}
        title={blogTitle}
        cta={() => <a href="https://blog.it.marcinjakubik.io" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">see the blog</a>}
        home
      />

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
    bgImage1280: PropTypes.string,
    bgImage1024: PropTypes.string,
    bgImage768: PropTypes.string,
    bgImage480: PropTypes.string,
    bgImage320: PropTypes.string,
    title: PropTypes.string,
    payoff: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    bgOverlay: PropTypes.bool,
  }),
  tourTitle: PropTypes.string,
  blogTitle: PropTypes.string,
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
  })),
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
      bgImage1280: pageData.frontmatter.hero.image1280,
      bgImage1024: pageData.frontmatter.hero.image1024,
      bgImage768: pageData.frontmatter.hero.image768,
      bgImage480: pageData.frontmatter.hero.image480,
      bgImage320: pageData.frontmatter.hero.image320,
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
    blogTitle={pageData.frontmatter.blogNewsTitle}
    blogPosts={pageData.frontmatter.blogPosts}
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
        blogNewsTitle: PropTypes.string,
        blogPosts: PropTypes.arrayOf(PropTypes.shape({
          slug: PropTypes.string,
        })),
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
          image1280
          image1024
          image768
          image480
          image320
          heroBgOverlay
          payoff
          title
        }
        tourSectionTitle
        blogNewsTitle
        blogPosts {
          slug
        }
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
