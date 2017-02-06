$(document).ready(function() {

	function carousel() {
		var owl = $(".aside-banner__carusel");
		owl.owlCarousel({
			items : 1,
			loop : true, 
			autoHeight : false,
			dots : true,
			singleItem : true, 
			pagination: true,  
			navigation : true, 
			autoPlay : 2000,
			dots: true, 
			navigationText: [
			"<i class='fa fa-angle-left'></i>", 
			"<i class='fa fa-angle-right'></i>"
			] 
		}); 
	};      

	carousel();		 	

	function carousel_1() {
		var owl_1 = $(".article-header__carusel");
		owl_1.owlCarousel({
			items : 4,
			loop : true, 
			autoHeight : false,
			dots : true,
			singleItem : false, 
			pagination: true,  
			navigation : true,  
			autoPlay : 2000,
			dots: true, 
			navigationText: [
			"<i class='fa fa-angle-left'></i>", 
			"<i class='fa fa-angle-right'></i>"
			]
		}); 
	};       

	carousel_1();		
	
});

