const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


router.use('/', require('./routes/v1-migration-routes.js'))

