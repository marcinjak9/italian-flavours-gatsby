import React, { Component } from 'react'
import Link from 'gatsby-link'

import landscapeLogo from '../img/landscape@2x.png'
import logoWhite from '../img/logo-white.png'

class Navbar extends Component {
  state = {
    pinned: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const { pinned } = this.state
    if (window.scrollY > 250 && !pinned) {
      this.setState({ pinned: true })
    }
    if (window.scrollY <= 250 && pinned) {
      this.setState({ pinned: false })
    }
  }
  render() {
    const { pinned } = this.state
    return (
      <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top ${!pinned && "before-scroll"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={landscapeLogo} alt="" className="brand-logo" />
            <img src={logoWhite} alt="" className="white-logo" />
          </Link>
          <button className="navbar-custom-toggler" id="mobile-navigation-toggle" type="button">
            <i className="material-icons">menu</i>
          </button>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-flex">
              <li className="nav-item active">
                <Link className="nav-link" to="/tour">Tailored Tours
                <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/personalized-events">Personalised events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Experiences Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Contact Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/i-am-angelina">I am Angelina</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link btn btn-primary white-text" to="/">Contact me now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar
