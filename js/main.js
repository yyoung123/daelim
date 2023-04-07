// section01
$(".section01 .txt-wrap").addClass("active");
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  //자동 스크를링
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  on: {
    slideChange: function (index, item) {
      $(".section01 .slide-nav li").removeClass("on");
      $(".section01 .slide-nav li").eq(this.realIndex).addClass("on");
    },
  },
});
const slideNav = $(".section01 .slide-nav li");
$.each(slideNav, function (index, item) {
  $(this).click(function () {
    swiper.slideToLoop(index);
  });
});
//section02 슬라이드
if ($(window).width() < 990) {
  $(".section02 .contents-wrap ul").addClass("swiper-wrapper");
  $(".section02 .contents-wrap ul li").addClass("swiper-slide");
  $(".section02 .contents-wrap").append('<div class="swiper-button-next bt_next"></div><div class="swiper-button-prev bt_prev"></div>');
  const bath_slide = new Swiper(".section02 .contents-wrap", {
    speed: 1000,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      430: {
        slidesPerView: 2,
        spaceBetween: 10,
        simulateTouch: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
        simulateTouch: true,
      },
    },
    navigation: {
      nextEl: ".section02 .swiper-button-next",
      prevEl: ".section02 .swiper-button-prev",
    },
  });
}

// section03
$("#wrap .section03").waypoint(
  function () {
    $("#wrap #section03 .line_wrap").addClass("on");
  },
  { offset: "10%" }
);

const slideLis = $(".section03 .line_wrap li");
$.each(slideLis, function (index, item) {
  slideLis.mouseenter(function () {
    slideLis.removeClass("act");
    $(this).addClass("act");
  });
});
const moveLis = $(".section03 .line_wrap li");
const moveDiv = $(".section03 .smt_box");
$.each(moveLis, function (index, item) {
  $(this).mouseenter(function () {
    let idx = $(this).index();
    $(".section03 .contents-wrap").css({ background: "url(../images/main/sec02_bg_" + idx + ".png)", "background-repeat": "no-repeat", "background-position": "center center" });
    moveDiv.removeClass("on");
    moveDiv.eq(index).addClass("on");
  });
});
// section03 mobile
const tabList = $(".section03 .m_slide li");
const contList = $(".section03 .m_slide .tab_wrap");
$.each(tabList, function (index, item) {
  $(this).click(function () {
    tabList.removeClass("on");
    $(this).addClass("on");
    contList.removeClass("on");
    contList.eq(index).addClass("on");
  });
});

// section04
window.onload = function () {
  var Controller = new ScrollMagic.Controller();

  const wH = $(window).height() / 2;
  const imgH = $(".section04 .sec-cat").innerHeight();
  const imgBxHeigt = $(".section04").innerHeight() - imgH;
  var scene = new ScrollMagic.Scene({ triggerElement: ".section04", offset: wH, duration: imgBxHeigt }).setPin(".section04 .sec-cat").addTo(Controller);
};

$.each($(".section05 .contents-wrap ul li"), function (index, item) {
  $(this).mouseenter(function () {
    $(".section05 .contents-wrap .land_img").removeClass("on");
    $(".section05 .contents-wrap .land_img").eq(index, item).addClass("on");
  });
});

$.each($(".section06 .magzine_list li"), function (index, item) {
  $(this).mouseenter(function () {
    $(".section06 .magzine_list li").removeClass("on");
    $(".section06 .magzine_list li").eq(index, item).addClass("on");
  });
});

// animation.js
$(window).ready(function () {
  as();
  $(window).scroll(function (e) {
    var s = $(window).scrollTop(); // 현재 window scrollTop
    if (s > 50) {
      as();
    }
  });
  function as() {
    $(".img-ani").each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 800) {
        $(this).addClass("img-aniload");
      }
    });
  }
});
