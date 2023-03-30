//헤더고정
$(window).scroll(function () {
  var s = $(window).scrollTop();
  if (s > 0) {
    $(".gnb").addClass("ban_fixed");
    $("#container").addClass("fixed");
  } else {
    $(".gnb").removeClass("ban_fixed");
    $("#container").removeClass("fixed");
  }
});

// 메뉴바
$(document).ready(function () {
  const tabMenu = $("#header .menu .menudepth");
  const tabContents = $("#header .menu  >ul li .submenu_wrap");

  $.each(tabMenu, function (index, item) {
    $(this).mouseenter(function () {
      // tabContents.removeClass("on");
      tabContents.eq(index).addClass("on");
    });
    $(this).mouseleave(function () {
      tabContents.removeClass("on");
    });
  });
});

const btnAll = $(".btn-all");
const gnb = $("#gnb");
// btnAll.on("click", function (e) {
//   e.preventDefault();
//   const icon = $(this).find(".material-icons");
//   //console.log(icon.text());
//   // if (icon.text() === "menu") {
//   //   icon.text("close");
//   //   console.log("close");
//   // } else {
//   //   icon.text("menu");
//   //   console.log("menu");
//   // }
//   if (gnb.hasClass("on")) {
//     icon.text("menu");
//   } else {
//     icon.text("close");
//   }
//   gnb.toggleClass("on");
// });

//js에서 크기를 제어해야한다.

$(window).on("resize", function () {
  console.log($(window).width());
  const w = $(window).outerWidth();
  console.log(w);
  if (w > 1280) {
    $("html").removeClass("m").addClass("pc");
    $("#gnb .depth02").removeAttr("style");
    $("#gnb").removeClass("on");
    const icon = $(".btn-all .material-icons");
    icon.text("menu");
    // gnb에 on을 제거하고 btn-all안에 있는 material-icons의 텍스트 menu로 바꾸기...
  } else {
    $("html").removeClass("pc").addClass("m");
  }
});

const depth01 = $(".gnb .depth01");
depth01.on("click", function (e) {
  if ($("html").hasClass("m")) {
    const depth02 = $(this).next();
    const siblings = $(this).parent().siblings().find(".depth02");
    const siblingsDepth01 = $(this).parent().siblings().find(".depth01");
    $(this).toggleClass("on");
    siblingsDepth01.removeClass("on");
    siblings.slideUp();
    if (depth02.length > 0) {
      e.preventDefault();
      depth02.stop().slideToggle();
    }
  }
});
$(window).trigger("resize");
$("#footer .family_site").click(function () {
  $("#footer .family_site").toggleClass("on");
  $("#footer .family_menu").stop().slideToggle();
});
