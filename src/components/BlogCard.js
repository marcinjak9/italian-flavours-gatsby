

import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'material-icons-react'
import moment from 'moment'

class BlogCard extends React.Component {
  state = {
    title: '',
    body: '',
    image: '',
    url: '',
    date: '',
    error: false,
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.scriptLoad && !nextState.error && !nextState.title) {
      this.fetchPosts()
    }
  }


  fetchPosts = () => {
    const { slug } = this.props
    window.ghost.init({
      clientId: 'ghost-frontend',
      clientSecret: 'ab4dac795465',
    })
    fetch(window.ghost.url.api(`posts/slug/${slug}`, { limit: 1 }))
      .then((response) => {
        if (response.status !== 200) {
          console.log(`Looks like there was a problem. Status Code: ${response.status}`);
          this.setState({ error: true })
          return;
        }

        // Examine the text in the response
        response.json().then((data) => {
          const post = data.posts[0]
          const {
            title, custom_excerpt, published_at, feature_image, slug,
          } = post
          this.setState({
            title,
            body: custom_excerpt,
            image: feature_image,
            url: `https://blog.it.marcinjakubik.io/${slug}`,
            date: moment(published_at).format('MMMM YYYY'),
          })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    const {
      title, body, image, url, date,
    } = this.state
    if (!title && !url) {
      return null
    }
    return (
      <div className="col-md-6">
        <div className="card home-card">
          <img src={image} style={{ height: 250, objectFit: 'cover' }} alt="" />
          <div className="card-body">
            <a href={url} target="_blank" rel="noopener noreferrer" className="plus-button-card">
              <Icon icon="nature_people" color="white" />
            </a>
            <h5 className="card-title font-italic">{title}</h5>
            <p className="card-text">
              {body}
            </p>
            <div className="card-date text-center">
              {date}
            </div>
          </div>
          <div className="card-action text-center">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-link">Discover more</a>
          </div>
        </div>
      </div>
    )
  }
}

BlogCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default BlogCard
