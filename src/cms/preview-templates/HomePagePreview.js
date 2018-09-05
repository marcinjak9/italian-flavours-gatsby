import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({
  entry, getAsset, widgetFor, widgetsFor,
}) => {
  const posts = []
  widgetsFor('blogPosts').map((item) => {
    if (item) {
      posts.push(item.getIn(['data', 'slug']))
    }
  })

  return (
    <HomePageTemplate
      hero={{
        bgImage: getAsset(entry.getIn(['data', 'hero', 'image'])),
        bgOverlay: entry.getIn(['data', 'hero', 'heroBgOverlay']),
        title: entry.getIn(['data', 'hero', 'title']),
        payoff: entry.getIn(['data', 'hero', 'payoff']),
        buttonText: entry.getIn(['data', 'hero', 'ctaText']),
        buttonLink: entry.getIn(['data', 'hero', 'ctaUrl']),
      }}
      tourTitle={entry.getIn(['data', 'tourSectionTitle'])}
      blogTitle={entry.getIn(['data', 'blogNewsTitle'])}
      infoSection={{
        title: entry.getIn(['data', 'infoSection', 'title']),
        buttonUrl: entry.getIn(['data', 'infoSection', 'ctaUrl']),
        buttonText: entry.getIn(['data', 'infoSection', 'ctaText']),
      }}
      blogPosts={posts}
      content={widgetFor('body')}
      contactSection={{
        title: entry.getIn(['data', 'contactSectionTitle']),
      }}
    />
  )
}
HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,

}

export default HomePagePreview
