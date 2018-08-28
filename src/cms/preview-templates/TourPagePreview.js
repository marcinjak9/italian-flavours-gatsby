import React from 'react'
import PropTypes from 'prop-types'
import { TourPageTemplate } from '../../templates/tour-page'

const TourPagePreview = ({ entry, getAsset, widgetFor }) => (
  <TourPageTemplate
    hero={{
      title: entry.getIn(['data', 'title']),
      subtitle: entry.getIn(['data', 'hero', 'subtitle']),
      image: getAsset(entry.getIn(['data', 'hero', 'image'])),
      ctaText: entry.getIn(['data', 'hero', 'ctaText']),
      ctaLink: entry.getIn(['data', 'hero', 'ctaLink']),
    }}
    tourTitle={entry.getIn(['data', 'tourSectionTitle'])}
    descriptionSection={{
      title: entry.getIn(['data', 'tourDescription', 'title']),
      body: entry.getIn(['data', 'tourDescription', 'body']),
      image: getAsset(entry.getIn(['data', 'tourDescription', 'image'])),
    }}
    gallery={{
      galleryUpper: [],
      galleryTitle: entry.getIn(['data', 'gallery', 'textTitle']),
      galleryDescription: entry.getIn(['data', 'gallery', 'textBody']),
      galleryBottom: [],
    }}
    calendar={{
      body: entry.getIn(['data', 'calendar', 'body']),
      title: entry.getIn(['data', 'calendar', 'title']),
      notes: entry.getIn(['data', 'calendar', 'notes']),
      dates: [],
    }}

    instagram={{
      images: [],
      username: entry.getIn(['data', 'instagramUsername']),
    }}


    // hero={{
    //   title,
    //   subtitle: hero.subtitle,
    //   image: hero.image,
    //   ctaText: hero.ctaText,
    //   ctaLink: hero.ctaLink,
    // }}
    // descriptionSection={{
    //   title: tourDescription.title,
    //   body: tourDescription.body,
    //   image: tourDescription.image,
    // }}
    // gallery={{
    //   galleryUpper: gallery.galleryUpper,
    //   galleryTitle: gallery.textTitle,
    //   galleryDescription: gallery.textBody,
    //   galleryBottom: gallery.galleryBottom,
    // }}
    // blogSectionTitle={blogSectionTitle}
    // calendar={{
    //   body: calendar.body,
    //   title: calendar.title,
    //   notes: calendar.notes,
    //   dates: calendar.dates,
    // }}
    // instagram={{
    //   images: instagramPhotos,
    //   username: instagramUsername,
    // }}
  />
)

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,

}

export default TourPagePreview
