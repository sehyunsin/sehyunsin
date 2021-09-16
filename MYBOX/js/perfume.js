$(document).ready(function(){

  $("header button").click(function(){
    $("nav").slideToggle();
  });
  if( $(window).width()<900 ) {
    $("nav a").click(function(){
     $("nav").slideUp();
    });
  }
});