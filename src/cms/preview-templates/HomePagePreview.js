import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset, widgetFor, widgetsFor }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []
  return (
    <HomePageTemplate
      hero={{
        bgImage: getAsset(entry.getIn(['data', 'hero', 'image'])),
        title: entry.getIn(['data', 'hero', 'title']),
        payoff: entry.getIn(['data', 'hero', 'payoff']),
        buttonText: entry.getIn(['data', 'hero', 'ctaText']),
        buttonLink: entry.getIn(['data', 'hero', 'ctaUrl']),
      }}
      tourTitle={entry.getIn(['data', 'tourSectionTitle'])}
      infoSection={{
        title: entry.getIn(['data', 'infoSection', 'title']),
        buttonUrl: entry.getIn(['data', 'infoSection', 'ctaUrl']),
        buttonText: entry.getIn(['data', 'infoSection', 'ctaText']),
      }}
      content={widgetFor('body')}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
