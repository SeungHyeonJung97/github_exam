/**
* subMenu.js
*/

$(function(){ // subMenu function() start
   $('#nav_index li').hover(function(){ // 각 menuItem 이 hover 이벤트를 받을 경우
        index = $('#nav_index li').index(this); // hover 이벤트가 발생한 index 를 찾는다.
        if(index <= 5 && index > 0){ // Products ~ Support 까지의 hover 인덱스만 필요하므로 필터링
            sub_index = index;
            switch(sub_index){ // index에 맞는 class ID 매칭
                case 1 : sub_index_name = "ProductsBox"
                         submenu_count = document.getElementById(''+sub_index_name).childElementCount // 각 index 에 맞는 class ID의 자식 요소의 갯수를 구함
                break
                case 2 : sub_index_name = "DocumentsBox";
                        submenu_count = document.getElementById(''+sub_index_name).childElementCount;
                break
                case 3 : sub_index_name = "ApplicationBox";
                        submenu_count = document.getElementById(''+sub_index_name).childElementCount;
                break
                case 4 : sub_index_name = "NAVER_D2_Box";
                        submenu_count = document.getElementById(''+sub_index_name).childElementCount;
                break
                case 5 : sub_index_name = "Support_Box";
                        submenu_count = document.getElementById(''+sub_index_name).childElementCount;
                break

                default : break
            }
            var children = document.getElementById(''+sub_index_name).childNodes // 자식 요소의 속성에 접근하기 위한 변수 생성
            if(submenu_count <= 4){ // 자식 요소가 4개 이하일 경우 submenu 의 margin-left 를 재구성 해주기 위한 조건문
                var default_value = 50 - (submenu_count * 5); // margin-left 를 재구성 해주기 위한 default_value
                $('#'+sub_index_name).children('div:nth-child(1)').css("margin-left", default_value + '%')
                for(var i=1;i<submenu_count;i++){ // 자식 요소의 개수만큼 margin-left 재구성
                $('#'+sub_index_name).children('div:nth-child('+(i+1)+')').css("margin-left", + (default_value + (i*10)) +'%')
                }
            }
            $('#'+sub_index_name).css('visibility','visible'); // sub_menu open
            }
        }, function(){
            $('#'+sub_index_name).css('visibility','hidden'); // sub_menu close
        });
}); //$(function() 끝