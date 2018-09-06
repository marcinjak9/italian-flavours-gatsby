import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Icon from 'material-icons-react'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentDidMount = () => {
    const { regionDropdown } = this.props
    if (regionDropdown) {
      document.addEventListener('mousedown', this.handleClick, false)
    }
  }

  componentWillUnmount = () => {
    const { regionDropdown } = this.props
    if (regionDropdown) {
      document.removeEventListener('mousedown', this.handleClick, false)
    }
  }

  handleClick = (e) => {
    if (this.dropdown && !this.dropdown.contains(e.target) && !this.button.contains(e.target)) {
      return this.setState({ open: false })
    }
    return null
  }

  handleClose = () => {
    const { onClick } = this.props
    if (onClick) {
      return onClick()
    }
    return this.setState({ open: false })
  }

  renderLink = () => {
    const {
      text, path, active, regionDropdown, regions, mobile, onClick,
    } = this.props
    if (path.indexOf('http') >= 0) {
      return (
        <a href={path} className="nav-link" target="_blank" rel="noopener noreferrer" onClick={onClick ? () => onClick() : () => null}>
          {text}
        </a>
      )
    }
    if (path.indexOf('#') === 0) {
      return <a href={!mobile ? path : `${path}-mobile`} className="nav-link" onClick={onClick ? () => onClick() : () => null}>{text}</a>
    }
    return (
      <Link className="nav-link" to={path} onClick={onClick ? () => onClick() : () => null}>
        {text}
      </Link>
    )
  }

  render() {
    const {
      text, path, active, regionDropdown, regions, mobile, onClick,
    } = this.props
    const { open } = this.state
    if (regionDropdown) {
      return (
        <li className={`nav-item ${active && 'active'} ${mobile && 'mobile'}`}>
          <button type="button" className={`btn btn-link nav-link ${regionDropdown && 'd-flex'}`} to={path} onClick={() => this.setState(prevState => ({ open: !prevState.open }))} ref={node => this.button = node}>
            {text}
            {regionDropdown && <Icon icon="expand_more" color="#00B2A7" style={{ paddingTop: mobile ? 10 : 0 }} />}
          </button>
          <div className={`dropdown-menu custom-dropdown ${open ? 'show' : ''}`} ref={node => this.dropdown = node}>
            {regions.map(region => <Link key={region.id} to={region.slug} className="dropdown-item" onClick={this.handleClose}>{region.name}</Link>)}
          </div>
        </li>
      )
    }
    return (
      <li className={`nav-item ${active && 'active'} ${mobile && 'mobile'}`}>
        {this.renderLink()}
      </li>
    )
  }
}

MenuItem.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  active: PropTypes.bool,
  regionDropdown: PropTypes.bool,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    name: PropTypes.string,
  })),
  mobile: PropTypes.bool,
}

export default MenuItem
