import React, { Component } from 'react'
import Link from 'gatsby-link'
import Icon from 'material-icons-react'

import landscapeLogo from '../img/landscape@2x.png'
import logoWhite from '../img/logo-white.png'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  componentDidMount = () => {
    if (this.props.regionDropdown) {
      document.addEventListener('mousedown', this.handleClick, false)
    }
  }

  componentWillUnmount = () => {
    if (this.props.regionDropdown) {
      document.removeEventListener('mousedown', this.handleClick, false)
    }
  }

  handleClick = (e) => {
    if (this.dropdown && !this.dropdown.contains(e.target) && !this.button.contains(e.target)) {
      return this.setState({ open: false })
    }
  }

  render() {
    console.log(this.dropdown)
    const { text, path, active, regionDropdown, regions } = this.props
    if (regionDropdown) {
      return (
        <li className={`nav-item ${active && "active"}`}>
          <button className={`btn btn-link nav-link ${regionDropdown && "d-flex"}`} to={path} onClick={() => this.setState(prevState => ({ open: !prevState.open }))} ref={(node) => this.button = node}>
            {text}
            {regionDropdown && <Icon icon="expand_more" color="#00B2A7" size={30} />}
          </button>
          <div className={`dropdown-menu custom-dropdown ${this.state.open ? "show" : ''}`} ref={(node) => this.dropdown = node}>
            {regions.map(region => <Link key={region.id} to={region.slug} className="dropdown-item" onClick={() => this.setState({ open: false })}>{region.name}</Link>)}
          </div>
        </li>
      )
    }
    return (
      <li className={`nav-item ${active && "active"}`}>
        <Link className={`nav-link`} to={path}>
          {text}
        </Link>
      </li>
    )
  }
}

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
    const { menuItems, menuCta, pathname, regions } = this.props
    return (
      <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top ${!pinned && "before-scroll"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={landscapeLogo} alt="" className="brand-logo" />
            <img src={logoWhite} alt="" className="white-logo" />
          </Link>
          <button className="navbar-custom-toggler" id="mobile-navigation-toggle" type="button">
            <Icon icon="menu" />
          </button>

          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav navbar-flex">
              {menuItems.map(menuItem => <MenuItem key={menuItem.title} text={menuItem.title} path={menuItem.path} active={menuItem.path===pathname} regionDropdown={menuItem.regionDropdown} regions={regions} />)}
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


export default Navbar
