var menuToggle = function() {
	var 
		$menu    = $('#menu-toggle'),
		$wrapper = $('#wrapper');

	$menu.on('click',function(e) {
		e.preventDefault();
		$wrapper.toggleClass('active');
	});
}
menuToggle();
