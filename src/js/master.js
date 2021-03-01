import "./vendor/bs4";
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function (event) {
  //   console.log(999);
  utils.initModule();
});

var utils = (function (params) {
  function initModule() {
    initImageModal();
    initLinkLog();
  }
  function initLinkLog() {
    $(document).on("click", "a", function (e) {
      e.preventDefault();
      console.log(e.target);
    });
  }

  function initImageModal() {
    var $popModal = $("#popModal");
    if ($popModal) {
      // check page for element
      $(".js-pop-modal").click(function (params) {
        var img = $(this).attr("src");

        $popModal.find(".js-pop-target").attr("src", img);
        $popModal.modal("toggle");
      });
    }
  }

  return {
    initModule: initModule,
  };
})();
