$(document).ready(function(){
	$("#bar").click(function(){
		$("#menu").animate({
			left:"0px"
		});
		$("#moda").animate({
			left:"258px"
		});
	})
	$("#x").click(function(){
		$("#menu").animate({
			left: "-258px"
		});
	$("#moda").animate({
			left:"0px"
		});
	})
});