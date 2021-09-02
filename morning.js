$(document).ready(function(){
	//접속테스트
	console.log("연결됨");
	
	//상단 메인메뉴에 마우스를 갖다 댈때 + (엔터 칠때) on()=한가지 경우가 아닌 이벤트일시 추가
	$("header li>a").on("mouseenter click",function(){ 
		//$("header>ul").stop().animate({height : "200px"},800);
		$("header>ul").addClass("active");
		$("header nav").stop().slideDown(500);
	});
    //상단메뉴영역(ul)에서 마우스가 벗어 날떄 
    $("header>ul").mouseleave(function(){
        $("header>ul").removeClass("active");
		$("header nav").stop().slideUp(300);
    });
	//메뉴에서 마지막 서브메뉴가 포커스를 잃을때
	$("header .last").blur(function(){
		$("header>ul").removeClass("active");
		$("header>ul").stop().slideUp(300);
	});

	//슬라이드 수동(클릭 왼쪽이동)
	//$("#slide").click(function(){
		//$(this).stop().animate({left:"-1100px"},"slow",function(){
			//$(this).append( $(this).children().first() );
			//$(this).css("left" , 0);
		//});
	//});
	
	//슬라이드 자동 왼쪽 이동
	const slide = setInterval(goLeft,2000);
	function goLeft(){
			$("#slide").stop().animate({left:"-1100px"},1000,function(){
				$("#slide").append( $("#slide").children().first() );
				$("#slide").css("left" , 0);
			});		
	};
});

