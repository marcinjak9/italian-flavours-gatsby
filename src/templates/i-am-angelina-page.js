import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import like from '../img/like.svg'
import comment from '../img/comment.svg'
import mappa from '../img/mappa@2x.png'
import instagram from '../img/instagram-icon-black.png'

export const AboutPageTemplate = () => {

  return (
    <div>
      <div class="container-fluid hero-container" style={{ backgroundImage: "url('https://placehold.it/1920x1080')" }}>
        <div class="row outer-row">
          <div class="col">
            <div class="container">
              <div class="row no-margin d-flex flex-column justify-content-center">
                <div class="col-md-8 hero">
                  <h1 class="white-text">I am Angelina</h1>
                  <h3>I am a Sardinian professional gourmet travel consultant, founder of Italian Flavours, a boutique gourmet tour
                    operator specialised in creating unique cultural-culinary holidays in Italy.
              </h3>
                  <a href="#" class="btn btn-primary">Talk to me</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div class="container home-section first-section white-bg">
        <div class="row">
          <div class="col-md-12 section-title-wrapper">
            <h2 class="text-center">You're in good hands</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <p class="text-spacing">I graduated in Italian Literature and I attained a Master degree in Gourmet and Quality Food at the renowned University
              of Florence, where I had the chance to deepen my knowledge about the history of Italian gourmet culture products.
              <br />
              <br /> I collaborated with the Tourist Board of Oristano, where I live and I worked as a senior quality consultant for
              10 years. After many years working in the field, I decided to put these experiences to use and I founded my first
              own company, Sardinia Flavour, which aim was to make people all over the world know and taste the most precious
              and traditional delicacies from Italy.
              <br />
              <br /> The inspirational experience with Sardinia Flavour allowed me to get in touch with the most antique food traditions
              and the best Italian food artisans, as well as the best Italian wineries and gourmet restaurants, a network of
              little precious jewels, the ones you are going to visit during the unique tours I create every year.
              <br />
              <br /> My mission is to give my little contribution to preserve small artisan producers and all those gourmet and cultural
              Italian peculiarities offering travel experiences off the beaten track, far from touristic places and restaurants,
              however promoting the knowledge of Italian authenticities, letting people directly experience, smell and taste
              the real perfumes, flavours and colours of Italian regional culture and the most gorgeous hidden secrets of Italian
              artistic heritage.
              <br />
              <br /> My clients are mainly from UK, North-Est Europe and above all Australia. My passion in sharing the beauty and
              uniqueness of the authentic Italian Gourmet Culture has given me the chance to build strong and meaningful relationships
              with them. Most of my clients have been traveling with me for years, enjoying the relaxing atmosphere of lovely
              boutique hotels and agriturismi, funny cooking classes, which some of them I lead personally, mouth-watering wine
              and food tastings and knowing the most authentic soul of Italy and, at the end, becoming more than simple clients
          for me, but “cari amici” (dear friends).</p>
            <br />
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <i class="material-icons brand-text">favorite</i>
          </div>
        </div>

      </div>


      <div class="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
        <div class="row">
          <div class="container">
            <form class="row contact-form d-flex flex-column">
              <div class="col-md-12">
                <h2 class="text-center dk-brand-text">Let's get in touch! I'd love to hear from you.</h2>
              </div>
              <div class="col-md-12 contact-form-wrapper">
                <div class="row">
                  <div class="col-md-7">
                    <div class="form-group">
                      <input type="text" class="form-control" id="nome" placeholder="Name" />
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex justify-content-center align-items-start">

                    <div class="dashed-container flex-column">
                      <p class="title">HEADQUARTER</p>
                      <div class="d-flex flex-row">
                        <i class="material-icons">location_on</i>
                        <p>
                          Piazza Roma 46
                      <br /> 09170 - Oristano
                      <br /> Sardinia - Italy
                    </p>
                      </div>
                      <div class="d-flex flex-row">
                        <i class="material-icons">phone</i>
                        <p>
                          +39 123 456 7890
                    </p>
                      </div>
                      <div class="d-flex flex-row">
                        <i class="material-icons">email</i>
                        <p>
                          angelafadda@italianflavours.it
                    </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </form>
            <div class="col-md-12 text-center">
              <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container cari-amici-section white-bg">
        <h2 class="text-center dk-brand-text">Follow me on Instagram</h2>
        <div class="instagram-container text-center">
          <img src={instagram} alt="" /> @italian_flavours
    </div>
        <div class="row">

          <div class="col-md-3">
            <div class="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" class="instagram-link">
                <img src="https://placehold.it/235x235" class="instagram-img" alt="Lights" />
                <div class="instagram-overlay">
                  <span>
                    <img src={like} class="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} class="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" class="instagram-link">
                <img src="https://placehold.it/235x235" class="instagram-img" alt="Lights" />
                <div class="instagram-overlay">
                  <span>
                    <img src={like} class="svg" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} class="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" class="instagram-link">
                <img src="https://placehold.it/235x235" class="instagram-img" alt="Lights" />
                <div class="instagram-overlay">
                  <span>
                    <img src={like} class="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} class="svg comment" alt="" /> 12
              </span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="thumbnail instagram-img-container">
              <a href="https://placehold.it/235x235" class="instagram-link">
                <img src="https://placehold.it/235x235" class="instagram-img" alt="Lights" />
                <div class="instagram-overlay">
                  <span>
                    <img src={like} class="svg like" alt="" /> 78
              </span>
                  <span>
                    <img src={comment} class="svg comment" alt="" /> 12
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


const AboutPage = () => {
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={""}
      content={""}
    />
  )
}

export default AboutPage

