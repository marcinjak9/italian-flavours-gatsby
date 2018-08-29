import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const TourCard = ({ title, image, description, url }) => (
  <div className="col-md-4">
    <div className="card home-card">
      <img src={image} className="hero-bg-img" style={{ height: 250 }} alt="" />
      <div className="card-body">
        <Link to={url} className="plus-button-card">
          <i className="material-icons">add</i>
        </Link>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <h6 className="card-subtitle">Highlights</h6>
        <p className="card-text no-margin">
            Highlights wine tastings - relaxing environment - horse riding - private chaffeur - boutique hotels and high-level
            agriturismi
        </p>
      </div>
      <div className="card-action text-center">
        <Link to="/tour" className="btn btn-link">Discover more</Link>
      </div>
    </div>
  </div>
)

TourCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default TourCard
