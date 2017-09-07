var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";

var newRepo = {
	"name": "Hello-World233-CSC510",
	"description": "This is my first repository from the script.",
	"homepage": "https://github.com",
	"private": false,
	"has_issues": true,
	"has_projects": true,
	"has_wiki": true
  };

createRepo(newRepo);

function createRepo(newRepo)
{
	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		json: newRepo,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		//var obj = JSON.parse(body);
		console.log(body);
	});
	
}