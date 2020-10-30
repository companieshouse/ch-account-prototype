const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router



// routing for DIY filer directors to the end of the jounrey
// routing directors that use agents to enter presenter details
router.post('/who-files-for-the-company', function (req, res) {
 
    if(req.session.data['who-files'] == "no"){

      res.redirect('director-page-before-account-no-presenter')
    }
    else if(req.session.data['who-files'] == "yes"){

      res.redirect('/delegate-to-presenter/enter-presenter-details')
    }
  
})



// routing verification choice email or text
router.post('/verify-choice', function (req, res) {
 
    if(req.session.data['verify-choice'] == "email"){

      res.redirect('check-your-email')
    }
    else if(req.session.data['verify-choice'] == "text-message"){

      res.redirect('check-your-phone')
    }
  
})
