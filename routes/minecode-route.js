// Import express
const express = require('express')

// Import books-controller
const minecodeControllers = require('../controllers/minecode-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/milestones/:version', minecodeControllers.getGitReleaseVersionOfMinecode)
router.get('/milestones/:version/issues', minecodeControllers.getGitIssuesOfReleaseVersionOfMinecode)
router.get('/milestones/:version/issues/closed', minecodeControllers.getGitIssuesClosedOfReleaseVersionOfOfMinecode)

router.get('/app/:name', minecodeControllers.getGitAppOfMinecode)
router.get('/app/:name/milestones', minecodeControllers.getGitAppMilestonesOfMinecode)
router.get('/app/:name/milestones/closed', minecodeControllers.getGitAppMilestonesClosedOfMinecode)
router.get('/app/:name/contributors', minecodeControllers.getGitAppContributorsOfMinecode)
router.get('/app/:name/contents', minecodeControllers.getGitAppContentsOfMinecode)
router.get('/app/:name/contents/image/:image', minecodeControllers.getGitAppContentImageOfMinecode)

// Export router
module.exports = router
