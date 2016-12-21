$(document).on('ready', function() {
  var total = $('section img').length + $('section .section-image').length;
  var loaded = 0;
  var imgLoaded = 0;
  var progress = 0;
  var $progress = $('.loading p');
  var $hr = $('.loading hr');

  $('section').imagesLoaded({ background: '.section-image' })
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
    $('.loading').hide();
    $('body').removeClass('overflow');
    $('header').show();
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress(function() {
    imgLoaded++;

    console.log('image loaded');
    console.log('lacking ', (total-loaded));
    console.log('imgLoaded/total ', (imgLoaded/total));
    console.log('incremented in ', (imgLoaded/total) * (total-loaded));

    loaded += (imgLoaded/total) * (total-loaded);

    clearTimeout(progressTimeout);
    timeoutCount = timeoutCount < 4 ? 4 : timeoutCount;
    progessInterval();

    onProgress();
  });

  var time = 500;
  var timeoutCount = 1;
  var progressTimeout;
  var incrementLoaded = 0.5;
  function progessInterval() {
    if(progress >= 50) {
      time = 700;
      incrementLoaded = 0.4;
    }
    if(progress >= 75) {
      timeoutCount = timeoutCount < 4 ? 4 : timeoutCount;
      timeoutCount = timeoutCount > 10 ? 10 : timeoutCount;
      incrementLoaded = 0.2;
    }
    if(progress >= 90) {
      timeoutCount = timeoutCount < 6 ? 6 : timeoutCount;
      timeoutCount = timeoutCount > 10 ? 10 : timeoutCount;
      incrementLoaded = 0.1;
    }
    if(progress >= 95) {
      timeoutCount = 10;
      incrementLoaded = 0.01;
    }
    if(progress >= 99) {
      return;
    }

    console.log('timeout is', time * timeoutCount);

    progressTimeout = setTimeout(function() {
      console.log('incremented in ', incrementLoaded);
      loaded += incrementLoaded;

      onProgress();
      progessInterval();
    }, time * timeoutCount);

    timeoutCount++;
  }
  progessInterval();

  function onProgress() {
    progress = ((loaded/total) * 100);
    progress = parseInt(progress);

    $progress.text('Carregando: ' + progress + '%');
    $hr.css('width', 'calc(' + progress + '% - 42px)')
  }
});