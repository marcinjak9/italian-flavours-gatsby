import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import TourPagePreview from './preview-templates/TourPagePreview'
import PersonalizedEventsPreview from './preview-templates/PersonalizedEventsPreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

import '../layouts/all.sass'
// CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('tour', TourPagePreview)
CMS.registerPreviewTemplate('personalized-events', PersonalizedEventsPreview)
CMS.registerPreviewTemplate('i-am-angelina', AboutPagePreview)
