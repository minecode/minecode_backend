// Import express
const express = require('express')

// Import books-controller
const minecodeControllers = require('../controllers/minecode-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/repos/:user/:repo/milestones', minecodeControllers.getGitReleasesOfMinecode)
router.get('/repos/:user/:repo/milestones/closed', minecodeControllers.getGitReleasesClosedOfMinecode)

router.get('/repos/:user/:repo/milestones/:version', minecodeControllers.getGitReleaseVersionOfMinecode)
router.get('/repos/:user/:repo/milestones/:version/issues', minecodeControllers.getGitIssuesOfReleaseVersionOfMinecode)
router.get('/repos/:user/:repo/milestones/:version/issues/closed', minecodeControllers.getGitIssuesClosedOfReleaseVersionOfOfMinecode)

router.get('/repos/:user/:repo', minecodeControllers.getGitAppOfMinecode)
router.get('/repos/:user/:repo/milestones', minecodeControllers.getGitAppMilestonesOfMinecode)
router.get('/repos/:user/:repo/milestones/closed', minecodeControllers.getGitAppMilestonesClosedOfMinecode)
router.get('/repos/:user/:repo/contributors', minecodeControllers.getGitAppContributorsOfMinecode)
router.get('/repos/:user/:repo/contents', minecodeControllers.getGitAppContentsOfMinecode)
router.get('/repos/:user/:repo/contents/:image', minecodeControllers.getGitAppContentImageOfMinecode)

// Export router
module.exports = router
