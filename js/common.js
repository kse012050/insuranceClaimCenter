$(document).ready(function(){
    // click event
    clickEvent();

    // scroll event
    $('.subPage02').attr('data-scroll') === 'fixed' && scrollEvent();
    
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
    let menuSelector = $('[data-menu]');
    $('[data-click]').click(function(e){
        clickAttr = $(this).attr('data-click');
        clickAttr === 'menu' && clickEvent();
        clickAttr === 'drop' && dropEvent(e ,$(this).attr('data-drop'));
    })
    
    menuSelector.click(()=>{
        menuSelector.removeClass('active');
    })
    menuSelector.children().click((e)=>{
        e.stopPropagation();
    })

    $('[data-close]').click(function(){
        closeSelector = $('[data-'+$(this).attr('data-close')+'="area"]');
        closeSelector.removeClass('active');
    });

    function clickEvent(){
        menuSelector.addClass('active');
    }


    // drop event
    function dropEvent(e , dropNum){
        let dropSelector = $('[data-click="drop"] > li > *');
        dropNum === 'one' && dropSelector.next().stop().slideUp();
        dropNum === 'all' && ($(e.target).prop("tagName") === "BUTTON" && e.preventDefault());
        ($(e.target).prop("tagName") === "BUTTON" || $(e.target).prop("tagName") === "A") && $(e.target).next().stop().slideToggle();
        ($(e.target).prop("tagName") === "BUTTON") && $(e.target).toggleClass('active');
            
    }
    
}