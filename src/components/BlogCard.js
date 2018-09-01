

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Icon from 'material-icons-react'

const BlogCard = ({ title, image, description }) => (
  <div className="col-md-6">
    <div className="card home-card">
      <img src="https://placehold.it/800x400" style={{ height: 250 }} alt="" />
      <div className="card-body">
        <Link to="/" className="plus-button-card">
          <Icon icon="nature_people" color="white" />
        </Link>
        <h5 className="card-title font-italic">John and Katina - Brisbane (Australia)</h5>
        <p className="card-text">
          Angelina was wonderful and did a terrific job. We both thoroughly enjoyed the trip as did Janet and Adrian -
          mostly due to Angelina. She was a delight. I can’t tell you how excited we are to be coming back to Italy and
          to be seeing you again. It was always our dream that we would come back one day and have you share your beautiful
          country with us.
        </p>
        <div className="card-date text-center">
          June 2018
        </div>
      </div>
      <div className="card-action text-center">
        <Link to="/" className="btn btn-link">Discover more</Link>
      </div>
    </div>
  </div>
)

BlogCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default BlogCard
