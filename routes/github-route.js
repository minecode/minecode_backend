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
router.get('/repos/:user/:repo/contents', githubControllers.getGitRepoContents)
router.get('/repos/:user/:repo/contents/:image', githubControllers.getGitRepoContentImage)
router.get('/repos/:user/:repo/contributors', githubControllers.getGitRepoContributors)
router.get('/repos/:user/:repo/milestones', githubControllers.getGitRepoMilestones)
router.get('/repos/:user/:repo/milestones/closed', githubControllers.getGitRepoMilestonesClosed)
router.get('/repos/:user/:repo/milestones/:version', githubControllers.getGitRepoMilestone)
router.get('/repos/:user/:repo/milestones/:version/issues', githubControllers.getGitRepoIssuesByMilestone)
router.get('/repos/:user/:repo/milestones/:version/issues/closed', githubControllers.getGitRepoIssuesClosedOfMilestone)
router.get('/repos/:user/:repo/issues/closed', githubControllers.getGitRepoIssuesClosed)
router.get('/repos/:user/:repo/issues/open/bug', githubControllers.getGitRepoIssuesOpenBug)
router.get('/repos/:user/:repo/issues/:id', githubControllers.getGitRepoIssue)
router.get('/repos/:user/:repo/issues/:id/comments', githubControllers.getGitRepoIssueComments)
router.get('/repos/:user/:repo/labels', githubControllers.getGitRepoLabels)
router.get('/orgs/:org/members', githubControllers.getGitOrgMembers)

// Export router
module.exports = router
