import React, { Component } from 'react'


class ProgressiveImage extends Component {
  state = {
    currentImage: this.props.preview,
    loading: true,
  }

  componentDidMount = () => {
    this.fetchImage(this.props.src)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.src !== this.props.src) {
      this.setState({ currentImage: nextProps.preview, loading: true }, () => {
        this.fetchImage(nextProps.image)
      })
    }
  }

  componentWillUnmount = () => {
    if (this.loadingImage) {
      this.loadingImage.onload = null
    }
  }

  fetchImage = src => {
    const image = new Image()
    image.onload = () => this.setState({ currentImage: this.loadingImage.src, loading: false })
    image.src = src
    this.loadingImage = image
  }

  style = loading => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
    }
  }

  render() {
    const { className, style, src, alt } = this.props
    const { loading, currentImage } = this.state
    const imgStyle = this.style(loading)
    return (
      <img className={className} style={{ ...imgStyle, ...style }} src={currentImage} alt={alt} />
    )
  }
}

export default ProgressiveImage
