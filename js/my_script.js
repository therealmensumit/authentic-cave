$(window).scroll(function(){
    if( $(this).scrollTop() > 100 ) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed');
    }
});

$(document).ready(function(){
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