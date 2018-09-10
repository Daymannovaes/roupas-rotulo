scroll__ready: function () {
            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
                    setTimeout(f, 1000 / 60)
                }

            function parallax() {
                var scrolltop = window.pageYOffset,
                    scrollThis = $('.js-scroll');

                scrollThis.each(function () {
                    var scrollBy = $(this).data('scroll') / 10;

                    if ($(this).data('direction') === 'down') {
                        var scrollDirection = '+';
                    } else {
                        var scrollDirection = '-';
                    }

                    if ($(this).visible(true)) {

                        $(this).css({
                            "transform": "translateY(" + -scrolltop * scrollBy + "px)",
                            "-webkit-transform": "translate3d(0, " + scrollDirection + scrolltop * scrollBy + "px, 0)",
                            "-moz-transform": "translate3d(0, " + scrollDirection + scrolltop * scrollBy + "px, 0)",
                            "-ms-transform": "translate3d(0, " + scrollDirection + scrolltop * scrollBy + "px, 0)",
                            "-o-transform": "translate3d(0, " + scrollDirection + scrolltop * scrollBy + "px, 0)"
                        });

                    }
                });
            }

            $(window).on('load scroll resize', function () {
                if ($(window).width() > 1080) {
                    requestAnimationFrame(parallax)
                }
            });


    }