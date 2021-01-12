const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// --- Routing for users scenarios ---

router.get('/start-page-s1-s2', function (req, res) {

    app.set('scenario', 'one-two');
    res.redirect('start-page')
})

router.get('/start-page-s3', function (req, res) {

    app.set('scenario', 'three');
    res.redirect('start-page')
})


router.post('/start-page', function (req, res) {

    res.redirect('create-an-account')
})



// --- Error messages ---

// Enter your details page
router.post('/create-an-account', function(req, res) {

    var errors = [];
    var fullNameHasError = false;
    var emailHasError = false;
    var passwordHasError = false;
  
    if(req.session.data['full-name'] == ""){
      fullNameHasError = true;
      errors.push({text: "Enter your full name", href: "#full-name-error"});
    }
    if(req.session.data['email'] == ""){
      emailHasError = true;
      errors.push({text: "Enter your email address", href: "#email-error"});
    }
    if(req.session.data['password'] == ""){
      passwordHasError = true;
      errors.push({text: "Enter your password", href: "#password-error"});
    }

    if(fullNameHasError || emailHasError || passwordHasError){
      res.render('create-an-account', {

        errorFullName: fullNameHasError,
        errorEmail: emailHasError,
        errorPassword: passwordHasError,
        errorList: errors
    })
    }
    else
    {
      res.redirect('check-your-email')
    }
})



// Enter your details page
router.post('/enter-your-details', function(req, res) {

    var errors = [];
    var emailHasError = false;
  
  
  if(req.session.data['email'] == ""){
        emailHasError = true;
        errors.push({text: "Enter your email address", href: "#email-error"});
  }

  if(emailHasError){
    res.render('enter-your-details', {
          errorEmail: emailHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('enter-your-name')
  }
})


// Enter your details page
router.post('/enter-your-name', function(req, res) {

    var errors = [];
    var fullNameHasError = false;

  if(req.session.data['full-name'] == ""){
    fullNameHasError = true;
    errors.push({text: "Enter your full name", href: "#full-name-error"});
  }
  
  if(fullNameHasError){
    res.render('enter-your-name', {
          errorFullName: fullNameHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('create-your-password')
  }
})



// Enter your password page
router.post('/create-your-password', function(req, res) {

    var errors = [];
    var passwordHasError = false;
    var confirmPasswordHasError = false;
  
  if(req.session.data['password'] == ""){
    passwordHasError = true;
    errors.push({text: "Enter your password", href: "#password-error"});
  }
  
  if(req.session.data['confirm-password'] == ""){
        confirmPasswordHasError = true;
        errors.push({text: "Enter your password", href: "#confirm-password-error"});
  }

  if(passwordHasError || confirmPasswordHasError){
    res.render('create-your-password', {
          errorPassword: passwordHasError,
          errorConfirmPassword: confirmPasswordHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('check-your-email')
  }
})


// Sign in page
router.post('/sign-in', function(req, res) {

    var errors = [];
    var emailHasError = false;
    var passwordHasError = false;
  
    if(req.session.data['email'] == ""){
      emailHasError = true;
      errors.push({text: "Enter your email address", href: "#email-error"});
    }
    
    if(req.session.data['password'] == ""){
          passwordHasError = true;
          errors.push({text: "Enter your password", href: "#password-error"});
    }

    if(emailHasError || passwordHasError){
      res.render('sign-in', {
            errorEmail: emailHasError,
            errorPassword: passwordHasError,
            errorList: errors
          })
  }
  else
  {
      res.redirect('account-created')
  }
    
})

// Enter the company number page
router.post('/add-a-company', function(req, res) {

  var errors = [];
  var companyNumberHasError = false;
  
  if(req.session.data['company-number'] == ""){
    companyNumberHasError = true;
    errors.push({text: "Enter the company number", href: "#company-number-error"});
  }

  if(companyNumberHasError){
    res.render('add-a-company', {
          errorCompanyNumber: companyNumberHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('check-company-details')
  }
})


// View company information page
router.post('/check-company-details', function(req, res) {

    res.redirect('authentication-code-v2')
})



// authentication code page
router.post('/authentication-code-v2', function (req, res) {
 
    if(req.session.data['auth-code'] == "yes"){

      res.redirect('user-account/company-added')
    }
    else if(req.session.data['auth-code'] == "no"){

      if(app.settings.scenario == 'one-two')
      {
        res.redirect('request-an-authentication-code') 
      }
      else if(app.settings.scenario == 'three')
      {
        res.redirect('request-authorisation')
      }
    }
  
})


// --- password journey ---

// change your password 
router.post('/change-your-password', function(req, res) {

    res.redirect('../forgotten-password/reset-password-check-email')
})

// reset your password 
router.post('/reset-your-password', function(req, res) {

    res.redirect('../forgotten-password/sign-in-password-reset')
})










// routing director to give the option for a presenter
router.post('/connection-to-company', function (req, res) {
 
    if(req.session.data['what-is-your-role'] == "director"){

      res.redirect('link-director-to-a-company')
    }
    else if(req.session.data['what-is-your-role'] == "psc"){

      res.redirect('user-account/psc-auth-person/company-added')
    }
    else if(req.session.data['what-is-your-role'] == "authorised-person"){

      res.redirect('user-account/psc-auth-person/company-added')
    }
  
})

// routing for DIY filer directors to the end of the jounrey
// routing directors that use agents to enter presenter details
router.post('/who-files-for-the-company', function (req, res) {
 
    if(req.session.data['who-files'] == "no"){

      res.redirect('/user-account/home')
    }
    else if(req.session.data['who-files'] == "yes"){

      res.redirect('/delegate-to-presenter/enter-presenter-details')
    }
  
})



// routing director to give the option for a presenter
router.post('/company-role', function (req, res) {
 
    if(req.session.data['what-is-your-role'] == "director"){

      res.redirect('who-files-for-the-company')
    }
    else if(req.session.data['what-is-your-role'] == "psc"){

      res.redirect('who-files-for-the-company')
    }
    else if(req.session.data['what-is-your-role'] == "presenter"){

      res.redirect('user-account/home')
    }
  
})





router.post('/request-authorisation', function (req, res) {
 
    if(req.session.data['request-authorisation'] == "yes"){

      res.redirect('company-added-authorisation-sent')
    }
    else if(req.session.data['request-authorisation'] == "no"){

      res.redirect('user-account/company-added')
    }
  
})






///REMOVED-----------------------------------------


// routing verification choice email or text
router.post('/verify-choice', function (req, res) {
 
    if(req.session.data['verify-choice'] == "email"){

      res.redirect('check-your-email')
    }
    else if(req.session.data['verify-choice'] == "text-message"){

      res.redirect('check-your-phone')
    }
  
})