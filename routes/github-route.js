// Import express
const express = require('express')

// Import books-controller
const githubControllers = require('../controllers/github-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/user/:login', githubControllers.getGitUser)

// Export router
module.exports = router
