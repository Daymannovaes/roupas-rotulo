$(document).on('ready', function() {
  $('.slider-for').on('lazyLoaded', checkImageContainer).slick({
    lazyLoad: 'progressive',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').on('init', function() {
    $(this).addClass('flex');
  }).slick({
    lazyLoad: 'progressive',
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.slider-for'
  });

  var _timeout;
  window.addEventListener('resize', function() {
    clearTimeout(_timeout);
    _timeout = setTimeout(checkImageContainer, 50);
  });

  var fillClass, removeClass;
  function checkImageContainer() {
    $('.slick-slide').each(function() {
      var container = $(this);
      var img = container.find('img');

      // container ratio and image ratio
      var cratio = container.height() / container.width();
      var iratio = img.height() / img.width();

      fillClass = (cratio > iratio)
        ? 'fillwidth'
        : 'fillheight';

      removeClass = (fillClass === 'fillwidth')
        ? 'fillheight'
        : 'fillwidth';

      img.addClass(fillClass);
      img.removeClass(removeClass);
    });
  }
  checkImageContainer();
});