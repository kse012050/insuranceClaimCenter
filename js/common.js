$(document).ready(function(){
    // click event
    clickEvent();
    // scroll event
    $('.subPage').attr('data-scroll') === 'fixed' && scrollEvent();
    
    // 지원서비스 센터
    $('*').hasClass('supportArea') && supportMnue();
    
    
    // 나중에 삭제 미리보기 먼저 보여주기 위해
    $('*').hasClass('step03Area') && $('body');

})

function clickEvent(){
    // menu
    let clickAttr;
    let menuSelector = $('[data-popup]');
    $('[data-click]').click(function(e){
        clickAttr = $(this).attr('data-click');
        clickAttr === 'backPage' && window.history.back();
        ((clickAttr === 'menu') || clickAttr.includes('popup')) && popupClick(clickAttr);
        clickAttr === 'drop' && dropEvent(e ,$(this).attr('data-drop'));
        clickAttr === 'phoneConfirm' && $('[data-'+clickAttr+']').addClass('active');
    })
    
    menuSelector.click(function(){
        $(this).removeClass('active');
        preventScroll();
    })
    menuSelector.children().click((e)=>{
        e.stopPropagation();
    })


    $('[data-close]').click(function(){
        closeSelector = $('[data-popup="'+$(this).attr('data-close')+'"]');
        closeSelector.removeClass('active');
        preventScroll();
    });


    function popupClick(clickAttr){
        $('body').css('overflow','hidden');
        $('[data-popup="'+clickAttr+'"]').addClass('active');
    }

    function preventScroll(){
        console.log($('[data-popup]').hasClass('active'));
        $('[data-popup]').hasClass('active') || $('body').removeAttr('style');
    }


    // drop event
    function dropEvent(e , dropNum){
        let dropSelector = $('[data-click="drop"] > li > *');
        dropNum === 'one' && dropSelector.next().stop().slideUp();
        ($(e.target).prop("tagName") === "BUTTON" || $(e.target).prop("tagName") === "A") && $(e.target).next().stop().slideToggle();
        ($(e.target).prop("tagName") === "BUTTON") && $(e.target).toggleClass('active');
            
    }

    
    $('form button').click((e)=>{
        e.preventDefault();
    })
}

function scrollEvent(){
    $('header + *').css('paddingTop' , $('header').height())
    $(window).scroll(function(){
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active')
    })
}

function supportMnue(){
    let attrName;
    let test = true;
    $('.supportArea nav ul li a').click(function(e){
        e.preventDefault();
        attrName = $(this).attr('href');
        // console.log($('#limit').offset().top);
        // console.log(attrName);
        // console.log($(''+attrName));
        $('html').animate({'scrollTop' : $(attrName).offset().top - 150})
        // console.log($('.supportArea nav').scrollLeft());
        // console.log($('.supportArea nav').width());
        // console.log($('.supportArea nav ul').width() + parseInt($('.supportArea nav ul').css('margin-left')) * 2);
        // console.log('--------------------------------');
    })

    $(window).scroll(function(){
        test = true;
        $('.supportArea section').each(function(){
            if($(this).offset().top - 150> $(window).scrollTop() && test){
                attrName = $(this).attr('id');
                $('.supportArea nav ul li').removeClass('active');
                $('[href="#'+attrName+'"]').parent().addClass('active')
                test = false;
            }
        });
        // console.log(
        //     $(window).scrollTop() / ($(document).height() - $(window).height())
        // );
        
        // let test01 = (($('.supportArea nav ul').width() + parseInt($('.supportArea nav ul').css('margin-left')) * 2) - $('.supportArea nav').width()) * ($(window).scrollTop() / ($(document).height() - $(window).height()))
        // $('.supportArea nav').scrollLeft(test01)
    })
}