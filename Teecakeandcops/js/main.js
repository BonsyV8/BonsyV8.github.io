
const responsive = {

    0:{
        items: 1
    },

    320:{
        items: 1
    },

    560:{
        items: 2
    },
    700:{
        items: 3
    },
    800:{
        items: 3
    },

    960:{
        items: 4
    }
}


$(document).ready(function(){
    
    $nav=$('.nav');
    $toggleCollapse = $('.toggle-collapse');


    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimer:3000,
        dots: false,
        nav:true,
        navText:[$('.owl-nav .owl-prive'), $('.owl-nav .owl-next')],
        responsive:responsive
    });
    
    //Click to Scroll Top

    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    })

    AOS.init();

});