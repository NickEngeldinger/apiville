var menuToggle = function() {
	var 
		$menuBtn = $('#menu-toggle'),
		$sidebar = $('#sidebar-wrapper');

	$menuBtn.on('click',function(e) {
		e.preventDefault();
		//$wrapper.toggleClass('active');
		$sidebar.slideToggle('slow');
	});
};
menuToggle();

// LOAD NAV SIDEBAR
$('#sidebar-wrapper').load('fragments/nav.html');
