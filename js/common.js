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

$(document).ready(function () {
  if ($(window).width() > 989) {
    $("#header .gnb .all_menu").on("click", function () {
      $(".site-container").show();
      const siteMenu = $(".site-container .site-box");
      // siteMenu.addClass("init");
      $.each(siteMenu, function () {
        $(this).mouseenter(function () {
          // siteMenu.removeClass("init");
          $(this).addClass("act");
        });
        $(this).mouseleave(function () {
          $(this).removeClass("act");
        });
      });
    });
  }
  $("#header .close-btn").on("click", function () {
    $(".site-container").hide();
  });
});

const depth_tit = $("#header .ham-menu .h-menulist .depth01 .depth01_tit");
const hammenu = $("#header .ham-menu .h-menulist ul");
$(document).ready(function () {
  if ($(window).width() < 989) {
    $("#header .gnb .all_menu").on("click", function () {
      $(".ham-menu").addClass("act");
      $("body").addClass("overflow");
    });
    $("#header .close-btn").on("click", function () {
      $(".ham-menu").removeClass("act");
      $("body").removeClass("overflow");
    });
    $("#header .ham-back").on("click", function () {
      $(".ham-menu").removeClass("act");
      $("body").removeClass("overflow");
    });

    $.each(depth_tit, function (index, item) {
      const siblings = $(this).next();
      const openmenu = $(this).parent().siblings().find(".depth01_tit");
      const openul = $(this).parent().siblings().find("ul");
      $(this).on("click", function (e) {
        $(this).toggleClass("act");
        openmenu.removeClass("act");
        openul.slideUp();
        if (siblings.length > 0) {
          e.preventDefault();
          siblings.stop().slideToggle();
        }
      });
    });
  }
});

// footer
$("#footer .family_site").on("click", function () {
  $("#footer .family_site").toggleClass("on");
  $("#footer .family_menu").stop().slideToggle();
});
