import React from 'react'
import Icon from 'material-icons-react'
import PropTypes from 'prop-types'
import styles from '../layouts/styles/styles'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.name = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.message = React.createRef();
    this.state = {
      error: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
      success: false,
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    let allValid = true
    if (!this.name.current.value) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, name: 'You must insert your name!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, name: null } }))
    }
    if (!this.phone.current.value) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, phone: 'You must insert your phone!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, phone: null } }))
    }
    if (!this.message.current.value) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, message: 'You must write a message!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, message: null } }))
    }
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // eslint-disable-line
    if (!this.email.current.value || !regex.test(this.email.current.value)) {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, email: 'You must enter a valid email!' } }))
      allValid = false
    } else {
      this.setState(prevState => ({ ...prevState, error: { ...prevState.error, email: null } }))
    }

    if (allValid) {
      return this.submitForm({
        name: this.name.current.value, email: this.email.current.value, phone: this.phone.current.value, message: this.message.current.value,
      })
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
      body: this.encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    this.setState({ success: true })
    this.resetForm()
  }

  resetForm = () => {
    this.name.current.value = ''
    this.email.current.value = ''
    this.phone.current.value = ''
    this.message.current.value = ''
  }

  render() {
    const { title } = this.props
    const { error, success } = this.state
    return (
      <div className="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
        <div className="row">
          <div className="container">
            <form className="row contact-form d-flex flex-column" onSubmit={this.handleOnSubmit} name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
              <div className="col-md-12">
                <h2 className="text-center dk-brand-text">{title}</h2>
              </div>
              <div className="col-md-12 contact-form-wrapper">
                <div className="row">
                  <div className="col-md-6 offset-md-1">
                    <div className="form-group">
                      <input type="text" className="form-control" id="nome" placeholder="Name" ref={this.name} name="name" />
                      {error.name && <p className="error-message">{error.name}</p>}
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" id="email" placeholder="Email" ref={this.email} name="email" />
                      {error.email && <p className="error-message">{error.email}</p>}
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="phone" placeholder="Phone" ref={this.phone} name="phone" />
                      {error.phone && <p className="error-message">{error.phone}</p>}
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message" ref={this.message} name="message" />
                      {error.message && <p className="error-message">{error.message}</p>}
                    </div>
                  </div>
                  <div className="col-md-5 d-flex justify-content-center align-items-start">
                    <div className="dashed-container flex-column">
                      <p className="title">HEADQUARTER</p>
                      <div className="d-flex flex-row">
                        <Icon icon="location_on" color={styles.primary} />
                        <p>
                          Piazza Roma 46
                          <br />
                          09170 - Oristano
                          <br />
                          Sardinia - Italy
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <Icon icon="phone" color={styles.primary} />
                        <p>
                          +39 123 456 7890
                        </p>
                      </div>
                      <div className="d-flex flex-row">
                        <Icon icon="email" color={styles.primary} />
                        <p>
                          angelafadda@italianflavours.it
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
                {success && (
                  <p className="success-message">
                    Thank you for the message, I
                    {"'"}
                    ll let you know!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
