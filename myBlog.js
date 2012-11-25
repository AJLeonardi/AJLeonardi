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
		console.log(excerpt);
		var date = posts[i].date;
		blogHTML.push('<li><h4>' + title + '</h4><span>' + excerpt + '</span><p><a href="' + link + '"><i>continue reading</i></a></p></li>');
	}
	document.getElementById('blog_post_list').innerHTML = blogHTML.join('');
}