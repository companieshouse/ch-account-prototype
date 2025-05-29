const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// --- Routing for users scenarios --


/* Set journey */
router.post('/migration-5/prototype-set-up', function (req, res) {

    res.redirect('start-page')
})


/* Start page for sign in */
router.post('/migration-5/start-page', function (req, res) {
    
    res.redirect('sign-in-interrupt')

})

/* Start page for sign in */
router.post('/migration-5/sign-in-webfiling-interupt', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})


/* Start page for sign in screen flow */
router.post('/migration-5/sign-in-webfiling-interupt-simplified', function (req, res) {

    res.redirect('account-support')
})

/* Start page for sign in screen flow */
router.post('/migration-5/account-support', function (req, res) {

    if (req.session.data['mutliple-accounts'].includes('yes')) {
       
        res.redirect('account-support-1')
    }
    else    
    {
           
        res.redirect('account-support-2')
    }

})


/* Start page for sign in screen flow */
router.post('/migration-5/account-support-1', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})

/* Start page for sign in screen flow */
router.post('/migration-5/account-support-2', function (req, res) {

    res.redirect('one-login/create-or-sign-in')
})



/* GOV.UK One login */
router.post('/migration-5/one-login/one-login-sign-in', function (req, res) {

    res.redirect('one-login/one-login-enter-password')
})



/* GOV.UK One login */
router.post('/migration-5/one-login/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
})
  

/* GOV.UK One login */
router.post('/migration-5/one-login/one-login-enter-password-sign-in', function (req, res) {

    res.redirect('enter-code-sign-in')
})
  




/* GOV.UK One login */
router.post('/migration-5/one-login/enter-code-sign-in', function (req, res) {

    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('../no-webfiling-found')
    }
    else if (req.session.data['set-journey'].includes('WC3')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC4')) {
       
        res.redirect('../your-companies-3')
    }
})
  



/* End of GOV.UK One Login sign in */
router.post('/migration-5/one-login/enter-code', function (req, res) {


    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('create-complete')
    }
    else if (req.session.data['set-journey'].includes('WC2'))     
    {
           
        res.redirect('create-complete')

    }
    else if (req.session.data['set-journey'].includes('WC3'))     
   {

        res.redirect('create-complete')

   }
   else if (req.session.data['set-journey'].includes('WC4'))     
    {
 
         res.redirect('../your-companies-3')
 
    }

    else if (req.session.data['set-journey'].includes('WC5'))     
        {
     
             res.redirect('../chs-interrupt-2')
     
        }
})



/* Create a GOV.UK One login */
router.post('/migration-5/one-login/create-enter-email', function (req, res) {

    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../one-login/create-check-your-email')
    }
    else if (req.session.data['set-journey'].includes('WC3'))     
    {
           
        res.redirect('../one-login/create-check-your-email')

    }
    else if (req.session.data['set-journey'].includes('WC2'))     
   {

        res.redirect('../one-login/create-check-your-email')

   }
   else if (req.session.data['set-journey'].includes('WC4'))     
    {
 
         res.redirect('../one-login/email-exists')
 
    }
  })


/* Create a GOV.UK One login */
router.post('/migration-5/one-login/create-check-your-email', function (req, res) {

    res.redirect('create-enter-password')
  })

/* Create a GOV.UK One login */
router.post('/migration-5/one-login/create-enter-password', function (req, res) {

    res.redirect('create-choose-security-type')
  })


  //Create a GOV.UK One login
  router.post('/migration-5/one-login/create-choose-security-type', function (req, res) {
  
   
    if (req.session.data['choose-security-type'] === 'text-message-on-sign-in') {
         
     res.redirect('create-enter-mobile-number')
   }
   // Otherwise take them to a stop screen
   else{

       res.redirect('create-set-up-auth-app')
 
   }
 })

 /* Create a GOV.UK One login */
