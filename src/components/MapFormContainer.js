import React, { Component } from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import PropTypes from 'prop-types'
import map from '../img/Regions-new.svg'

class MapFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRegion: '',
      selectedActivity: '',
      onClient: false,
      error: {
        region: null,
        activity: null,
        email: null,
      },
      success: false,
    }
    // this.activitySelect = React.createRef();
    this.emailForm = React.createRef();
  }

  componentDidMount() {
    this.setState({ onClient: true }) // eslint-disable-line
  }

  selectRegionHandler = (region) => {
    this.setState({ selectedRegion: region })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedRegion, selectedActivity } = this.state
    let allValid = true
    if (!selectedRegion) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, region: 'You must select a region!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, region: null } }))
    }
    if (!selectedActivity) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, activity: 'You must select an activity!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, activity: null } }))
    }
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // eslint-disable-line
    if (!this.emailForm.current.value || !regex.test(this.emailForm.current.value)) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, email: 'You must enter a valid email!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, email: null } }))
    }

    if (allValid) {
      return this.submitForm({ email: this.emailForm.current.value, region: selectedRegion, activity: selectedActivity })
    }
    return null
  }

  encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  submitForm = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contact-home', ...data }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    this.setState({ success: true })
    this.resetForm()
  }

  resetForm = () => {
    this.setState({ selectedRegion: '', selectedActivity: '' });
    this.emailForm.current.value = ''
    // this.activitySelect.current.value = ''
  }

  render() {
    const {
      selectedRegion, onClient, error, success, selectedActivity,
    } = this.state
    const {
      regions, title, options, subregion,
    } = this.props
    return (
      <div id="contact" className="container-fluid cari-amici-section home-contact-section">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title-wrapper">
                  <h2 className="text-center dk-brand-text">
                    {title}
                  </h2>
                </div>
                <form className="col-md-6 d-flex flex-column home-form" onSubmit={this.handleSubmit} name="contact-home" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="form-group select-form">
                    <select
                      name="region"
                      className="form-control"
                      id="region-select"
                      value={selectedRegion}
                      style={{ color: selectedRegion ? '#333' : '#777' }}
                      onChange={e => this.selectRegionHandler(e.target.value)}
                    >
                      <option value="" disabled>Select the region you don’t want missy</option>
                      {regions.map(region => <option key={region}>{region}</option>)}
                    </select>
                    {error.region && <p className="error-message">{error.region}</p>}

                  </div>
                  <div className="form-group select-form">
                    <select
                      name="activity"
                      className="form-control"
                      value={selectedActivity}
                      id="activity-select"
                      // ref={this.activitySelect}
                      style={{ color: selectedActivity ? '#333' : '#777' }}
                      onChange={e => this.setState({ selectedActivity: e.target.value })}
                    >
                      <option value="" disabled>Select one “must to do” holiday’s activity</option>
                      {options.map(option => <option key={option.title}>{option.title}</option>)}
                    </select>
                    {error.activity && <p className="error-message">{error.activity}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your email address"
                      ref={this.emailForm}
                      onFocus={e => e.target.placeholder = ''}
                      onBlur={e => e.target.placeholder = 'Your email address'}
                    />
                    {error.email && <p className="error-message">{error.email}</p>}
                    <strong className="brand-text">I will reply within 24-hrs</strong>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Let Me know</button>
                      {success && (
                        <p className="success-message">
                          Thank you for the message, I
                          {"'"}
                          ll let you know!
                        </p>
                      )}
                    </div>
                  </div>
                </form>
                <div className="col-md-6 map-container">
                  <SvgLoader path={map}>
                    {regions.map((region, i) => (
                      <span key={region}>
                        <SvgProxy selector={`g#${region}`} onElementSelected={element => element.addEventListener('click', () => this.selectRegionHandler(region))} />
                        {onClient && document.querySelector(`g#${region} path[data-name="bg"]`)
                          ? (
                            <span>
                              <SvgProxy selector={`g#${region} path[data-name="bg"]`} style={`${selectedRegion === region && 'fill: #00B2A7;'}`} />
                              <SvgProxy selector={`g#${region} g[data-name="text"] path`} style={`${selectedRegion === region && 'fill: #fff;'}`} />
                              {subregion && <SvgProxy selector={`g#${subregion[i]} path[data-name="bg"]`} style={`${selectedRegion === region && 'fill: #00B2A7;'}`} />}
                              {subregion && <SvgProxy selector={`g#${subregion[i]} g[data-name="text"] path`} style={`${selectedRegion === region && 'fill: #fff;'}`} />}
                            </span>
                          )
                          : (
                            <span>
                              <SvgProxy selector={`g#${region} #bg path`} style={`${selectedRegion === region && 'fill: #00B2A7;'}`} />
                              <SvgProxy selector={`g#${region} #text path`} style={`${selectedRegion === region && 'fill: #fff;'}`} />
                              {subregion && <SvgProxy selector={`g#${subregion[i]} #bg path`} style={`${selectedRegion === region && 'fill: #00B2A7;'}`} />}
                              {subregion && <SvgProxy selector={`g#${subregion[i]} #text path`} style={`${selectedRegion === region && 'fill: #fff;'}`} />}
                            </span>
                          )
                        }
                      </span>
                    ))}
                  </SvgLoader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MapFormContainer.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
}

export default MapFormContainer
