import React from 'react'
import like from '../img/like.svg'
import comment from '../img/comment.svg'
import mappa from '../img/mappa@2x.png'
import instagram from '../img/instagram-icon-black.png'

export const TourPageTemplate = () => (
  <div>
    <div className="container-fluid hero-container" style={{ backgroundImage: "url('https://placehold.it/1920x1080')" }}>
      <div className="row outer-row">
        <div className="col">
          <div className="container">
            <div className="row no-margin d-flex flex-column justify-content-center">
              <div className="col-md-12 hero">
                <h1 className="white-text">Grand Culinary Tour in Tuscany</h1>
                <div className="col-md-6 offset-md-3">
                  <h3>An unforgettable gourmet journey among the most antique and precious culinary and cultural traditions of
                  Italy</h3>
                </div>

                <a href="#" className="btn btn-primary">ask me more</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid personalized-events-section first-section white-bg">
      <div className="row padding-2">
        <div className="col-md-8 section-title-wrapper">
          <h2 className="grey-text">Come with me. We dive into flavours and beauty.</h2>
          <p className="text-spacing">
            I graduated in Italian Literature and I attained a Master degree in Gourmet and Quality Food at the renowned University of
            Florence, where I had the chance to deepen my knowledge about the history of Italian gourmet culture products.
            <br />
            <br />
            I collaborated with the Tourist Board of Oristano, where I live and I worked as a senior quality consultant for
            10 years. After many years working in the field, I decided to put these experiences to use and I founded my first
            own company, Sardinia Flavour, which aim was to make people all over the world know and taste the most precious
            and traditional delicacies from Italy.
          </p>
        </div>
        <div className="col-md-4">
          <img src={mappa} alt="" className="img-fluid" />
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

    <div className="container-fluid personalized-events-section">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center dk-brand-text padding-2">Keywords and Highlights</h2>
          <p className="text-center grey-text left-right">
            Comincia a prendere famigliarità con i sapori, profumi, colori, e attività che ci accompagneranno in questo tour. E, perchè no, anche la musicalità dell'italiano.
          </p>
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

    <div className="container-fluid cari-amici-section grey-bg">
      <h1 className="text-center grey-text">Cari Amici on this tour with me </h1>
      <div className="row">

        <div className="col-md-6">
          <div className="card home-card">
            <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-italic">Alex and Jane Sullivan (Canada)</h5>
              <p className="card-text">
                Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
                mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
                to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
                country with us.
            </p>
              <div className="card-date text-center">
                September 2017
            </div>
            </div>
            <div className="card-action text-center">
              <a href="#" className="btn btn-link">Read more</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card home-card">
            <div className="card-img-top" style={{ backgroundImage: "url('https://placehold.it/400x200')" }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title font-italic">Yu Yan - Taipei (Taiwan)</h5>
              <p className="card-text">
                Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
                mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
                to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
                country with us.
            </p>
              <div className="card-date text-center">
                September 2017
            </div>
            </div>
            <div className="card-action text-center">
              <a href="#" className="btn btn-link">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid cari-amici-section white-bg">
      <h1 className="text-center grey-text padding-2">Available dates for your amazing tour</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h6 className="text-center grey-text">
            <br />
            Pick your more suitable period among the two blocks of 10 days on which I usually run this tour.</h6>
        </div>
        <div className="col-md-6 offset-md-3 d-flex justify-content-center">
          <div id="calendar"></div>
        </div>
        <div className="col-md-4 offset-md-4">
          <br />
          <h6 className="text-center grey-text">
            Same additional notes can be placed here.
          </h6>
        </div>
      </div>
    </div>

    <div className="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
      <div className="row">
        <div className="container">
          <form className="row contact-form d-flex flex-column">
            <div className="col-md-12">
              <h2 className="text-center dk-brand-text">Let's talk about your staying in Italy!</h2>
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


const TourPage = () => {
  return (
    <TourPageTemplate />
  )
}

export default TourPage
