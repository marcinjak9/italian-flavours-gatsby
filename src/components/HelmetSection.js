import React from 'react'
import Helmet from 'react-helmet'

const HelmetSection = ({ seoSection }) => (
  <Helmet>
    {seoSection.seoTitle && <title>{seoSection.seoTitle}</title>}
    {seoSection.seoDescription && <meta name="description" content={seoSection.seoDescription} />}
    {seoSection.seoKeywords && <meta name="keywords" content={seoSection.seoKeywords} />}
    {seoSection.ogTitle && <meta name="og:title" content={seoSection.ogTitle} />}
    {seoSection.ogUrl && <meta name="og:url" content={seoSection.ogUrl} />}
    {seoSection.ogImage && <meta name="og:image" content={seoSection.ogImage} />}
    {seoSection.seoDescription && <meta name="og:description" content={seoSection.seoDescription} />}
  </Helmet>
)

export default HelmetSection
