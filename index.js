var isFeedDisplayed = false;
var displayedFeed;

$(document).ready(function(){
//$('#LinkFeeds').hide();
	$('.feedLink').click(function(e){
		e.preventDefault();
		var clickedFeed= $(this).text();

		if(!isFeedDisplayed)
		{
			showFeedWith(clickedFeed);
		}
		else
		{
			hideThenShow(clickedFeed);
		}
	});
	$('.collapseFeed').click(function(e){
		e.preventDefault();
		hideFeed();
	});

});

function hideFeed()
{	var displayedID = '#' + displayedFeed;
	$('.feedContainer').animate({left:'-750px'}, 700, function(){$(displayedID).hide();});
	

	var selectHide = "a:contains(" + displayedFeed + ")";
	$(selectHide).removeClass('linkDisplayedInFeed');

	isFeedDisplayed = false;
}

function showFeedWith(feed)
{	feedID = '#' + feed;
	displayedFeed = feed;

	var selectShow = "a:contains(" + displayedFeed + ")";
	$(selectShow).addClass('linkDisplayedInFeed');

	$(feedID).show();

	$('.feedContainer').animate({left:'10px'}, 700);

	isFeedDisplayed = true;
}

function hideThenShow(feed)
{
	var displayedID = '#' + displayedFeed;
	$('.feedContainer').animate({left:'-750px'}, 700, function()
		{	
			var selectHide = "a:contains(" + displayedFeed + ")";
			$(selectHide).removeClass('linkDisplayedInFeed');
			$(displayedID).hide();

			feedID = '#' + feed;
			displayedFeed = feed;

			var selectShow = "a:contains(" + displayedFeed + ")";
			$(selectShow).addClass('linkDisplayedInFeed');

			$(feedID).show();

			$('.feedContainer').animate({left:'10px'}, 700);

		});
	isFeedDisplayed = true;
}