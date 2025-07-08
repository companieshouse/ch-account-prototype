const express = require('express')
const app = express()
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// --- Routing for users scenarios --


/* Set journey */
router.post('/migration-7/prototype-set-up', function (req, res) {

    res.redirect('start-page')
})


/* Start page for sign in */
router.post('/migration-7/start-page', function (req, res) {
    
    res.redirect('sign-in-interrupt')

})



/* GOV.UK One login */
router.post('/migration-7/one-login/one-login-sign-in', function (req, res) {

    res.redirect('one-login/one-login-enter-password')
})



/* GOV.UK One login */
router.post('/migration-7/one-login/one-login-enter-password', function (req, res) {

    res.redirect('enter-code')
})
  

/* GOV.UK One login */
router.post('/migration-7/one-login/one-login-enter-password-sign-in', function (req, res) {

    res.redirect('enter-code-sign-in')
})
  




/* GOV.UK One login */
router.post('/migration-7/one-login/enter-code-sign-in', function (req, res) {

    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC3')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC4')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC5')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC6')) {
       
        res.redirect('../email-address-changed')
    }
    else if (req.session.data['set-journey'].includes('WC7')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC8')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC9')) {
       
        res.redirect('../your-companies-3')
    }
    else if (req.session.data['set-journey'].includes('WC16')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC17')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC10')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC11')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC12')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC13')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC14')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC15')) {
       
        res.redirect('../verify-email-address')
    }
})
  



/* End of GOV.UK One Login sign in */
router.post('/migration-7/one-login/enter-code', function (req, res) {


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
 
         res.redirect('../create-complete')
 
    }

    else if (req.session.data['set-journey'].includes('WC5'))     
    {
     
        res.redirect('../create-complete')
     
    }
    else if (req.session.data['set-journey'].includes('WC6'))     
    {
     
        res.redirect('create-complete')
     
    }
    else if (req.session.data['set-journey'].includes('WC7'))     
        {
         
            res.redirect('create-complete')
         
        }
  else if (req.session.data['set-journey'].includes('WC8'))     
       {
                
             res.redirect('create-complete')
                
           }
       else if (req.session.data['set-journey'].includes('WC9'))     
             {
                 
             res.redirect('create-complete')
                 
           }
          else if (req.session.data['set-journey'].includes('WC16'))     
              {
                     
                res.redirect('create-complete')
               
            }
            else if (req.session.data['set-journey'].includes('WC17'))     
              {
                         
                    res.redirect('create-complete')
                         
            }
              else if (req.session.data['set-journey'].includes('WC10'))     
              {
                 
                   res.redirect('create-complete')
                             
                 }
             else if (req.session.data['set-journey'].includes('WC11'))     
                        {
                                 
                       res.redirect('create-complete')
                                 
                    }
                      else if (req.session.data['set-journey'].includes('WC12'))     
                          {
                                     
                       res.redirect('create-complete')
                                     
                }
              else if (req.session.data['set-journey'].includes('WC13'))     
                              {
                                         
                         res.redirect('create-complete')
                                         
                        }
              else if (req.session.data['set-journey'].includes('WC14'))     
                       {
                                             
           res.redirect('create-complete')
                                             
              }
               else if (req.session.data['set-journey'].includes('WC15'))     
                 {
                                                 
                   res.redirect('create-complete')
                                                 
            }

})



