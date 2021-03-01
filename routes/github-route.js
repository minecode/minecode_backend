// Import express
const express = require('express')

// Import books-controller
const githubControllers = require('../controllers/github-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/users/:login', githubControllers.getGitUser)
router.get('/repos/:user/:repo', githubControllers.getGitRepo)

// Export router
module.exports = router
