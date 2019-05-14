const express = require('express')
const router = express.Router()

// Sign In
router.post('/sign-in', function (req, res) {
  var returnURL = ''
  var accountEmail = ''

  if (req.body.continueURL) {
    req.session.continueURL = req.body.continueURL
    req.session.backURL = req.body.backURL
    req.session.serviceURL = req.body.serviceURL
    req.session.serviceName = req.body.serviceName

    res.render('sign-in', {
      backLink: req.session.backURL,
      serviceName: req.session.serviceName,
      serviceURL: req.session.serviceURL
    })
  } else {
    console.log(req.session.continueURL)
    accountEmail = req.body.emailAddress

    returnURL = req.session.continueURL + '?accountEmail=' + accountEmail
    console.log(returnURL)
    res.redirect(returnURL)
  }
})

// Register
router.get('/register', function (req, res) {
  res.render('register', {
    backLink: '/sign-in',
    serviceName: req.session.serviceName,
    serviceURL: req.session.serviceURL
  })
})
router.post('/register', function (req, res) {
  req.session.accountEmail = req.body.emailAddress
  res.redirect('/verification')
})

// Verify Email
router.get('/verification', function (req, res) {
  var accountEmail = req.session.accountEmail

  // Send confirmation email
  if (process.env.POSTMARK_API_KEY) {
    var postmark = require('postmark')
    var client = new postmark.Client(process.env.POSTMARK_API_KEY)
    var returnURL = ''

    returnURL = process.env.BASE_URL + '/' + 'password' + '?accountEmail=' + accountEmail + '&continueURL=' + req.session.continueURL + '&serviceName=' + req.session.serviceName

    client.sendEmailWithTemplate({
      'From': 'owilliams@companieshouse.gov.uk',
      'To': 'test.user.lfp@gmail.com',
      'TemplateId': process.env.ETID_REGISTER,
      'TemplateModel': {
        'accountEmail': accountEmail,
        'returnURL': returnURL,
        'continueURL': req.session.continueURL,
        'serviceName': req.session.serviceName
      }
    }, function (error, success) {
      if (error) {
        console.error('Unable to send via postmark: ' + error.message)
      }
    })
  } else {
    console.log('No Postmark API key detected. To test emails run app locally with `heroku local web`')
  }

  res.render('verification', {
    backLink: '/register',
    serviceName: req.session.serviceName,
    accountEmail: accountEmail,
    serviceURL: req.session.serviceURL
  })
})

// Set password
router.get('/password', function (req, res) {
  var accountEmail = req.query.accountEmail
  req.session.accountEmail = accountEmail
  req.session.serviceName = req.query.serviceName
  req.session.continueURL = req.query.continueURL

  res.render('password', {
    backLink: '/register',
    serviceName: req.session.serviceName,
    accountEmail: accountEmail,
    continueURL: req.session.continueURL,
    serviceURL: req.session.serviceURL
  })
})
router.post('/password', function (req, res) {
  var accountEmail = req.body.accountEmail
  req.session.accountEmail = accountEmail
  req.session.serviceName = req.body.serviceName
  req.session.continueURL = req.body.continueURL

  var redirectURL = req.session.continueURL + '?accountEmail=' + accountEmail
  console.log(redirectURL)
  res.redirect(redirectURL)
})

// Reet password
// Register
router.get('/reset-password', function (req, res) {
  res.render('reset-password', {
    backLink: '/sign-in',
    serviceName: req.session.serviceName,
    serviceURL: req.session.serviceURL
  })
})
router.post('/reset-password', function (req, res) {
  req.session.accountEmail = req.body.emailAddress
  res.redirect('/reset-email-sent')
})

module.exports = router
