$(document).ready(function() {
	var status = 0;
	$("#menu-icon").click(function() {
		if (status == 0) {
			$("#header-nav").animate({
				left: '0'
			});
			$("#shadow-bg").css("display", "inline-block");
			status = 1;
		} else {
			$("#header-nav").animate({
				left: '-100%'
			});
			$("#shadow-bg").css("display", "none");
			status = 0;
		}
	});
	$("#shadow-bg").click(function() {
		if (status == 0) {
			$("#header-nav").animate({
				left: '0'
			});
			$(this).css("display", "inline-block");
			status = 1;
		} else {
			$("#header-nav").animate({
				left: '-100%'
			});
			$(this).css("display", "none").delay(1000);
			status = 0;
		}
	});
});	
