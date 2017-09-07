var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";

var patchRepoName = "Hello-World2-CSC510";

  var patchRepoObj = {
	"name": "Hello-World2-CSC510",
	"description": "This is my first repository from the script.",
	"homepage": "https://github.com",
	"private": false,
	"has_issues": false,
	"has_projects": true,
	"has_wiki": true
  };

editRepo(userId, patchRepoName, patchRepoObj);

function editRepo(owner,repoName, repoObj)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repoName}`,
		method: 'PATCH',
		json: repoObj,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		console.log(body);
	});
	
}