$(document).ready(function(){
	//접속테스트
	console.log("연결됨");
	
	//상단 메인메뉴에 마우스를 갖다 댈때
	$("header li>a").mouseenter(function(){
		//$("header>ul").stop().animate({height : "200px"},800);
		$("header>ul").addClass("active");
		$("header nav").stop().slideDown(500);
	});
    //상단메뉴영역(ul)에서 마우스가 벗어 날떄 
    $("header>ul").mouseleave(function(){
        $("header>ul").removeClass("active");
		$("header nav").stop().slideUp(300);
    });
});