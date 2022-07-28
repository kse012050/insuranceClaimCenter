$(document).ready(function(){
    // click event
    clickEvent();

    // scroll event
    $('.subPage').attr('data-scroll') === 'fixed' && scrollEvent();
    
})

function scrollEvent(){
    $('header + *').css('paddingTop' , $('header').height())
    $(window).scroll(function(){
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active')
    })
}

function clickEvent(){
    // menu
    let clickAttr;
    let menuSelector = $('[data-popup]');
    $('[data-click]').click(function(e){
        clickAttr = $(this).attr('data-click');
        ((clickAttr === 'menu') || clickAttr.includes('popup')) && popupClick(clickAttr);
        clickAttr === 'drop' && dropEvent(e ,$(this).attr('data-drop'));
    })
    
    menuSelector.click(function(){
        $(this).removeClass('active');
    })
    menuSelector.children().click((e)=>{
        e.stopPropagation();
    })


    $('[data-close]').click(function(){
        closeSelector = $('[data-popup="'+$(this).attr('data-close')+'"]');
        closeSelector.removeClass('active');
    });


    function popupClick(clickAttr){
        $('[data-popup="'+clickAttr+'"]').addClass('active');
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