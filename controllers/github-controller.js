const axios = require("axios");
require("dotenv").config();

function setCache(response) {
    response.set("Cache-Control", "public, max-age=300, s-maxage=600");
}

exports.getGitUser = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/users/${req.params.login}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepo = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoContents = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/contents/minecode_settings.json?ref=master`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoContentImage = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/contents/${req.params.image}?ref=master`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoContributors = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/contributors`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoMilestones = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/milestones`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoMilestonesClosed = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/milestones?state=close`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoMilestone = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/milestones/${req.params.version}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoIssuesByMilestone = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues?milestone=${req.params.version}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoIssuesClosedOfMilestone = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues?state=closed&milestone=${req.params.version}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoIssuesClosed = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues?state=closed`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};


exports.getGitRepoIssuesOpenBug = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues?state=open&label=bug`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoIssue = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues/${req.params.id}`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoIssueComments = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/issues/${req.params.id}/comments`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitRepoLabels = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/${req.params.user}/${req.params.repo}/labels`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};

exports.getGitOrgMembers = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/orgs/${req.params.org}/members`,
            headers: {
                Authorization: `token ${process.env.TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
            },
        })
        .then((userData) => {
            res.send(userData.data)
        })
        .catch((err) => {
            res.json({
                message: `There was an error: ${err}`,
            });
        });
};
