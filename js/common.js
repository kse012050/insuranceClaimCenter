$(document).ready(function(){
    $('*').hasClass('sideMenu') && $('body').css('padding-bottom' , '50px');
    $('*').hasClass('subPage') && $('.subPage').css('padding-top' , $('.subPage header').height() + 50);

    // 메인 메뉴 클릭
    $('[data-event="menu"]').click(function(){
        $('.sideMenu').addClass('active');
    })
    $('[data-event="menuClose"]').click(function(){
        $('.sideMenu').removeClass('active');
    })
    $('.mainPage nav .sideMenu > div > ul > li > a').click(function(e){
        if($(this).attr('href') === '#'){
            e.preventDefault();
            $('.mainPage nav .sideMenu > div > ul > li > ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    })

    // 스크롤 , 터치 이벤트
    $(window).scroll(function(e){
        if($(window).scrollTop() > 0){
            $('.subPage header').addClass('active');
        }else{
            $('.subPage header').removeClass('active')
        }
    })

    console.log($('nav').hasClass('subPage'));
})