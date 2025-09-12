//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


module.exports = router


router.use('/', require('./routes/v1-migration-routes.js'))

router.use('/', require('./routes/v2-migration-routes.js'))

router.use('/', require('./routes/v2a-migration-routes.js'))

router.use('/', require('./routes/v3-migration-routes.js'))

router.use('/', require('./routes/v4-migration-routes.js'))

router.use('/', require('./routes/v5-migration-routes.js'))

router.use('/', require('./routes/v6-migration-routes.js'))

router.use('/', require('./routes/v7-migration-routes.js'))

router.use('/', require('./routes/v8-migration-routes.js'))

router.use('/', require('./routes/v9-migration-routes.js'))