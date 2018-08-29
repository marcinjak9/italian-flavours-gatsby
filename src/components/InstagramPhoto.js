import React from 'react'
import PropTypes from 'prop-types'
import like from '../img/like.svg'
import comment from '../img/comment.svg'

const InstagramPhoto = ({ id }) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail instagram-img-container">
        <a href={`https://instagram.com/p/${id}`} target="blank" className="instagram-link">
          <img src={`https://instagram.com/p/${id}/media/?size=l`} className="instagram-img" alt="Lights" />
          <div className="instagram-overlay">
            <span>
              <img src={like} className="svg like" alt="" />
              78
            </span>
            <span>
              <img src={comment} className="svg comment" alt="" />
              12
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

InstagramPhoto.propTypes = {
  id: PropTypes.string,
}

export default InstagramPhoto
