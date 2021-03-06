// init tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// total spins in 100% height
var spins = 2.5;

$( window ).scroll(function(event){
  let lambdaHeight = $(document).height()-$(window).height();
  let deg = window.scrollY * (spins*360/lambdaHeight);
  $("#brand-logo").css({'transform':'rotate(' + deg + 'deg)'});
  // console.log(deg);
});

$(document).ready(function(){
  
  let $fade_alternate = $(".fade-alternate .container>article"),
      offset = "85%";

  // hide elements on page load
  $fade_alternate.css('opacity', 0);
  
  // bind listeners for scroll
  $fade_alternate.each(function(){
    let $t = $(this);
    if ($t.hasClass("flex-row-reverse")){
      $t.waypoint(function() 
        { $t.addClass('fadeInRight animated'); },
        { offset: offset}
      );
    } else {
      $t.waypoint(function() 
        { $t.addClass('fadeInLeft animated'); },
        { offset: offset}
      );
    }
    
  });
});
