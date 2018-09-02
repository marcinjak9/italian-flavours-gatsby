import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Icon from 'material-icons-react'

import logoWhite from '../img/logo-white.png'
import MenuItem from './MenuItem'
import styles from '../layouts/styles/styles'

class MobileNavbar extends Component {
  render() {
    const {
      menuItems, pathname, regions, close,
    } = this.props
    return (
      <div className="mobile-menu-wrapper">
        <Link to="/" onClick={close}>
          <img src={logoWhite} alt="" className="overlay-logo" />
        </Link>
        <button type="button" onClick={close}>
          <Icon icon="close" color="#fff" style={{ position: 'absolute', top: 20, right: 20 }} size={40} />
        </button>
        <div className="mobile-menu-nav">
          <ul className="navbar-nav">
            {menuItems.map(menuItem => (
              <MenuItem
                mobile
                key={menuItem.title}
                text={menuItem.title}
                path={menuItem.path}
                active={menuItem.path === pathname}
                regionDropdown={menuItem.regionDropdown}
                regions={regions}
                onClick={() => close()}
              />
            ))}
          </ul>
          <div className="menu-footer">
            <Icon icon="favorite" color={styles.primary} className="close-mobile-menu" />
            <p className="brand-text text-center">
              © 2018 - ❤ Travel. As much as you can. As far as you can. As long as you can.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

MobileNavbar.propTypes = {
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
  close: PropTypes.func,
}


export default MobileNavbar
