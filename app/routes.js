const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// --- Routing for users scenarios ---

router.get('/start-page-s1-s2', function (req, res) {
    app.set('scenario', 'hannah');
    res.redirect('start-page')
})

router.get('/start-page-s3', function (req, res) {

    app.set('scenario', 'three');
    res.redirect('start-page')
})






router.get('/sign-in-add-auth-person', function (req, res) {

    app.set('scenario', 'add-auth-person');
    res.redirect('sign-in')
})

router.get('/sign-in-with-mobile', function (req, res) {

    app.set('scenario', 'sign-in-with-mobile');
    res.redirect('sign-in')
})

router.get('/service-journey', function (req, res) {

    app.set('scenario', 'service-journey');
    res.redirect('../service-journey/service-start-page')
})

router.get('/sign-in-webfiling', function (req, res) {

    app.set('scenario', 'webfiling-journey');
    res.redirect('sign-in-summary')
})




//service journey 
router.post('/service-journey/add-a-company', function (req, res) {

    res.redirect('../service-journey/check-company-details')
})

router.post('/service-journey/check-company-details', function (req, res) {

    res.redirect('../service-journey/auth-code')
})

router.post('/service-journey/auth-code', function (req, res) {

    res.redirect('../service-journey/add-company-to-account')
})

router.post('/service-journey/add-company-to-account', function (req, res) {

    res.redirect('../service-journey/add-company-to-account-notification')
})

router.post('/service-journey/add-company-to-account-notification', function (req, res) {

    res.redirect('../service-journey/confirmation-page')
})


//change a registered office address

router.get('/change-address', function (req, res) {

    app.set('scenario', 'change-address');
    res.redirect('../CHS/chs-profile-page-new')
})

router.post('/CHS/chs-profile-auth-code', function (req, res) {

    res.redirect('../CHS/add-company-to-account')
})

router.post('/CHS/add-company-to-account', function (req, res) {

    if(req.session.data['add-to-account'] == "yes"){

      res.redirect('../CHS/chs-profile-manage-auth-code')
    }
    else if(req.session.data['add-to-account'] == "no"){

      res.redirect('../CHS/chs-profile-manage-auth-code')
    }
})

router.post('/CHS/change-of-ro-address', function (req, res) {

    res.redirect('../CHS/confirmation')
})

router.post('/CHS/change-of-ro-address-notification', function (req, res) {

    res.redirect('../CHS/confirmation')
})









router.get('/sign-in-new-device', function (req, res) {

    app.set('scenario', 'new-device');
    res.redirect('../sign-in')
})


router.get('/sign-in-password-mobile', function (req, res) {

    app.set('scenario', 'forgotten-password-mobile');
    res.redirect('../sign-in')
})



router.post('/start-page', function (req, res) {

    res.redirect('create-an-account')
})



// --- Error messages ---

