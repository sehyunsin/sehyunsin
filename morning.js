$(document).ready(function(){
	//접속테스트
	console.log("연결됨");
	
	//상단 메인메뉴에 (마우스를 갖다 댈때) + (엔터를 칠때)
	$("header li>a").on("mouseenter click",function(){  		
		$("header>ul").addClass("active");
		$("header nav").stop().slideDown(500);
	});
	
	//상단 메뉴영역(ul)에서 마우스가 벗어 날때
	$("header>ul").mouseleave(function(){
		$("header>ul").removeClass("active");
		$("header nav").stop().slideUp(300);
	});
	
	//메뉴에서 마지막 서브메뉴가 포커스를 잃을때
	$("header .last").blur(function(){
		$("header>ul").removeClass("active");
		$("header nav").stop().slideUp(300);
	});
	
	//브라우저 넓이가 작을 경우 새 넓이값 슬라이드에 반영
	let width_s = "";
	let top_h2 = 0;
	let left_h2 = 0;
	if( $(window).width() < 1100 ){
		width_s = "-100vw";
		if( $ (window).width() > 500){
			//console.log("1100보다 작고 500보다 크다");
			const x = Math.round ( $("#slide img").width() );
			const y = Math.round ( $("#slide img").height() );
			console.log(x + y)
			const z1 = Math.round ( $("header + section > h2").width() );
			const z2 = Math.round ( $("header + section > h2").height() );
			console.log(" 흰영역 넓이는 " + z1 + ", 높이는" + z2 );
			const m_top = Math.round( (y - z2) /2 ); //흰색영역 위쪽 바깥 여백값
			console.log(m_top);
			const m_left = Math.round( (x - z1) /2 ); //흰색영역 왼쪽 바깥 여백값
			console.log(m_left); 

			//실제로 값 부여
			$("header + section > h2").css({"top" : m_top + "px" , "left" : m_left + "px"});
		}
	} else {
		width_s = "-1100px";
	
	}
	 console.log(width_s);
	
	
	//슬라이드 수동(자동으로 왼쪽이동)
	const slide = setInterval(goLeft , 2000);	
	function goLeft(){
		$("#slide").stop().animate({left:width_s },1000,function(){
			$("#slide").append( $("#slide").children().first()  );
			$("#slide").css("left" , 0);
		});
	};

	//공지사항 팝업 보이기
	$("#notice li:first-child a").click(function(){
		$("#popup").show();
		$("#popup button").focus();
	});	
	//공지 닫기 누르면 닫기 
	$("#popup > button").click(function(){
		$("#popup").hide();
	});

	//공지사항 팝업 보이기 (시간차 모드)
	//$("#notice li:first-child a").click(function(){
		//$("#popup").fadeIn(800);
	//});	
	//공지 닫기 누르면 닫기  (시간차 모드)
	//$("#popup > button").click(function(){
		//$("#popup").fadeOut(800);
	//});
	
});//끝부분












