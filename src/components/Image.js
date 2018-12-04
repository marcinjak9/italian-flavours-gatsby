import React from 'react'
import Img from 'gatsby-image'

const Image = ({
  image, className, style, alt = '',
}) => {
  if (!image) {
    return null
  }
  if (image.childImageSharp) {
    const { childImageSharp } = image
    if (childImageSharp.fluid) {
      return (
        <Img
          fluid={childImageSharp.fluid}
          alt={alt}
          className={className}
          style={style}
        />
      )
    }
    if (childImageSharp.fixed) {
      return (
        <Img
          fixed={childImageSharp.fixed}
          alt={alt}
          className={className}
          style={style}
        />
      )
    }
    return null
  }
  if (typeof image === 'string') {
    return (
      <img
        src={image}
        className={className}
        style={style}
        alt={alt}
      />
    )
  }
  return null
}

export const getImageLink = (image) => {
  if (!image) {
    return null
  }
  if (image.childImageSharp) {
    const { childImageSharp } = image
    if (childImageSharp.fluid) {
      return childImageSharp.fluid.src
    }
    if (childImageSharp.fixed) {
      return childImageSharp.fixed.src
    }
  }
  return ''
}

export default Image
