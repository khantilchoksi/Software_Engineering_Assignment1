var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";

var assignees1 = "khantilchoksi19";

var newIssue = {
	"title": "Found a new new bug",
	"body": "I'm having a problem with this this this	.",
  };

var newIssue2 = {
	"title": "Found a bug issue 44",
	"body": "I'm having a problem with this 44.",
	"assignee": "khantilchoksi19",
  };

createIssue(userId,repoName,newIssue);

function createIssue(owner,repo, issue)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues`,
		method: 'POST',
		json: issue,
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

