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
		var ul = $('.teams');
		$.each(data.headlines, function() {
			var li = $('<li/>').text(this.headline);
			ul.append(li);
			console.log('Headlines ->', this)

			$.each(this.links, function() {
				
				console.log('Links ->', this)
			});

		});
		console.log(data);
	},
	error : function() {
		li = '<li>Sorry, there was an error retrieving data from the server.</li>';
		ul.append(li)
	}
});