// Enter your details page
router.post('/create-an-account', function(req, res) {

    var errors = [];
    var emailHasError = false;

    var telephoneNumber = req.body.telephoneNumber



    if(req.session.data['email'] == ""){
      emailHasError = true;
      errors.push({text: "Enter your email address", href: "#email-error"});
    }


    if(emailHasError){
      res.render('create-an-account', {

        errorEmail: emailHasError,
        errorList: errors
     }
    )}
    else
    {
      if(telephoneNumber !== ''){

        res.redirect('check-your-phone')

      }
      else{
        
        res.redirect('check-your-email')

      }

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
    var firstNameHasError = false;
    var lastNameHasError = false;

  if(req.session.data['first-name'] == ""){
    firstNameHasError = true;
    errors.push({text: "Enter your first name", href: "#first-name-error"});
  }
  if(req.session.data['last-name'] == ""){
    lastNameHasError = true;
    errors.push({text: "Enter your last name", href: "#last-name-error"});
  }
  
  if(firstNameHasError || lastNameHasError){
    res.render('enter-your-name', {
          errorFirstName: firstNameHasError,
          errorLastName: lastNameHasError,
          errorList: errors
        })
  }
  else
  {
    res.redirect('create-an-account')
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
        errors.push({text: "Re-enter your password", href: "#confirm-password-error"});
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
    res.redirect('user-account/home-no-companies')
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
    else if(app.settings.scenario == 'user-with-account')
    {
      res.redirect('/jills-user-account/home-no-companies-no-notification') 
    }
    else if(app.settings.scenario == 'add-auth-person')
    {
      res.redirect('/jills-user-account/home-no-companies-auth-person-request') 
    }
    else if(app.settings.scenario == 'service-journey')
    {
      res.redirect('/service-journey/add-a-company') 
    }
    else if(app.settings.scenario == 'new-device')
    {
      res.redirect('/new-device/choose-verify-option') 
    }
    else if(app.settings.scenario == 'sign-in-with-mobile')
    {
      res.redirect('check-your-phone-remember-code') 
    }
    else if(app.settings.scenario == 'change-address')
    {
      res.redirect('CHS/chs-profile-auth-code') 
    }
    else if(app.settings.scenario == 'webfiling-journey')
    {
      res.redirect('webfiling/what-are-your-details') 
    }
    else if(app.settings.scenario == 'webfiling-not-added')
    {
      res.redirect('webfiling/what-are-your-details') 
    }
    else
    {
      res.redirect('/user-account/home-no-companies')
    }
    
})

//new device sign in - verify option
router.post('/new-device/choose-verify-option', function(req, res) {

   if(req.session.data['verify-option'] == "email"){

      res.redirect('../new-device/check-your-email')
    }
    else if(req.session.data['verify-option'] == "text-message"){

      res.redirect('../new-device/check-your-phone')
    }
 
})

//accept or decline authorised person request -  user with account
router.get('/confirm-presenter-email', function(req, res) {

   app.set('scenario', 'user-with-account');
  res.redirect('messages/email-confirm-you-are-the-presenter')
 
})


// accept or decline authorised person request - user with no account
router.get('/no-account-confirm-presenter-email', function(req, res) {

   app.set('scenario', 'user-has-no-account');
    res.redirect('messages/email-confirm-you-are-the-presenter')
 
})

router.get('/sign-in-auth-person-request', function (req, res) {

    if(app.settings.scenario == 'user-with-account')
      {
        res.redirect('sign-in')
      }
      else if(app.settings.scenario == 'user-has-no-account')
      {
        res.redirect('user-account/unregistered-user/create-your-password')
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


      if(app.settings.scenario == 'hannah')
      {
        res.redirect('authentication-code') 
      }
      if(app.settings.scenario == 'auth-person-request')
      {
        res.redirect('authentication-code') 
      }
      else if(app.settings.scenario == 'three')
      {
        res.redirect('authentication-code-v3')
      }


})



// --- password journey ---

// change your password 
router.post('/change-your-password', function(req, res) {

  if(app.settings.scenario == 'forgotten-password-mobile')
  {
    res.redirect('../forgotten-password/check-your-phone') 
  }
  else{

    res.redirect('../forgotten-password/reset-password-check-email')

  }
 
})

router.post('/choose-verify-option', function(req, res) {

   if(req.session.data['verify-option'] == "email"){

      res.redirect('forgotten-password/reset-password-check-email')
    }
    else if(req.session.data['verify-option'] == "text-message"){

      res.redirect('check-your-phone')
    }
 
})

router.post('/check-your-phone', function(req, res) {

  if(req.session.data['verify-option'] == "text-message"){

      res.redirect('forgotten-password/reset-your-password')
    }
    if(app.settings.scenario == 'webfiling-journey'){

      res.redirect('user-account/home-no-companies')
    }

    else{

    res.redirect('check-your-email')

    }


})

router.post('/check-your-phone-remember-code', function(req, res) {

    res.redirect('user-account/home-no-companies')
})



// reset your password 
router.post('/reset-your-password', function(req, res) {

    res.redirect('../forgotten-password/sign-in-password-reset')
})


// authentication code page
router.post('/authentication-code', function (req, res) {

    res.redirect('../user-account/company-added')
  
})

// authorised person request page
router.post('/authentication-code-v3', function (req, res) {

    res.redirect('../user-account/company-added')
  
})


//remove an authorised person
router.post('/remove-authorised-person-hannah', function (req, res) {

    res.redirect('./auth-person-removed')
  
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

//webfiling journey

router.post('/webfiling/what-are-your-details', function(req, res) {

  

    var telephoneNumberWeb = req.body.telephoneNumberWeb

    if(telephoneNumberWeb !== ''){

        res.redirect('/check-your-phone')

      }
      else{
        
        res.redirect('../user-account/home-no-companies')

      }

  
})

router.post('/company-number', function(req, res) {

    if(app.settings.scenario == 'webfiling-journey')
    {
      res.redirect('webfiling/check-company-details') 
    }
    else if(app.settings.scenario == 'webfiling-not-added')
    {
      res.redirect('webfiling/check-company-details') 
    }
})

router.post('/webfiling/check-company-details', function(req, res) {

    if(app.settings.scenario == 'webfiling-journey')
    {
      res.redirect('./webfiling-profile') 
    }
    else if(app.settings.scenario == 'webfiling-not-added')
    {
      res.redirect('/authentication-code') 
    }
})

//add company to account 

// router.post('/webfiling/add-company-to-account', function(req, res) {


// })






// --- Error messages ---

// Enter your details page
router.post('/what-are-your-details', function(req, res) {


    var telephoneNumber = req.body.telephoneNumber

    if(telephoneNumber !== ''){

      res.redirect('webfiling/check-your-phone')

    }
    else{
        
      res.redirect('check-your-email')

    }  
})






router.post('/request-authorisation-to-file', function (req, res) {
 
  var errors = [];
  var requestAuthorisationHasError = false;
  
  if(typeof req.session.data['request-authorisation'] == 'undefined'){
    requestAuthorisationHasError = true;
    errors.push({text: "Select yes to request authorisation to file for this company", href: "#request-authorisation-error"});
  }

  if(requestAuthorisationHasError){
    res.render('request-authorisation-to-file', {
          errorRequestAuthorisation: requestAuthorisationHasError,
          errorList: errors
        })
  }
  else
  {

    if(req.session.data['request-authorisation'] == "yes"){

      res.redirect('company-added-authorisation-sent')
    }
    else if(req.session.data['request-authorisation'] == "no"){

      res.redirect('request-an-authentication-code')
    }
    
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