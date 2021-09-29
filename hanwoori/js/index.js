$(document).ready(function(){
  $("header li> a").on("focus mouseenter" , function(){
    $("header li nav").stop().slideUp();
    $(this).next().stop().slideDown();
  });
});