// Import express
const express = require('express')

// Import books-controller
const githubRoutes = require('../controllers/github-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/user/:login', githubRoutes.getGitUser)

// Export router
module.exports = router
