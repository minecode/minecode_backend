// Import express
const express = require('express')

// Import books-controller
const contestsControllers = require('../controllers/contests-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})
router.get('/repos/location/:location', contestsControllers.getGitReposByLocation)
router.get('/repos/:user/:repo/contributors', contestsControllers.getContributorsByRepo)

// Export router
module.exports = router
