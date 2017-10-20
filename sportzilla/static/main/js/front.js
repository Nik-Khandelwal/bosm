$(function()
{
	new WOW().init();
});

$(window).on('load', function() {
  $("body").load("front.html", function(){
    

setTimeout( function(){
	$("#loader").css("display", "none");
 	setTimeout( function(){$("body").css("overflow-y","visible");
	$("html").css("overflow-y","visible");},5000);
	$(".title").css("-webkit-animation-delay", "6s"); 
	$(".title").css("-moz-animation-delay", "6s"); 
	$(".title").css("animation-delay", "6s"); 
	$(".aud").css("-webkit-animation-delay", "5s"); 
	$(".aud").css("-moz-animation-delay", "5s"); 
	$(".aud").css("animation-delay", "5s"); 
	$(".stad").css("-webkit-animation-delay", "4s"); 
	$(".stad").css("-moz-animation-delay", "4s");
	$(".stad").css("animation-delay", "4s");
	$(".lower").css("-webkit-animation-delay", "3s"); 
	$(".lower").css("-moz-animation-delay", "3s"); 
	$(".lower").css("animation-delay", "3s"); 
	$(".upper").css("-webkit-animation-delay", "2s");
	$(".upper").css("-moz-animation-delay", "2s");
	$(".upper").css("animation-delay", "2s");
		
	},2000);

  });
	 
});
