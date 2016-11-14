(function($) {

  "use strict";

  $("#js-forward-btn").on("click", function() {
    $("html, body").animate({
        scrollTop: $('#main').offset().top
    }, "slow");
  });

})(jQuery);
