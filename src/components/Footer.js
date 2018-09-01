import React from 'react'
import Link from 'gatsby-link'

import logoWhite from '../img/logo-white.png'
import instagramLogo from '../img/Instagram@2x.png'
import facebookLogo from '../img/Facebook@2x.png'

const Footer = () => (
  <footer className="container-fluid no-top-padding">
    <div className="row">
      <div className="col-md-12 text-center">
        <img src={logoWhite} alt="" className="footer-logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col footer-item">
            <Link to="/personalized-events">Tailored Tours</Link>
          </div>
          <div className="col footer-item">
            <Link to="/personalized-events">Personalised events</Link>
          </div>
          <div className="col footer-item">
            <Link to="/">Experiences Blog</Link>
          </div>
          <div className="col footer-item">
            <Link to="/i-am-angelina">I am Angelina</Link>
          </div>
          <div className="col footer-item">
            <Link to="/">Contact me</Link>
            <p className="footer-contacts">
              <a href="tel:+39 38 86 20 67 20">+39 38 86 20 67 20</a>
              <a href="mailto:info@italianflavours.it">info@italianflavours.it</a>
            </p>
          </div>

        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div className="row">
              <div className="col-md-12 footer-social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="" />
                </a>
              </div>
              <div className="col-md-12 footer-copyright">
                <p className="brand-text">© 2018 - ❤ Travel. As much as you can. As far as you can. As long as you can.</p>
                <p className="white-text">Italian Flavours is a trademark of Sardinia Flavour srl - P.IVA: 01091230951 – R.E.A: 129805</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
)

export default Footer
