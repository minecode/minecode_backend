// Import express
const express = require('express')

// Import books-controller
const contestsRoutes = require('../controllers/minecode-website-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/user/:login', contestsRoutes.getGitUser)

// Export router
module.exports = router
