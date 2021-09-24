$(document).ready(function(){		
	
	//첫화면 페이드 슬라이드
	const slide = setInterval( fade , 2000 );
	let i = 3;
	function fade(){
		i--;
		if( i==0 ){
			$("#index img").stop().fadeIn(1000);
			i=3;
		}
		else {
			$("#index img").eq(i).stop().fadeOut(1000);
		}
	}
	
	
});///////end