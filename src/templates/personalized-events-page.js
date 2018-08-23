import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import like from '../img/like.svg'
import comment from '../img/comment.svg'
import mappa from '../img/mappa@2x.png'
import instagram from '../img/instagram-icon-black.png'

export const PersonalizedEventsTemplate = () => {
  return (
    <div>

      <div className="container-fluid hero-container" style={{ backgroundImage: "url('https://placehold.it/1920x1080')" }}>
        <div className="row outer-row">
          <div className="col">
            <div className="container">
              <div className="row no-margin d-flex flex-column justify-content-center">
                <div className="col-md-8 offset-md-2 hero">
                  <h1 className="white-text">We do it all together, in anyplace you want</h1>
                  <h3>An unforgettable gourmet journey among the most antique and precious culinary and cultural traditions of Italy</h3>
                  <a href="#" className="btn btn-primary">ask me more</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container personalized-events-section first-section white-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="grey-text text-center">Share your passion for Italy with people you love directly at your place</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 padding-2 text-spacing-container">
            <p>
              <br />Are you dreaming about bringing back home the charming atmosphere you enjoyed during our tour together or during
          your fabulous holiday in Italy?</p>
            <p>Are you missing the authentic smells of that delicious wine or the unique flavours of those truffle crostini you
          tasted in that typical, hidden trattoria in Tuscany?</p>
            <p>I can definitely help you relieving your nostalgia for Italy…awaiting for your next gourmet experience, of course!
        </p>
            <p>I also go on tour abroad and when I do, I love bringing the real soul, flavours and perfumes of Italy directly to
          my guests houses, wherever they are in the world.</p>
            <strong className="dk-brand-text"> During all the events I will hold a special class dedicated to the “Italian gourmet etiquette” and a speech about
              Italian culture and the most antique wine and food traditions in Italy, this is the Angelina’s Italian Gourmet
              School.
        </strong>
          </div>
        </div>
      </div>

      <div className="container-fluid personalized-events-section">
        <div className="row">
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
          <div className="col-md-4 padding-1">
            <div className="card card-gallery">
              <img className="card-img-top" src="https://placehold.it/425x425" alt="Card image cap" />
            </div>
          </div>
        </div>
      </div>

      <div className="container personalized-events-section">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center dk-brand-text padding-2">I bring italian food culture at your home</h2>
            <div className="col-md-10 offset-md-1">
              <p className="text-center grey-text">These are only some of the high class culinary experiences I can organise personally for family gatherings or celebrations,
            private dinners, business meetings, corporate events or private parties in general:</p>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid personalized-events-section">
        <div className="row">

          <div className="col-md-4 no-padding">
            <div className="events-card light">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>
          <div className="col-md-4 no-padding">
            <div className="events-card">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>
          <div className="col-md-4 no-padding">
            <div className="events-card light">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>
          <div className="col-md-4 no-padding">
            <div className="events-card">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>
          <div className="col-md-4 no-padding">
            <div className="events-card light">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>
          <div className="col-md-4 no-padding">
            <div className="events-card">
              <h3>Pop-up dinners Italian style</h3>
              <p>In a funny show-cooking I will make the most traditional Italian recipes for you and your guests, using the best
                Italian gourmet products, as truffles, excellent extra-virgin olive oil, handmade pasta and much more. A charming
                dinner will follow, where we will talk about Italy and Italian traditions, while enjoying my personal selection
            of delicious Italian wines.</p>
            </div>
          </div>

        </div>
      </div>


      <div className="container-fluid cari-amici-section brand-bg">
        <div className="row">
          <div className="col-md-12 section-title-wrapper">
            <h2 className="text-center white-text">Cari Amici from some personalised events</h2>
          </div>

          <div className="col-md-6">
            <div className="card home-card">
              <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap"></div>
              <div className="card-body">
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
                <a href="#" className="btn btn-link">Discover more</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card home-card">
              <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap"></div>
              <div className="card-body">

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
                <a href="#" className="btn btn-link">Discover more</a>
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
        <div className="row">
          <div className="container">
            <form className="row contact-form d-flex flex-column">
              <div className="col-md-12">
                <h2 className="text-center dk-brand-text">Let's get in touch! I'd love to hear from you.</h2>
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
                      <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex justify-content-center align-items-start">

                    <div className="dashed-container flex-column">
                      <p className="title">HEADQUARTER</p>
                      <div className="d-flex flex-row">
                        <i className="material-icons">location_on</i>
                        <p>
                          Piazza Roma 46
                      <br /> 09170 - Oristano
                      <br /> Sardinia - Italy
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
          <img src={instagram} alt="" /> @italian_flavours
    </div>
        <div className="row">

          <div className="col-md-3">
            <div className="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" className="instagram-link">
                <img src="https://placehold.it/235x235" className="instagram-img" alt="Lights" />
                <div className="instagram-overlay">
                  <span>
                    <img src={like} className="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} className="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" className="instagram-link">
                <img src="https://placehold.it/235x235" className="instagram-img" alt="Lights" />
                <div className="instagram-overlay">
                  <span>
                    <img src={like} className="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} className="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" className="instagram-link">
                <img src="https://placehold.it/235x235" className="instagram-img" alt="Lights" />
                <div className="instagram-overlay">
                  <span>
                    <img src={like} className="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} className="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" className="instagram-link">
                <img src="https://placehold.it/235x235" className="instagram-img" alt="Lights" />
                <div className="instagram-overlay">
                  <span>
                    <img src={like} className="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} className="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const PersonalizedEvents = () => {
  return (
    <PersonalizedEventsTemplate
    // contentComponent={HTMLContent}
    // title={post.frontmatter.title}
    // content={post.html}
    />
  )
}

export default PersonalizedEvents