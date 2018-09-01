import React from 'react'
import Icon from 'material-icons-react'
import styles from '../layouts/styles/styles'

const ContactForm = ({ title }) => (
  <div className="container-fluid cari-amici-section grey-bg d-flex justify-content-center flex-column">
    <div className="row">
      <div className="container">
        <form className="row contact-form d-flex flex-column">
          <div className="col-md-12">
            <h2 className="text-center dk-brand-text">{title}</h2>
          </div>
          <div className="col-md-12 contact-form-wrapper">
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <input type="text" className="form-control" id="nome" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Message" />
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
        </form>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  </div>
)

export default ContactForm
