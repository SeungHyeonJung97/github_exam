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


    /* $('.controls .next a').on("click",function(){
        slider.goToNextSlide();
        slider.getCurrentSlide()
        $('.pager').children('div')
        return false;
    }); */
}); //$(function() 끝
