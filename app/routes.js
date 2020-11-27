const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


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



// if a director take to a-c-i-d otherwise a-c-i-p-a-p
router.post('/create-your-password', function (req, res) {
 
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



router.post('/authentication-code-v2', function (req, res) {
 
    if(req.session.data['auth-code'] == "yes"){

      res.redirect('user-account/director/company-added')
    }
    else if(req.session.data['auth-code'] == "no"){

      res.redirect('request-authorisation')
    }
  
})

router.post('/request-authorisation', function (req, res) {
 
    if(req.session.data['request-authorisation'] == "yes"){

      res.redirect('company-added-authorisation-sent')
    }
    else if(req.session.data['request-authorisation'] == "no"){

      res.redirect('user-account/home-no-companies')
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