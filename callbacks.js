function blogCallback(entries){
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

	for(var i=0; i<repos.length; i++)
	{
		var repoName = repos[i].name;
		var repoDesc = repos[i].description;
		var numForks = repos[i].forks_count;
		var numWatchers = repos[i].watchers_count;
		var repoURL = repos[i].svn_url;
		gitHTML.push('<li><h4>' + repoName + '</h4><span>' + repoDesc + '</span><p><a href="' + repoURL + '"><i>read the code</i></a></p></li>');
	}
	document.getElementById('git_repo_list').innerHTML = gitHTML.join('');
}

function twitterCallback(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, 
                                    function(url) 
                                    {
                                      return '<a href="'+url+'">'+url+'</a>';
                                    }
                                  ).replace(/\B@([_a-z0-9]+)/ig, 
                                      function(reply) 
                                      {
                                        return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
                                      }
                                    ).replace( /\B#([_a-z0-9]+)/ig,
                                        function(HashTag)
                                        {
                                          return HashTag.charAt(0)+'<a href="http://twitter.com/search?q=%23'+HashTag.substring(1)+'">'+HashTag.substring(1)+'</a>';
                                        }
                                      );
    statusHTML.push('<li><span>'+status+'</span><p><a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></p></li>');
  }

  document.getElementById('twitter_update_list').innerHTML = statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);
  var displayDate = values[1] + " " + values[2];

  if(delta < 120) {
    return '1m';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + 'm';
  } else if(delta < (120*60)) {
    return '1h';
  } else if(delta < (24*60*60)) {
    return (parseInt(delta / 3600)).toString() + 'h';
  } else {
    return displayDate;
  }
}