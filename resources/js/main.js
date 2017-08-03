$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

/* Hide navigation */

var userScroll = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - userScroll > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      userScroll = scrollTop;
    } else if (userScroll - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      userScroll = scrollTop;
    }
  });
