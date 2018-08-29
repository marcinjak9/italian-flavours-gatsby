import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import TourPagePreview from './preview-templates/TourPagePreview'
import PersonalizedEventsPreview from './preview-templates/PersonalizedEventsPreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('tour', TourPagePreview)
CMS.registerPreviewTemplate('personalized-events', PersonalizedEventsPreview)
CMS.registerPreviewTemplate('i-am-angelina', AboutPagePreview)
