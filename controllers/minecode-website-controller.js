const axios = require("axios");
require("dotenv").config();

function setCache(response) {
    response.set("Cache-Control", "public, max-age=300, s-maxage=600");
}

exports.getGitMembersOfMinecodeWebsite = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/orgs/minecode/members`,
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

exports.getGitIssueIdOfMinecodeWebsite = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/minecode/minecode.github.io/issues/${req.params.id}`,
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

exports.getGitIssueIdCommentsOfMinecodeWebsite = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/minecode/minecode.github.io/issues/${req.params.id}/comments`,
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

exports.getGitIssuesClosedOfMinecodeWebsite = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed`,
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

exports.getGitLabelsOfMinecodeWebsite = async (req, res) => {
    setCache(res);
    await axios({
            method: "get",
            url: `https://api.github.com/repos/minecode/minecode.github.io/labels`,
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
