var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";

listReactions(userId, repoName, 3);

function listReactions(owner,repo,issueNumber)
{
	var options = {
		url: urlRoot + `/repos/${owner}/${repo}/issues/${issueNumber}/reactions`,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept": "application/vnd.github.squirrel-girl-preview",
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log(  body );

		for( var i = 0; i < obj.length; i++ )
		{
			//var name = obj[i].name;
			//console.log( name );

			var content = obj[i].content;
			console.log( content );

			var created_at = obj[i].created_at;
			console.log( created_at );
		}
	});
	
}

