//$(document).ready(function(){
	$("#mycarousel").carousel({interval: 2000});
	$("#carousel-pause").click(function(){
		$("#mycarousel").carousel('pause');
		//alert("pausa");
	});
	$("#carousel-play").click(function(){
		$("#mycarousel").carousel('cycle');
		//alert("play");
	});
//});