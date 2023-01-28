$(document).ready(function() {
	
	function disableScroll () {}

	var dandruff = $('#dandruff');
	var width = $ (window).width ();
	if (width >= 320 || width <= 360) {
		$(dandruff).click(function() {
			$(dandruff).css({
				'display': 'none'
			});
			$('#search').css({
				'display': 'block'
			});
			$('#search').focus();
		});
		$('#search').focusout(function() {
			$('#search').css({
				'display': 'none'
			});
			$(dandruff).css({
				'display': 'inline'
			});
		});
	};

	var menu = $('#menu');
	if (width >= 320 || width <= 360) {
		$(menu).click(function() {
			$('#menu_container').css({
				'display': 'block'
			});
			$('.fixed_container #slash').css({
				'display': 'none'
			});
			$('#menu_wrap').css({
				'display': 'block'
			});
			$(menu).css({
				'display': 'none'
			});
			$('#cross').css({
				'display': 'inline'
			});
			$('#black_bar').css({
				'display': 'none'
			});
			$('body').css({
				'position': 'fixed'
			});
		});
	}
	var cross = $('#cross');
	if (width >= 320 || width <= 360) {
		$(cross).click(function(){
			$('#menu_container').css({
				'display': 'none'
			})
			$('#menu_wrap').css({
				'display': 'none'
			})
			$(menu).css({
				'display': 'inline'
			})
			$('#cross').css({
				'display': 'none'
			})
			$('#black_bar').css({
				'display': 'block'
			})
			$('body').css({
				'position': 'static'
			})
		})
	}
});