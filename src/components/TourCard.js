import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Icon from 'material-icons-react'

const TourCard = ({
  title, image, description, url, highlights,
}) => (
  <div className="col-md-4 d-flex">
    <div className="card home-card">
      <img src={image} className="hero-bg-img" style={{ height: 250 }} alt="" />
      <div className="card-body d-flex flex-column justify-content-between">
        <Link to={url} className="plus-button-card">
          <Icon icon="add" color="white" />
        </Link>
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
        <div>
          <h6 className="card-subtitle">Highlights</h6>
          <p className="card-text no-margin">
            {highlights}
          </p>
        </div>
      </div>
      <div className="card-action text-center">
        <Link to={url} className="btn btn-link">Discover more</Link>
      </div>
    </div>
  </div>
)

TourCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  highlights: PropTypes.string,
}

export default TourCard
