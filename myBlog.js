function blogCallback(entries){
	//console.log(entries);
	var posts = entries.posts;
	var blogHTML=[];

	for(var i=0; i<posts.length; i++)
	{
		var title = posts[i].title;
		var link = posts[i].short_URL;
		var preview = posts[i].excerpt.replace('[...]', function(){
			return '...';
			});
		var pLength = preview.length;
		var endSub = pLength - 8;
		var excerpt = preview.substr(3, endSub);
		var date = posts[i].date;
		blogHTML.push('<li><h4>' + title + '</h4><span>' + excerpt + '</span><p><a href="' + link + '"><i>continue reading</i></a></p></li>');
	}
	document.getElementById('blog_post_list').innerHTML = blogHTML.join('');
}

function gitCallback(response)
{	var repos=[];
	repos = response.data;
	var gitHTML=[];
	console.log(repos);
	for(var i=0; i<repos.length; i++)
	{
		var repoName = repos[i].name;
		//console.log(repoName);
		var repoDesc = repos[i].description;
		var numForks = repos[i].forks_count;
		var numWatchers = repos[i].watchers_count;
		var repoURL = repos[i].svn_url;
		gitHTML.push('<li><h4>' + repoName + '</h4><span>' + repoDesc + '</span><p><a href="' + repoURL + '"><i>read the code</i></a></p></li>');
	}
	document.getElementById('git_repo_list').innerHTML = gitHTML.join('');
}