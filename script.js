var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + process.env.GITTOKEN;
var userId = "khantilchoksi";
var repoName = "MyAppPortfolio";

var urlRoot = "https://api.github.com";

var newRepo = {
	"name": "Hello-World2-CSC510",
	"description": "This is my first repository from the script.",
	"homepage": "https://github.com",
	"private": false,
	"has_issues": true,
	"has_projects": true,
	"has_wiki": true
  };

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

var assignees1 = "khantilchoksi19";

var newIssue = {
	"title": "Found a new new bug",
	"body": "I'm having a problem with this this this	.",
  };

var newIssue2 = {
	"title": "Found a bug issue 4",
	"body": "I'm having a problem with this 4.",
	"assignee": "khantilchoksi19",
  };
  
  //console.log("GITTOKEN:", process.env.GITTOKEN);
  

// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3
//getYourRepos(userId);
//listBranches(userId,repoName);
//createRepo(newRepo);
//createIssue(userId,repoName,newIssue2);
//patchRepo(userId, patchRepoName, patchRepoObj);
listReactions(userId, repoName, 3);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
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
		}
	});

}

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

function patchRepo(owner,repoName, repoObj)
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




