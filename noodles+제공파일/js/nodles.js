//시작
$(document).ready(function(){
  //상단 햄버거 메뉴
  $("header button").click(function(){
    if($(this).text()=="menu"){
      $(this).text("close");//set설정
      $("nav").stop().slideDown("slow");
    }else{
      $(this).text("menu");//set설정
      $("nav").stop().slideUp("slow");
    }
  });
  //부가 메뉴 클릭
  $("nav a").click(function(){
    $("header button").text("menu");
    $("nav").stop().slideUp("slow");
  });

  //왼쪽 이동 슬라이드
  var slide = setInterval(moveleft,2500);
  function moveleft(){
    $("#slide").stop().animate({
      left:"-100%"
    },"slow",function(){
      $(this).append($(this).children().first());
      $(this).css("left",0);
    });
  }
  //스크롤 이벤트
  $(document).scroll(function(){
    if( $(document).scrollTop()>300 ){
      $("main>figure").addClass("active");
    }else{
      $("main>figure").removeClass("active");
    }
  });
});//끝