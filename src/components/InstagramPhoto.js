import React from 'react'
import PropTypes from 'prop-types'
import like from '../img/like.svg'
import comment from '../img/comment.svg'

class InstagramPhoto extends React.Component {
  state = {
    error: false,
  }

  render() {
    const { id } = this.props
    const { error } = this.state
    const img = error ? 'https://via.placeholder.com/600x600?text=Error%20fetching%20image' : `https://instagram.com/p/${id}/media/?size=l`
    return (
      <div className="col-md-3">
        <div className="thumbnail instagram-img-container">
          <a href={`https://instagram.com/p/${id}`} target="blank" className="instagram-link">
            <img src={img} onError={() => this.setState({ error: true })} className="instagram-img" alt="Lights" />
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
}

InstagramPhoto.propTypes = {
  id: PropTypes.string,
}

export default InstagramPhoto
