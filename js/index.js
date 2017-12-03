window.innerWidth >= 768 ? desktopViewPrepare() : mobileViewPrepare();

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
