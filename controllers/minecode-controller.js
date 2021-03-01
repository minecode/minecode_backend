const axios = require("axios");
require("dotenv").config();

function setCache(response) {
    response.set("Cache-Control", "public, max-age=300, s-maxage=600");
}

exports.getGitReleasesOfMinecode = async (req, res) => {
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

exports.getGitReleasesClosedOfMinecode = async (req, res) => {
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

exports.getGitReleaseVersionOfMinecode = async (req, res) => {
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

exports.getGitIssuesOfReleaseVersionOfMinecode = async (req, res) => {
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

exports.getGitIssuesClosedOfReleaseVersionOfOfMinecode = async (req, res) => {
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

exports.getGitAppOfMinecode = async (req, res) => {
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

exports.getGitAppMilestonesOfMinecode = async (req, res) => {
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

exports.getGitAppMilestonesClosedOfMinecode = async (req, res) => {
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

exports.getGitAppContributorsOfMinecode = async (req, res) => {
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

exports.getGitAppContentsOfMinecode = async (req, res) => {
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

exports.getGitAppContentImageOfMinecode = async (req, res) => {
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
