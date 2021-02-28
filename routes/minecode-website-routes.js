// Import express
const express = require('express')

// Import books-controller
const contestsRoutes = require('../controllers/contests-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})
router.get('/github/members', contestsRoutes.getGitMembersOfMinecodeWebsite)
router.get('/github/issues/id', contestsRoutes.getGitIssueIdOfMinecodeWebsite)
router.get('/github/issues/id/comments', contestsRoutes.getGitIssueIdCommentsOfMinecodeWebsite)
router.get('/github/issues/closed', contestsRoutes.getGitIssuesClosedOfMinecodeWebsite)
router.get('/github/labels', contestsRoutes.getGitLabelsOfMinecodeWebsite)

// Export router
module.exports = router
