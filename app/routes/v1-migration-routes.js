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
    
    res.redirect('sign-in-interrupt')

})

/* Start page for sign in */
router.post('/migration-1/sign-in-webfiling-interupt', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})


/* Start page for sign in screen flow */
router.post('/migration-1/sign-in-webfiling-interupt-simplified', function (req, res) {

    res.redirect('account-support')
})

/* Start page for sign in screen flow */
router.post('/migration-1/account-support', function (req, res) {

    if (req.session.data['mutliple-accounts'].includes('yes')) {
       
        res.redirect('account-support-1')
    }
    else    
    {
           
        res.redirect('account-support-2')
    }

})


/* Start page for sign in screen flow */
router.post('/migration-1/account-support-1', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})

/* Start page for sign in screen flow */
router.post('/migration-1/account-support-2', function (req, res) {

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
       
        res.redirect('../chs-interrupt')
    }
    else if (req.session.data['set-journey'].includes('WC2'))     
    {
           
        res.redirect('../chs-interrupt-no-account-found')

    }
    else if (req.session.data['set-journey'].includes('WC3'))     
   {

        res.redirect('../chs-interrupt')

   }
   else if (req.session.data['set-journey'].includes('WC4'))     
    {
 
         res.redirect('../webfiling-interrupt')
 
    }
})

/* CHS interupt */
router.post('/migration-1/chs-interrupt', function (req, res) {

    res.redirect('link-to-existing-chs-account')
})


/* CHS interupt - not found  */
router.post('/migration-1/chs-interrupt-no-account-found', function (req, res) {

    if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('webfiling-interrupt')
    }
})


/* Webfiling interupt */
router.post('/migration-1/webfiling-interrupt', function (req, res) {

    res.redirect('verify-email-address')
})



/* Webfiling interupt */
router.post('/migration-1/verify-email-address', function (req, res) {

    res.redirect('end-linking')
})




/* Bringing the user back to Companies House from GOV.UK One Login */
router.post('/migration-1/end-linking', function (req, res) {

    res.redirect('company-overview')
       
})


/* Linking CHS accounts */
router.post('/migration-1/link-to-existing-chs-account', function (req, res) {

    res.redirect('chs-account-linked')

})

/* Linking CHS accounts */
router.post('/migration-1/chs-account-linked', function (req, res) {

    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('webfiling-interrupt')
    }
    else if (req.session.data['set-journey'].includes('WC3')) {
       
        res.redirect('no-webfiling-found')
    }

   

})





/* Linking CHS accounts */
router.post('/migration-1/no-chs-found-interrupt', function (req, res) {

    //no, continue to WebFiling 


    //if your on task 3 
    if (req.session.data['no-chs-found'].includes('yes')){

        res.redirect('no-chs-found-change-email')
          
    }
    else if (req.session.data['no-chs-found'].includes('no')) {

        res.redirect('no-webfiling-found')
        
    }



})




/* Linking Webfiling accounts */
router.post('/migration-1/no-webfiling-found', function (req, res) {

    //no, continue to WebFiling 


    if (req.session.data['no-webfiling-found'].includes('no')){

        res.redirect('company-overview')
         
    }
    else if (req.session.data['no-webfiling-found'].includes('yes')) {
        
        res.redirect('no-webfiling-found-change-email')
    
    }

    //yes, continue to CHS sign in

  //  res.redirect('verify-email-address')

})


/* Changing WebFiling email address */
router.post('/migration-1/no-webfiling-found-change-email', function (req, res) {

    res.redirect('webfiling-email-address')

})

/*  Changing WebFiling email address  */
router.post('/migration-1/webfiling-email-address', function (req, res) {

    res.redirect('webfiling-password')

})


/* Changing WebFiling email address */
router.get('/migration-1/webfiling-email-address-return-to-sign-in', function (req, res) {


    req.session.data['return-to-sign-in-page'] = true;
    res.redirect('webfiling-email-address')

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


    // User changed their email address from the sign in - return to sign in page 
    if(req.session.data['return-to-sign-in-page'] === true){

        req.session.data['return-to-sign-in-page'] = false;
        res.redirect('sign-in-interrupt')

    }

    else{
        res.redirect('webfiling-interrupt')

    }



  
})

/*  WebFiling change email address to same as One Login */
router.post('/migration-1/webfiling-email-changed', function (req, res) {

    res.redirect('verify-email-address')

  
})


