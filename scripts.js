jQuery(document).ready(function(){


    jQuery('.has-submenu').mouseenter(function(){
      jQuery(this).addClass('open');
      jQuery(this).find('.submenu').fadeIn();

    });

    jQuery('.has-submenu').mouseleave(function(){
      var child_elem = jQuery(this).find('.submenu');
      jQuery(this).removeClass('open');
      setTimeout(function(){
        if (!jQuery(this).hasClass('open')) {
          child_elem.fadeOut();
        }
      },1000);

  });


  jQuery('.submenu').mouseenter(function(){
  jQuery(this).parents('.has-submenu').addClass('open');
  });

  jQuery('.submenu').mouseleave(function(){
    var child_elem = $(this);
    jQuery(this).parents('.has-submenu').removeClass('open');

    setTimeout(function(){
      if (!jQuery(this).parents('.has-submenu').hasClass('open')) {
        child_elem.fadeOut();
      }
    },1000);

  });
});
