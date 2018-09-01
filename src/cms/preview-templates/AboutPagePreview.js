import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/i-am-angelina-page'

const AboutPagePreview = ({
  entry, getAsset, widgetFor, widgetsFor,
}) => {
  const instagramPhotos = []
  widgetsFor('instagramPhotos').map(item => instagramPhotos.push({ id: item.getIn(['data', 'id']) }))

  return (
    <AboutPageTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        subtitle: entry.getIn(['data', 'hero', 'subtitle']),
        image: getAsset(entry.getIn(['data', 'hero', 'bgImage'])),
        ctaText: entry.getIn(['data', 'hero', 'ctaText']),
        ctaLink: entry.getIn(['data', 'hero', 'ctaLink']),
      }}
      descriptionTitle={entry.getIn(['data', 'descriptionTitle'])}
      contactSectionTitle={entry.getIn(['data', 'contactSectionTitle'])}
      content={widgetFor('body')}
      instagramPhotos={instagramPhotos}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default AboutPagePreview