/* Create a GOV.UK One login */
router.post('/migration-7/one-login/create-enter-email', function (req, res) {

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
 
         res.redirect('../one-login/create-check-your-email')
 
    }
    else if (req.session.data['set-journey'].includes('WC5'))     
    {
     
        res.redirect('../one-login/create-check-your-email')
     
    }
     else if (req.session.data['set-journey'].includes('WC6'))     
    {
     
        res.redirect('../one-login/email-exists')
     
    }
    else if (req.session.data['set-journey'].includes('WC7'))     
        {
         
            res.redirect('../one-login/create-check-your-email')
         
        }
        else if (req.session.data['set-journey'].includes('WC8'))     
            {
             
                res.redirect('../one-login/create-check-your-email')
             
            }
    else if (req.session.data['set-journey'].includes('WC9'))     
        {
     
             res.redirect('../one-login/email-exists')
     
        }
        else if (req.session.data['set-journey'].includes('WC16'))     
            {
             
                res.redirect('../one-login/create-check-your-email')
             
            }
            else if (req.session.data['set-journey'].includes('WC17'))     
                {
                 
                    res.redirect('../one-login/create-check-your-email')
                 
                }
    else if (req.session.data['set-journey'].includes('WC10'))     
             {
             
           res.redirect('../one-login/create-check-your-email')
                     
       }
     else if (req.session.data['set-journey'].includes('WC11'))     
    {
                         
     res.redirect('../one-login/create-check-your-email')
                         
           } 

          else if (req.session.data['set-journey'].includes('WC12'))     
        {
                             
           res.redirect('../one-login/create-check-your-email')
                             
           }
         else if (req.session.data['set-journey'].includes('WC13'))     
             {
                                 
        res.redirect('../one-login/create-check-your-email')
                                 
         }
      else if (req.session.data['set-journey'].includes('WC14'))     
          {
                                     
                  res.redirect('../one-login/create-check-your-email')
                                     
          }
      else if (req.session.data['set-journey'].includes('WC15'))     
          {
                                         
             res.redirect('../one-login/create-check-your-email')
                                         
         }
  })


/* Create a GOV.UK One login */
router.post('/migration-7/one-login/create-check-your-email', function (req, res) {

    res.redirect('create-enter-password')
  })

/* Create a GOV.UK One login */
router.post('/migration-7/one-login/create-enter-password', function (req, res) {

    res.redirect('create-choose-security-type')
  })


  //Create a GOV.UK One login
  router.post('/migration-7/one-login/create-choose-security-type', function (req, res) {
  
   
    if (req.session.data['choose-security-type'] === 'text-message-on-sign-in') {
         
     res.redirect('create-enter-mobile-number')
   }
   // Otherwise take them to a stop screen
   else{

       res.redirect('create-set-up-auth-app')
 
   }
 })

 /* Create a GOV.UK One login */
router.post('/migration-7/one-login/create-set-up-auth-app', function (req, res) {

    res.redirect('create-complete')

    
})

 /* Create a GOV.UK One login */
 router.post('/migration-7/one-login/create-enter-mobile-number', function (req, res) {

    res.redirect('enter-code')
})



 /* Create a GOV.UK One login */
 router.post('/migration-7/one-login/create-complete', function (req, res) {


    if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('../verify-email-address')
    }
    else if (req.session.data['set-journey'].includes('WC3'))     
    {
           
        res.redirect('../verify-email-address')

    }
    else if (req.session.data['set-journey'].includes('WC2'))     
   {

        res.redirect('../verify-email-address')

   }
   else if (req.session.data['set-journey'].includes('WC4'))     
    {
 
         res.redirect('../verify-email-address')
 
    }
    else if (req.session.data['set-journey'].includes('WC5'))     
    {
     
        res.redirect('../verify-email-address')
     
    }
    else if (req.session.data['set-journey'].includes('WC6'))     
    {
     
        res.redirect('../email-address-changed')
     
    }
    else if (req.session.data['set-journey'].includes('WC7'))     
        {
         
            res.redirect('../verify-email-address')
         
        }
    else if (req.session.data['set-journey'].includes('WC8'))     
          {
             
               res.redirect('../verify-email-address')
             
            }
    else if (req.session.data['set-journey'].includes('WC9'))     
          {
                 
              res.redirect('../your-companies-3')
                 
          }
          else if (req.session.data['set-journey'].includes('WC16'))     
    {
               
             res.redirect('../verify-email-address')
               
       }
       else if (req.session.data['set-journey'].includes('WC17'))     
          {
                   
                    res.redirect('../verify-email-address')
                   
        }
        else if (req.session.data['set-journey'].includes('WC10'))     
          {
                    
                  res.redirect('../verify-email-address')
                
          }
         else if (req.session.data['set-journey'].includes('WC11'))     
           {
                           
           res.redirect('../verify-email-address')
                           
             }
           else if (req.session.data['set-journey'].includes('WC12'))     
            {
                               
                res.redirect('../verify-email-address')
                               
               }
             else if (req.session.data['set-journey'].includes('WC13'))     
               {
                                   
                   res.redirect('../verify-email-address')
                                   
                }
          else if (req.session.data['set-journey'].includes('WC14'))     
             {
                                       
               res.redirect('../verify-email-address')
                                       
           }
           else if (req.session.data['set-journey'].includes('WC15'))                 {
                                           
          res.redirect('../verify-email-address')
                                           
          }

})



