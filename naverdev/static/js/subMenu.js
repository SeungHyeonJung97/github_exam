/**
* subMenu.js
*/

$(function(){ // subMenu function() start
    var toggle = false;
    nav_index = 1;
    var w_btn = "";
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
            var children = document.getElementById(''+sub_index_name).childNodes; // 자식 요소의 속성에 접근하기 위한 변수 생성
            if(submenu_count <= 4){ // 자식 요소가 4개 이하일 경우 submenu 의 margin-left 를 재구성 해주기 위한 조건문
                var default_value = 50 - (submenu_count * 5); // margin-left 를 재구성 해주기 위한 default_value
                $('#'+sub_index_name).children('div:nth-child(1)').css("margin-left", default_value + '%')
                for(var i=1;i<submenu_count;i++){ // 자식 요소의 개수만큼 margin-left 재구성
                $('#'+sub_index_name).children('div:nth-child('+(i+1)+')').css("margin-left", + (default_value + (i*12)) +'%')
                }
            }
            $('.subMenuBox').css('display','none'); // sub_menu가 켜져있을 시 먼저 close
            $('#'+sub_index_name).css('display','block'); // sub_menu open
            }
        }, function(){
            $('#'+sub_index_name).mouseleave(function(){
                $('.subMenuBox').css('display','none'); // sub_menu close
            });
    });

    $('#nav_toggle').click(function(){
        if(!toggle){
            $('#react-subMenu').css('display','block');
            $('#react-subMenuItem'+nav_index).css('display','block');
            toggle = true;
        }else{
            $('#react-subMenu').css('display','none');
            toggle = false;
        }
    });

    $('.btn_prev').click(function(){
        w_btn = 'prev';
        showSubMenu(nav_index, w_btn)
    });

    $('.btn_next').click(function(){
        w_btn = 'next';
        showSubMenu(nav_index, w_btn)
    });

    function showSubMenu(nav_index, w_btn){
        $('#react-subMenuItem'+nav_index).css('display','none');
        if(w_btn == 'prev'){
            this.nav_index = this.nav_index - 1;
            if(this.nav_index < 1){
                this.nav_index = 6;
            }
            $('#react-subMenuItem'+this.nav_index).css('display','block');
        }else{
            this.nav_index = this.nav_index + 1;
            if(this.nav_index > 6){
                this.nav_index = 1;
            }
            $('#react-subMenuItem'+this.nav_index).css('display','block');
        }
    }
}); //$(function() 끝

