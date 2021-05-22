"use strict";

import "../../node_modules/remodal/dist/remodal.css";
import "../../node_modules/remodal/dist/remodal-default-theme.css";
var $ = require("jquery");
import "remodal";

//モーダル
$("[data-remodal-id=modal]").remodal();

//ジャンプボタン
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    console.log(href);
    var target = $(href == "#" || href == "" ? "html" : href);
    console.log(target);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

//ローディング
$(window).on("load", function () {
  function loaderClose() {
    $("#js-loader").fadeOut();
  }
  setTimeout(loaderClose, 3000);
});
