$(document).ready(function(){
	
	/*상단:하위메뉴*/
	$("header").mouseenter(function(){
		$(this).children("div").animate({height:"350px"});
		$(this).find("nav nav").slideDown();
	});
	$("header").mouseleave(function(){
		$(this).children("div").animate({height:"100px"});
		$(this).find("nav nav").slideUp();
	});
	
	/*이미지 슬라이드*/
	setInterval(slide, 2000);
	var x = $("#sliding>div");
	function slide(){		
		if(x.position().left==-2200){
			x.append('<img src="images/slide1.jpg" alt="1번이미지">');
			x.animate({left:"-=1100px"},function(){
				x.css("left",0);
				x.children().last().remove();
			});
		}
		else {x.animate({left:"-=1100px"});}
	}
	
	/*팝업배너*/
	$("#partner>img").click(function(){
		$("#popup").fadeIn();
	});
	$("#popup>button").click(function(){
		$("#popup").fadeOut();
	});
});