$().ready(function() {

    // **параллак
    // библиотека: https://matthew.wagerfield.com/parallax/
    $(".parallax").each(function() {
        var $parallax = $(this);
        new Parallax($parallax[0], {
          selector: ".parallax-layer"
        });
    });
//scratch
    $('.bonus').on('mouseenter', function (e) {
        $('body').addClass('animate')
    });
    $('.bonus').on('mouseleave', function (e) {
        $('body').removeClass('animate')
    })

    //
    $('.modal-terms-text').mCustomScrollbar();



});