/* After OTP entered */
router.post('/migration-7/verify-email-address', function (req, res) {

    if (req.session.data['set-journey'].includes('WC2')) {
       
        res.redirect('../migration-7/end-linking-new-account')
    }
    else if (req.session.data['set-journey'].includes('WC3'))     
    {
           
        res.redirect('../migration-7/end-linking-new-account')

    }
 
    else if (req.session.data['set-journey'].includes('WC4'))     
        {
               
            res.redirect('../migration-7/end-linking')
    
        }
 
      else if (req.session.data['set-journey'].includes('WC5'))     
            {
                   
                res.redirect('../migration-7/end-linking')
        
            }
      else if (req.session.data['set-journey'].includes('WC7'))     
                {
                       
                    res.redirect('../migration-7/no-webfiling-found')
            
                }
     else if (req.session.data['set-journey'].includes('WC8'))     
                  {
                           
                        res.redirect('../migration-7/no-webfiling-found')
                
             }
       else if (req.session.data['set-journey'].includes('WC16'))     
            {
                               
              res.redirect('../migration-7/send-a-new-email')
                    
          }
             else if (req.session.data['set-journey'].includes('WC17'))     
                {
                                   
             res.redirect('../migration-7/send-a-new-email')
                        
             }
    
    res.redirect('end-linking')
})




/* Signing into Webfiling after confirmation screen */
router.post('/migration-7/end-linking', function (req, res) {

    res.redirect('your-companies-3')
       
})



/* Changing WebFiling email address */
router.post('/migration-7/no-webfiling-found-change-email', function (req, res) {

    res.redirect('webfiling-email-address')

})

/*  Changing WebFiling email address  */
router.post('/migration-7/webfiling-email-address', function (req, res) {

    res.redirect('webfiling-password')

})


/* Changing WebFiling email address */
router.get('/migration-7/webfiling-email-address-return-to-sign-in', function (req, res) {


    req.session.data['return-to-sign-in-page'] = true;
    res.redirect('webfiling-email-address')

})


/*  WebFiling change email address to same as One Login OR Scenario 7/8 link legacy email */
router.post('/migration-7/webfiling-password', function (req, res) {

  
    if (req.session.data['set-journey'].includes('WC7')) {
       
        res.redirect('verify-email-address-2')
    }   
    else if (req.session.data['set-journey'].includes('WC8')) {
       
        res.redirect('verify-email-address-2')
    }
    
    else if (req.session.data['set-journey'].includes('WC1')) {
       
        res.redirect('webfiling-new-email-address')
    }

    res.redirect('webfiling-new-email-address')
})


/*  WebFiling change email address to same as One Login */
router.post('/migration-7/webfiling-new-email-address', function (req, res) {

    res.redirect('webfiling-email-changed')

})

/*  WebFiling old email connected to new One Login*/
router.post('/migration-7/verify-email-address-2', function (req, res) {

    res.redirect('end-linking-wf')

})

/*  WebFiling change email address to same as One Login */
router.post('/migration-7/webfiling-email-changed', function (req, res) {


    // User changed their email address from the sign in - return to sign in page 
    if(req.session.data['return-to-sign-in-page'] === true){

        req.session.data['return-to-sign-in-page'] = false;
        res.redirect('sign-in-interrupt')

    }

   



  
})

/*  WebFiling change email address to same as One Login */
router.post('/migration-7/webfiling-email-changed', function (req, res) {

    res.redirect('verify-email-address')

  
})


router.post('/migration-7/verify-email-address-3', function (req, res) {

    res.redirect('no-webfiling-found')

  
})

router.post('/migration-7/send-a-new-email', function (req, res) {

    if (req.session.data['set-journey'].includes('WC16')) {
       
        res.redirect('../migration-7/verify-email-address-4')
    } 
    else if (req.session.data['set-journey'].includes('WC17'))     
    {
           
        res.redirect('../migration-7/verify-email-address-4')

    }
})

    router.post('/migration-7/verify-email-address-4', function (req, res) {

        if (req.session.data['set-journey'].includes('WC16')) {
           
            res.redirect('../migration-7/end-linking-new-account')
        }
        else if (req.session.data['set-journey'].includes('WC17'))     
        {
               
            res.redirect('../migration-7/end-linking')
    
        }

    })





