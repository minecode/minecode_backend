// Import express
const express = require('express')

// Import books-controller
const minecodeWebsiteControllers = require('../controllers/minecode-website-controller.js')

// Create router
const router = express.Router()
router.use(function timeLog(req, res, next) {
  next()
})

router.get('/members', minecodeWebsiteControllers.getGitMembersOfMinecodeWebsite)
router.get('/issues/closed', minecodeWebsiteControllers.getGitIssuesClosedOfMinecodeWebsite)
router.get('/issues/open/bug', minecodeWebsiteControllers.getGitIssuesOpenBugOfMinecodeWebsite)
router.get('/issues/:id', minecodeWebsiteControllers.getGitIssueIdOfMinecodeWebsite)
router.get('/issues/:id/comments', minecodeWebsiteControllers.getGitIssueIdCommentsOfMinecodeWebsite)
router.get('/labels', minecodeWebsiteControllers.getGitLabelsOfMinecodeWebsite)

// Export router
module.exports = router
