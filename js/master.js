import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"; // this should be atomized, however single imports do not work with ie11
import $ from "jquery";

document.addEventListener("DOMContentLoaded", function (event) {
  //   console.log(999);
  utils.initImageModal();
});

var utils = (function (params) {
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
    initImageModal: initImageModal,
  };
})();
