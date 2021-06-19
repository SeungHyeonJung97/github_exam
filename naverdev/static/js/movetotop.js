/**
* movetotop.js
*/

$(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#moveToTop').fadeIn();
            } else {
                $('#moveToTop').fadeOut();
            }
        });

        $("#moveToTop").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });