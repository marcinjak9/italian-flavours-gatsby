import React from 'react'
import like from '../img/like.svg'
import comment from '../img/comment.svg'

const InstagramPhoto = ({ id }) => {
  return (
    <div className="col-md-3">
      <div className="thumbnail instagram-img-container">
        <a href="https://placehold.it/235x235" className="instagram-link">
          <img src="https://placehold.it/235x235" className="instagram-img" alt="Lights" />
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

export default InstagramPhoto
