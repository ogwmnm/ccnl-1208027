(function($) {

  "use strict";

  $("#js-forward-btn").on("click", function(e) {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $('#main').offset().top
    }, "slow");
  });

})(jQuery);
