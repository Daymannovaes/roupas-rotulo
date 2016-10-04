$(document).on('ready', function() {
    $('.slider-for').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').on('init', function() {
      $(this).addClass('flex');
    }).slick({
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      focusOnSelect: true,
      asNavFor: '.slider-for'
    });
});