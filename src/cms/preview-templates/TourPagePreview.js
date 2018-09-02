import React from 'react'
import PropTypes from 'prop-types'
import { TourPageTemplate } from '../../templates/tour-page'

const TourPagePreview = ({
  entry, getAsset, widgetsFor,
}) => {
  const imagesUpper = []
  widgetsFor('galleryUpper').map((item) => {
    if (item) {
      imagesUpper.push({ image: getAsset(item.getIn(['data', 'image'])) })
    }
  })
  const imagesBottom = []
  widgetsFor('galleryBottom').map((item) => {
    if (item) {
      imagesBottom.push({ image: getAsset(item.getIn(['data', 'image'])) })
    }
  })
  const instagramPhotos = []
  widgetsFor('instagramPhotos').map((item) => {
    if (item) {
      instagramPhotos.push({ image: getAsset(item.getIn(['data', 'image'])) })
    }
  })

  const dates = []
  widgetsFor('aviabilityDates').map((item) => {
    if (item) {
      dates.push({
        startDate: item.getIn(['data', 'startDate']),
        endDate: item.getIn(['data', 'endDate']),
      })
    }
  })


  return (
    <TourPageTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        subtitle: entry.getIn(['data', 'hero', 'subtitle']),
        image: getAsset(entry.getIn(['data', 'hero', 'image'])),
        ctaText: entry.getIn(['data', 'hero', 'ctaText']),
        ctaLink: entry.getIn(['data', 'hero', 'ctaLink']),
        bgOverlay: entry.getIn(['data', 'hero', 'heroBgOverlay']),
      }}
      tourTitle={entry.getIn(['data', 'tourSectionTitle'])}
      descriptionSection={{
        title: entry.getIn(['data', 'tourDescription', 'title']),
        body: entry.getIn(['data', 'tourDescription', 'body']),
        image: getAsset(entry.getIn(['data', 'tourDescription', 'image'])),
      }}
      gallery={{
        galleryUpper: imagesUpper,
        galleryTitle: entry.getIn(['data', 'gallery', 'textTitle']),
        galleryDescription: entry.getIn(['data', 'gallery', 'textBody']),
        galleryBottom: imagesBottom,
      }}
      calendar={{
        body: entry.getIn(['data', 'calendarBody']),
        title: entry.getIn(['data', 'calendarTitle']),
        notes: entry.getIn(['data', 'calendarNotes']),
        dates,
      }}

      instagram={{
        images: instagramPhotos,
        username: entry.getIn(['data', 'instagramUsername']),
      }}
    />
  )
}

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default TourPagePreview
