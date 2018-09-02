import React from 'react'
import PropTypes from 'prop-types'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import Icon from 'material-icons-react'
import Like from '../img/like.svg'
import comment from '../img/comment.svg'
import map from '../img/Regions-new.svg'

class InstagramPhoto extends React.Component {
  state = {
    error: false,
  }

  render() {
    const { id } = this.props
    const { error } = this.state
    const img = error ? 'https://via.placeholder.com/600x600?text=Error%20fetching%20image' : `https://instagram.com/p/${id}/media/?size=l`
    return (
      <div className="col-md-3 col-6 instagram-wrapper">
        <div className="thumbnail instagram-img-container animated-background">
          <a href={`https://instagram.com/p/${id}`} target="blank" className="instagram-link">
            <img src={img} onError={() => this.setState({ error: true })} className="instagram-img" alt="Lights" />
            <div className="instagram-overlay">
              <span className="d-flex">
                <Icon icon="favorite" color="#fff" style={{ marginRight: 10 }} size={23} />
                78
              </span>
              <span className="d-flex">
                <Icon icon="mode_comment" color="#fff" style={{ marginRight: 10 }} size={23} />
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
