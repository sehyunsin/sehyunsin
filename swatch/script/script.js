$(document).ready(function(){
  $("a").click(function(){
    //클릭한 a의 부모 (li)인덱스번호 get
    const n = $(this).parent().index();
    //모든 클래스 삭제
    $("a").removeClass();
    //클릭한 메뉴만 클래스 추가
    $(this).addClass("menuOver "+"m"+(n+1));
  });
  //스크롤 위치에 따라 왼쪽메뉴 활성화
  $(document).scroll(function(){
    const h1 = $(window).height();
    const t1 = $(document).scrollTop();
    const ht = Math.floor(t1/h1);
    
    $("a").removeClass();

    $("li").eq(ht).children().addClass("menuOver "+"m"+(ht+1));

  });



});