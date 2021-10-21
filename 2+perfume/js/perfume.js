$(document).ready(function(){
	
	//화면 맨아래 오른쪽 'top'화살표 오른쪽 위치
	const w1 = Math.floor($(window).width());
	const w2 = Math.floor($("#layout").width());
	const w3 = ((w1 - w2) / 2)+10;
	console.log(w1 + " , " + w2 + " , " + w3);
	$("#arrTop").css("right", w3+"px");	
	
	
	//상단 햄버거 아이콘 클릭:시작
	let i = 0;
	$("header button").click(function(){
		i++;
		if(i==1){
			$("nav").stop().slideDown();
			$(this).text("X");
		}else{
			$("nav").stop().slideUp();//i=> 2
			$(this).html("&#x2630;");
			i=0;
		}		
	});//상단 햄버거 아이콘 클릭:끝
	//상단 메뉴 항목 클릭:시작
	$("nav a").click(function(){
		$("nav").stop().slideUp();
		$("header button").html("&#x2630;");
		i=0;
	});//상단 메뉴 항목 클릭:끝	
	
	
});////////////////////end

