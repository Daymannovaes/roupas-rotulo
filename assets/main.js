$(document).on('ready', function() {
    $('.slider-for').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    });

    $('.slider-nav').on('init', function() {
      $(this).addClass('flex');
    }).slick({
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      focusOnSelect: true
    });

    return;

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 999,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
});