router.post('/migration-5/one-login/create-set-up-auth-app', function (req, res) {

    res.redirect('create-complete')

    
})

 /* Create a GOV.UK One login */
 router.post('/migration-5/one-login/create-enter-mobile-number', function (req, res) {

    res.redirect('enter-code')
})



 /* Create a GOV.UK One login */
 router.post('/migration-5/one-login/create-complete', function (req, res) {


    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC3'))     
    {
           
        res.redirect('../verify-email-address')

    }
    else if (req.session.data['set-journey'].includes('WC2'))     
   {

        res.redirect('../no-webfiling-found')

   }
   else if (req.session.data['set-journey'].includes('WC4'))     
    {
 
         res.redirect('../your-companies-3')
 
    }
})







/* CHS interupt */
router.post('/migration-5/chs-interrupt', function (req, res) {

    res.redirect('link-to-existing-chs-account')
})


/* CHS interupt - not found  */
router.post('/migration-5/chs-interrupt-no-account-found', function (req, res) {

    if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('webfiling-interrupt')
    }
})


/* Webfiling interupt */
router.post('/migration-5/webfiling-interrupt', function (req, res) {

    res.redirect('verify-email-address')
})



/* Webfiling interupt */
router.post('/migration-5/verify-email-address', function (req, res) {

    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../migration-4/end-linking')
    }
    else if (req.session.data['set-journey'].includes('WC2'))     
    {
           
        res.redirect('../migration-4/end-linking-wf')

    }
 
    else if (req.session.data['set-journey'].includes('WC3'))     
        {
               
            res.redirect('../migration-4/end-linking-wf')
    
        }
 
        else if (req.session.data['set-journey'].includes('WC5'))     
            {
                   
                res.redirect('../migration-4/no-webfiling-found')
        
            }
     
    
    res.redirect('end-linking')
})




/* Bringing the user back to Companies House from GOV.UK One Login */
router.post('/migration-5/end-linking', function (req, res) {

    res.redirect('your-companies-3')
       
})


/* Linking CHS accounts */
router.post('/migration-5/link-to-existing-chs-account', function (req, res) {

    res.redirect('chs-account-linked')

})

/* Linking CHS accounts */
router.post('/migration-5/chs-account-linked', function (req, res) {

    if (req.session.data['set-journey'].includes('WC4')) {
       
        res.redirect('webfiling-interrupt')
    }   
    else if (req.session.data['set-journey'].includes('WC3')) {
       
        res.redirect('no-webfiling-found')
    }

   

})





/* Linking CHS accounts */
router.post('/migration-5/no-chs-found-interrupt', function (req, res) {

    //no, continue to WebFiling 


    //if your on task 3 
    if (req.session.data['no-chs-found'].includes('yes')){

        res.redirect('no-chs-found-change-email')
          
    }
    else if (req.session.data['no-chs-found'].includes('no')) {

        res.redirect('no-webfiling-found')
        
    }



})





/* Changing WebFiling email address */
router.post('/migration-5/no-webfiling-found-change-email', function (req, res) {

    res.redirect('webfiling-email-address')

})

/*  Changing WebFiling email address  */
router.post('/migration-5/webfiling-email-address', function (req, res) {

    res.redirect('webfiling-password')

})


/* Changing WebFiling email address */
router.get('/migration-5/webfiling-email-address-return-to-sign-in', function (req, res) {


    req.session.data['return-to-sign-in-page'] = true;
    res.redirect('webfiling-email-address')

})


/*  WebFiling change email address to same as One Login */
router.post('/migration-5/webfiling-password', function (req, res) {

  
    if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('verify-email-address')
    }   
    else if (req.session.data['set-journey'].includes('WC3')) {
       
        res.redirect('no-webfiling-found')
    }
    else if (req.session.data['set-journey'].includes('WC5')) {
       
        res.redirect('your-companies-3')
    }
   
})


/*  WebFiling change email address to same as One Login */
router.post('/migration-5/webfiling-new-email-address', function (req, res) {

    res.redirect('webfiling-email-changed')

})


/*  WebFiling change email address to same as One Login */
router.post('/migration-5/webfiling-email-changed', function (req, res) {


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
router.post('/migration-5/webfiling-email-changed', function (req, res) {

    res.redirect('verify-email-address')

  
})


