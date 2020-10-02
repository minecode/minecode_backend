// Import database
const knex = require("../db");
const axios = require("axios");
require("dotenv").config();

function setCache(response) {
	response.set("Cache-Control", "public, max-age=300, s-maxage=600");
}

exports.getScore = async (req, res) => {
	knex
		.select("userId", knex.raw("SUM(score) as score"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getScoreByContest = async (req, res) => {
	knex
		.select("userId", knex.raw("SUM(score) as score"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.where("contestId", req.params.contestId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getScoreByContestChallenge = async (req, res) => {
	knex
		.select("userId", knex.raw("SUM(score) as score"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.where("contestId", req.params.contestId)
		.where("challengeId", req.params.challengeId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getScoreByUser = async (req, res) => {
	knex
		.select(knex.raw("SUM(score)  as score"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.where("userId", req.params.userId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getListByUser = async (req, res) => {
	knex
		.select(knex.raw("*"))
		.from("ScoreUserChallenge")
		.where("userId", req.params.userId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getScoreByContestUser = async (req, res) => {
	knex
		.select(knex.raw("SUM(score)  as score, COUNT(score) as number"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.where("userId", req.params.userId)
		.where("contestId", req.params.contestId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.getScoreByContestChallengeUser = async (req, res) => {
	knex
		.select(knex.raw("SUM(score)  as score"))
		.from("ScoreUserChallenge")
		.groupBy("userId")
		.where("userId", req.params.userId)
		.where("contestId", req.params.contestId)
		.where("challengeId", req.params.challengeId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving ScoreUserChallenge: ${err}`,
			});
		});
};

exports.scoreUserChallenge = async (req, res) => {
	knex("ScoreUserChallenge")
		.insert({
			id: req.params.userId + req.params.contestId + req.params.challengeId,
			userId: req.params.userId,
			contestId: req.params.contestId,
			challengeId: req.params.challengeId,
			score: req.params.score,
		})
		.then((userData) => {
			res.json(userData);
		})
		.catch(() => {
			knex("ScoreUserChallenge")
				.where(
					"id",
					req.params.userId + req.params.contestId + req.params.challengeId
				)
				.update({
					score: req.params.score,
				})
				.then((userData) => {
					res.json(userData);
				})
				.catch((err) => {
					res.json({
						message: `There was an error retrieving ScoreUserChallenge: ${err}`,
					});
				});
		});
};

exports.getAllUser = async (req, res) => {
	knex
		.select("*")
		.from("User")
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving User: ${err}`,
			});
		});
};

exports.getUser = async (req, res) => {
	knex
		.select("*")
		.from("User")
		.where("userId", req.params.userId)
		.then((userData) => {
			res.json(userData);
		})
		.catch((err) => {
			res.json({
				message: `There was an error retrieving User: ${err}`,
			});
		});
};

exports.user = async (req, res) => {
	knex("User")
		.insert({
			userId: req.params.userId,
			firstName: req.params.firstName,
			lastName: req.params.lastName,
			imageUrl: req.params.imageUrl,
		})
		.then((userData) => {
			res.json(userData);
		})
		.catch(() => {
			knex("User")
				.where("userId", req.params.userId)
				.update({
					firstName: req.params.firstName,
					lastName: req.params.lastName,
					imageUrl: req.params.imageUrl,
					updatedAt: knex.fn.now(),
				})
				.then((userData) => {
					res.json(userData);
				})
				.catch((err) => {
					res.json({
						message: `There was an error retrieving User: ${err}`,
					});
				});
		});
};

exports.getContentsGithub = async (req, res) => {
	setCache(res);
	await axios({
			method: "get",
			url: `https://api.github.com/repos/minecode/code_contest_responses/contents/${req.params.contest}/${req.params.challenge}/${req.params.userId}/resolution.py`,
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
			},
		})
		.then((userData) => {
			res.send(userData.data);
		})
		.catch((err) => {
			res.json({
				message: `There was an error: ${err}`,
			});
		});
};

exports.getUsersGitQuery = async (req, res) => {
	setCache(res);
	await axios({
			method: "get",
			url: `https://api.github.com/search/users?q=location:${req.params.query}`,
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
			},
		})
		.then((userData) => {
			let listOfFetches = [];
			userData.data.items.forEach((element) => {
				listOfFetches.push(
					axios({
						method: "get",
						url: `https://api.github.com/users/${element.login}/repos`,
						headers: {
							Authorization: `token ${process.env.TOKEN}`,
							"Content-Type": "application/json",
							Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
						},
					})
				);
			});
			axios.all(listOfFetches).then((responseArr) => {
				let responseArrFinal = [];
				responseArr.forEach((element) => {
					responseArrFinal = responseArrFinal.concat(element.data.filter((repo) => {
						return repo.license != null && repo.license.key == 'apache-2.0'
					}));
				});
				res.send(responseArrFinal);
			});
		})
		.catch((err) => {
			res.json({
				message: `There was an error: ${err}`,
			});
		});
};

exports.getUserGit = async (req, res) => {
	setCache(res);
	await axios({
			method: "get",
			url: `https://api.github.com/users/${req.params.user}`,
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
			},
		})
		.then((userData) => {
			res.send(userData.data);
		})
		.catch((err) => {
			res.json({
				message: `There was an error: ${err}`,
			});
		});
};

exports.getReadmeGit = async (req, res) => {
	setCache(res);
	await axios({
			method: "get",
			url: `https://api.github.com/repos/${req.params.user}/${req.params.project}/readme`,
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
			},
		})
		.then((userData) => {
			res.send(userData.data);
		})
		.catch((err) => {
			res.json({
				message: `There was an error: ${err}`,
			});
		});
};

exports.getReposUserGit = async (req, res) => {
	setCache(res);
	await axios({
			method: "get",
			url: `https://api.github.com/users/${req.params.user}/repos`,
			headers: {
				Authorization: `token ${process.env.TOKEN}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
			},
		})
		.then((userData) => {
			res.send(userData.data);
		})
		.catch((err) => {
			res.json({
				message: `There was an error: ${err}`,
			});
		});
};