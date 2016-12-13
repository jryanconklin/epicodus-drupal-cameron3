(function($) {
  $.fn.ajax_time = function() {
    $('#ajax-time').hide();
    setTimeout(function() {
      $('#ajax-display').fadeOut().html("").show();
      $('#ajax-time').fadeIn();
    }, 5000)
  }
})(jQuery);
