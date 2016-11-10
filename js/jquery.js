

$(document).ready(function(){

	$("#cuadro").click(function(){
		$("#cuadro").fadeOut("slow");
	});
	
	$("#buscador").dblclick(function() {
		$(".cajita").css("background-color" , "white");
	});

	$("#muchacha").click(function(){
		$(".morado").css("background-color", "orange");
	});

	$("#flor").click(function(){

		$("#flor").css("height", 600);
		$("#flor").css("width" , 1000);
	});

	$("#flores").mouseenter(function(){
		$("#flores").hover();
	});
	


});


		
	

