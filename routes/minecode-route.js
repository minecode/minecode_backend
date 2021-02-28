// Import express
const express = require('express')

// Import books-controller
const contestsRoutes = require('../controllers/minecode-website-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/milestones/:version', contestsRoutes.getGitReleaseVersionOfMinecode)
router.get('/milestones/:version/issues', contestsRoutes.getGitIssuesOfReleaseVersionOfMinecode)
router.get('/milestones/:version/issues/closed', contestsRoutes.getGitIssuesClosedOfReleaseVersionOfOfMinecode)

router.get('/app/:name', contestsRoutes.getGitAppOfMinecode)
router.get('/app/:name/milestones', contestsRoutes.getGitAppMilestonesOfMinecode)
router.get('/app/:name/milestones/closed', contestsRoutes.getGitAppMilestonesClosedOfMinecode)
router.get('/app/:name/contributors', contestsRoutes.getGitAppContributorsOfMinecode)
router.get('/app/:name/contents', contestsRoutes.getGitAppContentsOfMinecode)
router.get('/app/:name/contents/image/:image', contestsRoutes.getGitAppContentImageOfMinecode)

// Export router
module.exports = router
