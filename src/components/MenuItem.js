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

  render() {
    const {
      text, path, active, regionDropdown, regions, mobile, onClick,
    } = this.props
    const { open } = this.state
    if (regionDropdown) {
      return (
        <li className={`nav-item ${active && 'active'} ${mobile && 'mobile'}`}>
          <button type="button" className={`btn btn-link nav-link ${regionDropdown && 'd-flex'} ${open && 'text-white'}`} to={path} onClick={() => this.setState(prevState => ({ open: !prevState.open }))} ref={node => this.button = node}>
            {text}
            {regionDropdown && <Icon icon="expand_more" color="#00B2A7" style={{ paddingTop: mobile ? 10 : 0 }} />}
          </button>
          <div className={`dropdown-menu custom-dropdown ${open ? 'show' : ''}`} ref={node => this.dropdown = node}>
            {regions.map(region => <Link key={region.id} to={region.slug} className="dropdown-item" onClick={() => { onClick(); this.setState({ open: false }) }}>{region.name}</Link>)}
          </div>
        </li>
      )
    }
    return (
      <li className={`nav-item ${active && 'active'} ${mobile && 'mobile'}`}>
        <Link className="nav-link" to={path} onClick={onClick ? () => onClick() : () => null}>
          {text}
        </Link>
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
}

export default MenuItem
