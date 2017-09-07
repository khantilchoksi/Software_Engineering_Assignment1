var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";
//console.log("GITTOKEN:", process.env.GITTOKEN);
listBranches(userId,repoName);

function listBranches(owner,repo)
{
	var options = {
		url: urlRoot + '/repos/' + owner + '/' + repo + "/branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );

			var protected = obj[i].protected;
			console.log( protected );
		}
	});
	
}