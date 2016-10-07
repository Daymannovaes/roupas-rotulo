$(document).on('ready', function() {
  $('.slider-for').slick({
    lazyLoad: 'progressive',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 10 * 1000
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

  function checkImageContainer() {
    $('.slick-slide').each(function() {
      var fillClass = ($(this).height() < $(this).width())
        ? 'fillheight'
        : 'fillwidth';
      var removeClass = (fillClass === 'fillwidth')
        ? 'fillheight'
        : 'fillwidth';
      $(this).find('img').addClass(fillClass);
      $(this).find('img').removeClass(removeClass);
    });
  }
  checkImageContainer();
});