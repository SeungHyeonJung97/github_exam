/**
*tabMenu.js
*/

$(function(){
    var $tabContent = $('#tabContent div'); // tabContent box
    // 첫 번째 메뉴 항목 선택되어 있게
    $('#tab li:first-child').addClass('selectedItem');

    $('#tab li').on('click',function(){ // 탭 메뉴 항목 클릭 시
        // 클릭한 탭메뉴 항목 인덱스 알아오기
        var index = $(this).index();

        // 탭메뉴 항목을 선택된 이미지로 변경
        // 모든 탭메뉴 항목에 선택 시 적용된 CSS 효과 제거하고
        $('#tab li').removeClass('selectedItem');
        // 클릭한 항목에만 선택한 CSS 효과 설정 (margin-top:-30px;)
        $(this).addClass('selectedItem');

        // 콘텐츠 이미지 변경
        // content의 모든 div 숨기고
        $tabContent.css('display','none');
        // 클릭한 탭메뉴 항목의 index에 해당되는 div만 보임
        $tabContent.eq(index).css('display', 'block');
    });
});