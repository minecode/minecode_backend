// Import express
const express = require('express')

// Import books-controller
const minecodeWebsiteControllers = require('../controllers/minecode-website-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/orgs/:org/members', minecodeWebsiteControllers.getGitMembersOfMinecodeWebsite)
router.get('/repos/:user/:repo/issues/closed', minecodeWebsiteControllers.getGitIssuesClosedOfMinecodeWebsite)
router.get('/repos/:user/:repo/issues/open/bug', minecodeWebsiteControllers.getGitIssuesOpenBugOfMinecodeWebsite)
router.get('/repos/:user/:repo/issues/:id', minecodeWebsiteControllers.getGitIssueIdOfMinecodeWebsite)
router.get('/repos/:user/:repo/issues/:id/comments', minecodeWebsiteControllers.getGitIssueIdCommentsOfMinecodeWebsite)
router.get('/repos/:user/:repo/labels', minecodeWebsiteControllers.getGitLabelsOfMinecodeWebsite)

// Export router
module.exports = router
