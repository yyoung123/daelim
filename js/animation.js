// animation.js

$(window).ready(function () {
  // as();
  $(window).scroll(function (e) {
    var s = $(window).scrollTop(); // 현재 window scrollTop
    if (s > 50) {
      as();
    }
  });
  function as() {
    $(".img-ani").each(function () {
      var topOfWindow = $(window).scrollTop();
      var imagePos = $(this).offset().top;
      if (topOfWindow + 800 > imagePos) {
        $(this).addClass("img-aniload");
        $(".section07 .bath_img").addClass("move");
      }
    });
  }
  as_remove();
  function as_remove() {
    $(".img-ani").removeClass("img-aniload");
  }
});
