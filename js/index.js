window.innerWidth >= 768 ? desktopViewPrepare() : mobileViewPrepare();
$(window).resize(function () {
  window.innerWidth >= 768 ? desktopViewPrepare() : mobileViewPrepare();
});

function mobileViewPrepare() {
  $('.reload--info').remove();
  $('.body-overflow').remove();
  $("#contact--btn").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
  $("#offer-link").click(function () {
    $('html, body').animate({
      scrollTop: $("#offer").offset().top
    }, 1000);
  });
  $("#portfolio-link").click(function () {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000);
  });
  $("#contact-link").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
  $("section").css({
    position: 'static',
    top: 0
  });
  $("section:last-child").css({
    position: 'relative',
    top: 0
  });
  $(".main").css({
    position: 'static',
    transform: 'translate3d(0, 0, 0)'
  });
}

function desktopViewPrepare() {
  $(".main").onepage_scroll();
  $("#contact--btn").click(function () {
    $(".main").moveTo(4)
  });
  $("#offer-link").click(function () {
    $(".main").moveTo(2)
  });
  $("#portfolio-link").click(function () {
    $(".main").moveTo(3)
  });
  $("#contact-link").click(function () {
    $(".main").moveTo(4)
  });
}

$('.btn-white').click(function () {
  $('.btn-white').hide();
  $('form').addClass('contact--form').removeClass('hidden');
  $('.contact--form').css({
    opacity: 1
  });
  $('.contact>span').addClass('modal-background')
});

$('.close').click(function () {
  $('.contact--form').animate({
    opacity: 0
  }, 300, function () {
    $('form').addClass('hidden');
    $('.contact>span').removeClass('modal-background');
    $('.btn-white').show();
  });
});
