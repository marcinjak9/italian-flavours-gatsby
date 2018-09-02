import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Icon from 'material-icons-react'

import landscapeLogo from '../img/landscape@2x.png'
import logoWhite from '../img/logo-white.png'
import logoMobile from '../img/portrait@2x.png'
import MenuItem from './MenuItem'

class Navbar extends Component {
  state = {
    pinned: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { pinned } = this.state
    if (window.scrollY > 150 && !pinned) {
      this.setState({ pinned: true })
    }
    if (window.scrollY <= 150 && pinned) {
      this.setState({ pinned: false })
    }
  }

  render() {
    const { pinned } = this.state
    const {
      menuItems, menuCta, pathname, regions, openMobileMenu,
    } = this.props
    return (
      <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top ${!pinned && 'before-scroll'}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={landscapeLogo} alt="" className="brand-logo" />
            <img src={logoWhite} alt="" className="white-logo" />
            <img src={logoMobile} alt="" className="mobile-logo" />
          </Link>
          <button className="navbar-custom-toggler" id="mobile-navigation-toggle" type="button" onClick={openMobileMenu}>
            <Icon icon="menu" />
          </button>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-flex">
              {menuItems.map(menuItem => <MenuItem key={menuItem.title} text={menuItem.title} path={menuItem.path} active={menuItem.path === pathname} regionDropdown={menuItem.regionDropdown} regions={regions} />)}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link btn btn-primary white-text" to={menuCta.link}>{menuCta.text}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    regionDropdown: PropTypes.bool,
    regions: PropTypes.arrayOf({
      title: PropTypes.string,
    }),
  })),
  menuCta: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string,
  }),
  pathname: PropTypes.string,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
  })),
  openMobileMenu: PropTypes.func,
}


export default Navbar
