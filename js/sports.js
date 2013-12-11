$.ajax({
	url  : 'http://api.espn.com/v1/sports/news/headlines',
	data : {
				apikey  : 'r93h9ssezqdh96quxumyy6g4',
				_accept : 'application/json'
	},
	dataType : 'jsonp',
	success  : function(data) {
		var ul = $('.headlines');
		$.each(data.headlines, function() {
			var li = $('<li/>').text(this.headline);
			ul.append(li);
		});
	},
	error : function() {
		li = '<li>Sorry, there was an error retrieving data from the server.</li>';
		ul.append(li)
	}
});

$.ajax({
	url  : 'http://api.espn.com/v1/sports/football/college-football/news/headlines',
	data : {
				apikey  : 'r93h9ssezqdh96quxumyy6g4',
				_accept : 'application/json'
	},
	dataType : 'jsonp',
	success  : function(data) {
		var 
			$ul = $('.teams'),
			btnEl = '<br /><button class="reveal">Reveal</button>';

		var revealMore = function() {
			var 
				$btn     = $('.reveal'),
				closeBtn = '<button class="close">Close</button>';

			$btn.on('click', function(event) {
				var thisTarget = event.currentTarget;
				console.log(thisTarget)
				console.log(this)
				$('.reveal + .story').show('4000','swing');
			});
		};

		
		$.each(data.headlines, function() {
			var 
				$li  = $('<li/ class="team_headline">'),
				$div = $('<div class="story" />'),
				$a   = $('<a target="blank"/>');

			$li.text(this.headline);
			$div.text(this.description);
			$a.text('Read More').attr('href', this.links.web.href)

			$ul.append($li);

			$li.append(btnEl);
			$li.append($div)

			$div.append($a);

		});

		revealMore();
		
		

	},
	error : function() {
		li = '<li>Sorry, there was an error retrieving data from the server.</li>';
		ul.append(li)
	}
});




