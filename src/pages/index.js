import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import homepageMap from '../img/mappa@2x.png'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <div className="container-fluid hero-container">
          <Img sizes={data.herobg.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" />
          <div className="row outer-row">
            <div className="col">
              <div className="container">
                <div className="row no-margin d-flex flex-column justify-content-center">
                  <div className="col-md-7 hero">
                    <h1 className="white-text">You tasty holiday in italy</h1>
                    <h3>I am specialised in tailor-made gourmet holidays. I love creating travel solutions that perfectly suit my guest
                      needs, who have always appreciated my attention to detail and creativity in organising unforgettable experiences.
                    </h3>
                    <Link to="/personalized-events" className="btn btn-primary">I listen to your dreams</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="container home-section first-section white-bg">
          <div className="row">
            <div className="col-md-12 section-title-wrapper">
              <h2 className="text-center">Savour your next holiday</h2>
            </div>

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[0].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[1].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[2].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[3].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[0].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-4">
              <div className="card home-card">
                <Img sizes={data.tourImages.edges[1].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

          </div>
        </div>


        <div className="container-fluid home-section smaller-section brand-bg">
          <div className="row">
            <div className="col-md-12 section-title-wrapper">
              <h2 className="text-center white-text">More than clients, but Cari Amici</h2>
            </div>

            <div className="col-md-6">
              <div className="card home-card">
                <Img sizes={data.blogImages.edges[0].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-6">
              <div className="card home-card">
                <Img sizes={data.blogImages.edges[1].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-6">
              <div className="card home-card">
                <Img sizes={data.blogImages.edges[2].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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

            <div className="col-md-6">
              <div className="card home-card">
                <Img sizes={data.blogImages.edges[3].node.childImageSharp.sizes} outerWrapperClassName="hero-bg-img" style={{ height: 250 }} />
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
                    <Img sizes={data.map.childImageSharp.sizes} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container home-section smaller-section white-bg">
          <div className="row">
            <div className="col-md-12 section-title-wrapper">
              <h2 className="text-center brand-text">What can i do for you...</h2>
            </div>
            <div className="col-md-12 lead-text">
              <ul>
                <li>
                  <strong>Tailor-made tours or travel solutions</strong> for whatever region or city in Italy
                </li>
                <li>
                  Tailored tours for specific cultural and folkloric events in Italy (as Terra Madre in Turin, Vinitaly in Verona, Taste in
                  Florence, Cibus in Parma)
                </li>
                <li>
                  Customized wine tastings and visits to the finest and most historical wineries in Italy
                </li>
                <li>
                  Dedicated master classes at the Banca del Vino (the Slow food bank of wine) in Piedmont
                </li>
                <li>
                  Truffle hunting
                </li>
                <li>
                  Exclusive extra-virgin olive oil tastings based on your desires
                </li>
                <li>
                  Mouth-watering cheese tastings and prosciutto tastings
                </li>
                <li>
                  Funny cooking classes and culinary courses about the most traditional Italian recipes and dishes, as tortellini, gnocchi,
                  ravioli, parmigiana, to mention some
                </li>
                <li>
                  Exciting gourmet mini-cruises in catamaran in Sardinia, discovering water caves and pristine beaches with incredible crystal
                  clear water
                </li>
                <li>
                  Visits to the finest Italian artisans, master pasta makers, pastry chefs, to the oldest cafes and historical pizza restaurants
                  in Italy
                </li>
                <li>
                  The most romantic and original setup for your marriage proposal or for your anniversary, embellished with gourmet delicacies
                  and precious wines, all exclusively Italian
                </li>
                <li>
                  Funny rides on the original Vespa along the paths of the most beautiful towns in Italy
                </li>
                <li>
                  Photo tours for you to discover the most precious and unique cultural and folkloric traditions in Italy
                </li>
                <li>
                  Exciting “passeggiate” to breath-taking locations aboard the mythical, iconic FIAT 500
                </li>
                <li>
                  Delicious lunches in the company of shepherds and farmers, who will cook mouthwatering local dishes for you
                </li>
                <li>
                  And I can also let you experience the thrill of the olive harvest or the grape harvest, our vendemmia, following the Italian
                  oldest tradition
                </li>
              </ul>
            </div>
            <div className="col-md-12 lead-text" style={{ marginBottom: '8rem' }}>
              <strong>I forgot something? Just ask me, I can make your holiday dream true!</strong>
            </div>
            <div className="col-md-12 text-center">
              <Link to="/" className="btn btn-primary btn-large">
                tell me about your desires
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const IndexPageQuery = graphql`
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
  }
`