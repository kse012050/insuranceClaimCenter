$(document).ready(function(){
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
})