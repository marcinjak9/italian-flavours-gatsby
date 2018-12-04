import React from 'react'
import PropTypes from 'prop-types'
import PersonalizedEventsTemplate from '../../templates/Wrappers/PersonalizedEventsTemplate'

const PersonalizedEventsPreview = ({
  entry, getAsset, widgetFor, widgetsFor,
}) => {
  const images = []
  widgetsFor('personalizedEventsGallery').map(item => images.push({ image: getAsset(item.getIn(['data', 'image'])) }))

  const cards = []
  widgetsFor('descriptionCards').map(item => cards.push({ title: item.getIn(['data', 'title']), body: item.getIn(['data', 'body']), icon: getAsset(item.getIn(['data', 'icon'])) }))

  const instagramPhotos = []
  widgetsFor('instagramPhotos').map(item => instagramPhotos.push({ id: item.getIn(['data', 'id']) }))

  return (
    <PersonalizedEventsTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        subtitle: entry.getIn(['data', 'hero', 'subtitle']),
        image: getAsset(entry.getIn(['data', 'hero', 'bgImage'])),
        ctaText: entry.getIn(['data', 'hero', 'ctaText']),
        ctaLink: entry.getIn(['data', 'hero', 'ctaLink']),
      }}
      descriptionSection={{
        title: entry.getIn(['data', 'descriptionTitle']),
      }}
      gallerySection={{
        images,
        title: entry.getIn(['data', 'midDescriptionTitle']),
        body: entry.getIn(['data', 'midDescriptionBody']),
        cards,
      }}
      blogSectionTitle={entry.getIn(['data', 'blogSectionTitle'])}
      contactSectionTitle={entry.getIn(['data', 'contactSectionTitle'])}
      notes={entry.getIn(['data', 'calendarNotes'])}
      content={widgetFor('body')}
      instagramPhotos={instagramPhotos}
    />
  )
}

PersonalizedEventsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default PersonalizedEventsPreview
