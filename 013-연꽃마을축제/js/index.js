$(document).ready(function(){
	
	//왼쪽 메뉴 호버
	$("nav li").hover(function(){		
		$(this).children("nav").stop().slideDown();
	} , function(){		
		$(this).children("nav").stop().slideUp();
	}); //메뉴 호버 끝
	
	//페이스 슬라이드 (자동)
	const x = setInterval( y, 2800);
	let i = 3;
	function y(){
		i--;
		if(i==0){
			$("#slide a").fadeIn();
			i=3;
		} else {
			$("#slide a").eq(i).fadeOut();
		}		
	}//슬라이드 끝
	
	//공지사항 첫번째 텍스트 클릭시 팝업 모달
	$(".pop").click(function(){
		$("#popup").fadeIn();
	});
	
	//팝업 모달 '닫기'버튼 클릭시
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
		
});////end


