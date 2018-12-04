import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import logoWhite from '../img/logo-white.png'
import instagramLogo from '../img/Instagram@2x.png'
import facebookLogo from '../img/Facebook@2x.png'

const Footer = ({
  copyrightText, creditsText,
  footerContacts: { emailAddress, phoneNumber },
  footerMenuItems, socialInfo: { facebookUrl, instagramUsername },
}) => (
  <footer className="container-fluid no-top-padding">
    <div className="row">
      <div className="col-md-12 text-center">
        <img src={logoWhite} alt="" className="footer-logo" />
      </div>
      <div className="container">
        <div className="row desktop-footer">
          {footerMenuItems.map((item, i) => {
            if (i === footerMenuItems.length - 1) {
              return (
                <div key={shortid.generate()} className="col footer-item">
                  <Link to={item.url}>{item.title}</Link>
                  <p className="footer-contacts">
                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                  </p>
                </div>
              )
            }
            if (item.url.indexOf('http') >= 0) {
              return (
                <div key={shortid.generate()} className="col footer-item">
                  <a href={item.url}>{item.title}</a>
                </div>
              )
            }
            return (
              <div key={shortid.generate()} className="col footer-item">
                <Link to={item.url}>{item.title}</Link>
              </div>
            )
          })}
        </div>

        <div className="row mobile-footer">
          <div className="col footer-item">
            <h3 className="brand-text">I listen to your dreams and make them true</h3>
          </div>
          <div className="col footer-item contact-item">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
          <div className="col footer-item contact-item">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <div className="row">
              <div className="col-md-12 footer-social-icons">
                <a href={`https://instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="" />
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="" />
                </a>
              </div>
              <div className="col-md-12 footer-copyright">
                <p className="brand-text">{creditsText}</p>
                <p className="legal">{copyrightText}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  copyrightText: PropTypes.string,
  creditsText: PropTypes.string,
  footerContacts: PropTypes.shape({
    emailAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  footerMenuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })),
  socialInfo: PropTypes.shape({
    facebookUrl: PropTypes.string,
    instagramUsername: PropTypes.string,
  }),
}

export default Footer
