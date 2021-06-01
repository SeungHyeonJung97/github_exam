/**
* slideShow.js
*/

$(function(){
    //이동한 이미지의 index 값 저장 (현재 위치)
    var movedIndex = 0;

    // 슬라이드 패널을 움직여주는 함수
    function moveSlide(index){
        // 전달 받은 index 값을 movedIndex에 저장
        movedIndex = index;

        // 슬라이드 이동
        var moveLeft = -(index * 1280); // 왼쪽으로 이동 거리
       $('#slidePanel').animate({'left':moveLeft},'slow');
    }

    //prev 버튼 클릭하면 앞으로 이동
    $('#prevButton').on('click', function(){
        if(movedIndex != 0) // 첫번째가 아니라면
            movedIndex = movedIndex - 1; // 인덱스 값 -1

        moveSlide(movedIndex); // 인덱스 값 전달
    })

    //next 버튼 클릭하면 뒤로 이동
    $('#nextButton').on('click', function(){
        if(movedIndex != 4) // 마지막이 아니라면
            movedIndex = movedIndex + 1; // 인덱스 값 +1

        moveSlide(movedIndex); // 인덱스 값 전달
    });

    // 초기 슬라이더 위치 랜덤하게 지정
    var randomNumber = Math.floor(Math.random() * 5);
    moveSlide(randomNumber);

    // 각 컨트롤 버튼에 대해
    $('.controlButton').each(function(index){
        $(this).hover(
            function(){
                $(this).attr('src','image/controlButton2.png');
            },
            function(){
                $(this).attr('src','image/controlButton1.png');
            }
        );

        // 클릭했을 때 현재 인덱스값을 moveSlide() 함수에게 전달
        $(this).on("click", function(){
            moveSlide(index);
        });
    });

    // 3초마다 자동으로 슬라이드 이동
    setInterval(function(){
        if(movedIndex != 4) // 오른쪽 끝이 아니면
            movedIndex = movedIndex +1; // 오른쪽
        else // 오른쪽이면
            movedIndex = 0; // 처음으로

        moveSlide(movedIndex); // 인덱스 값 전달
    }, 3000);

}); // 종료

