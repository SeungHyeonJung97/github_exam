/**
* subMenu.js
*/

$(function(){ // slider function() start
    var current = 0;
    // var children = document.getElementById('pager').childNodes

    slider = $('.slider').bxSlider({
        pagerCustom: '.pager',
        nextSelector : '.slider_wrap .controls .next',
        prevSelector : '.slider_wrap .controls .prev',
        auto: true
    });

}); //$(function() 끝
