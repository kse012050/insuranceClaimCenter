$(document).ready(function(){
    $('*').hasClass('sideMenu') && $('body').css('padding-bottom' , '50px');
    // $('*').hasClass('subPage') && $('.subPage').css('padding-top' , $('.subPage header').height() + 50);

    // 메인 메뉴 클릭
    $('[data-event="menu"]').click(function(){
        $('.sideMenu').addClass('active');
        $('.menuArea').addClass('active');
    })
    $('[data-event="menuClose"]').click(function(){
        $('.sideMenu').removeClass('active');
        $('.menuArea').removeClass('active');
    })
    $('.mainPage nav .sideMenu > div > ul > li > a').click(function(e){
        if($(this).attr('href') === '#'){
            e.preventDefault();
            $('.mainPage nav .sideMenu > div > ul > li > ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    })
    $('.sideMenu , .menuArea').click(function(){
        $(this).removeClass('active');
    })
    $('.sideMenu > * , .menuArea > *').click(function(e){
        e.stopPropagation();
    })

    // 스크롤 , 터치 이벤트
    if($('.subPage').attr('data-event') === 'scroll'){
        $(window).scroll(function(e){
            if($(window).scrollTop() > 0){
                $('.subPage header').addClass('active');
            }else{
                $('.subPage header').removeClass('active')
            }
        })
    }

    // 팝업 열고 닫기
    $('[data-event*="popup"]').click(function(e){
        e.preventDefault();
        let attrName = $(this).attr('data-event');
        $('[data-event="'+attrName+'Open"]').addClass('active');
        console.log(2);
        $('[data-event="'+attrName+'Close"]').click(function(e){
            e.preventDefault();
            $('[data-event="'+attrName+'Open"]').removeClass('active');
        })
    })


    // 드랍박스
    $('[data-event="drop"]').click(function(e){
        e.preventDefault();
        $('[data-event="drop"]').removeClass('active');
        $(this).addClass('active');
        $('[data-event="drop"] + *').stop().slideUp();
        $(this).next().stop().slideDown();
    })

    $('form button').click(function(e){
        e.preventDefault();
    })
    
})