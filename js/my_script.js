$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    $('.banner h5 a').click(function() {
        $('html, body').animate({
            scrollTop: $('.our-services').offset().top - 100
        }, 500)
    });
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();