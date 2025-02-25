const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// --- Routing for users scenarios --


/* Set journey */
router.post('/migration-1/prototype-set-up', function (req, res) {

    res.redirect('start-page')
})


/* Start page for sign in */
router.post('/migration-1/start-page', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})



/* GOV.UK One login */
router.post('/migration-1/one-login/one-login-sign-in', function (req, res) {

    res.redirect('one-login/one-login-enter-password')
})
router.post('one-login/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
  })
  

/* End of GOV.UK One Login */
router.post('/migration-1/one-login/enter-code', function (req, res) {


    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC2'))     
    {
           
        res.redirect('../link-to-existing-chs-account')
    }
    else if (req.session.data['set-journey'].includes('WC3'))     
   {

        res.redirect('../no-chs-found-interrupt')

   }
})


/* Bringing the user back to Companies House from GOV.UK One Login */
router.post('/migration-1/end-linking', function (req, res) {


  if (req.session.data['set-journey'].includes('WC1')) {
       

  }
  else if (req.session.data['set-journey'].includes('WC2'))   {
       

  }
  else   {
    
    res.redirect('create-or-sign-in')
  }

})


/* Linking CHS accounts */
router.post('/migration-1/link-to-existing-chs-account', function (req, res) {

    res.redirect('chs-account-linked')

})

/* Linking CHS accounts */
router.post('/migration-1/chs-account-linked', function (req, res) {

    res.redirect('verify-email-address')

})



/* Linking CHS accounts */
router.post('/migration-1/no-chs-found-interrupt', function (req, res) {

    //no, continue to WebFiling 


    if (req.session.data['no-chs-found'].includes('no')){

        if (req.session.data['set-journey'].includes('WC3')){

            res.redirect('no-webfiling-found')
        }  
       
        
    }
    else if (req.session.data['no-chs-found'].includes('later')){

        if (req.session.data['set-journey'].includes('WC3')){

            res.redirect('no-webfiling-found')
        }  
       
        
    }
    else if (req.session.data['no-chs-found'].includes('yes')) {

        if (req.session.data['set-journey'].includes('WC3')){

            res.redirect('no-chs-found-change-email')
        }  
       
        
    }
    else if (req.session.data['set-journey'].includes('WC2'))     
    {
           
        res.redirect('../link-to-existing-chs-account')
    }


    //yes, continue to CHS sign in

    res.redirect('verify-email-address')

})




/* Linking Webfiling accounts */
router.post('/migration-1/no-webfiling-found', function (req, res) {

    //no, continue to WebFiling 


    if (req.session.data['no-webfiling-found'].includes('no')){

        if (req.session.data['set-journey'].includes('WC3')){

            res.redirect('webfiling-account-home')
        }  
       
        
    }
    else if (req.session.data['no-webfiling-found'].includes('yes')) {

        if (req.session.data['set-journey'].includes('WC3')){

            res.redirect('no-webfiling-found-change-email')
        }  
       
        
    }

    //yes, continue to CHS sign in

    res.redirect('verify-email-address')

})


/* Changing WebFiling email address */
router.post('/migration-1/no-webfiling-found-change-email', function (req, res) {

    res.redirect('webfiling-email-address')

})

/*  WebFiling password */
router.post('/migration-1/webfiling-email-address', function (req, res) {

    res.redirect('webfiling-password')

})



/*  WebFiling change email address to same as One Login */
router.post('/migration-1/webfiling-password', function (req, res) {

    res.redirect('webfiling-new-email-address')

})


/*  WebFiling change email address to same as One Login */
router.post('/migration-1/webfiling-new-email-address', function (req, res) {

    res.redirect('webfiling-email-changed')

})


/*  WebFiling change email address to same as One Login */
router.post('/migration-1/webfiling-email-changed', function (req, res) {

    res.redirect('verify-email-address')

  
})

