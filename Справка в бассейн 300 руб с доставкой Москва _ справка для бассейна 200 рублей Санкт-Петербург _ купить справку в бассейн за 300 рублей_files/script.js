$(document).ready(function() {
	$("#call_tel_form").hide();
	$('#callback').click(function(e) {
		e.preventDefault();
		$("#call_tel_form").fadeIn();
		$('#zakr_mod').click(function(e) {
			$("#call_tel_form").hide();
		});
	});
	
	jQuery(function(){ $(".phones_input").mask("+7 (999) 999-9999"); });
	
	jQuery(function(){ $("#phone").mask("+7 (999) 999-9999"); });
	
	$(".image_big").click(function(){
	
	  	var img = $(this);	
		
		var src = img.attr('src'); 
		
		$("body").append("<div class='popup'>"+"<div class='popup_bg'></div>"+"<img src="+src+" class='popup_img' />"+ "</div>"); 
		$(".popup").fadeIn(800); 
		$(".popup_img").click(function(){
		
			$(".popup").fadeOut(800);
			
			/*setTimeout(function() {
			  $(".popup").remove(); 
			}, 800);*/
		});
	});

})();