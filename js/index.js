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
