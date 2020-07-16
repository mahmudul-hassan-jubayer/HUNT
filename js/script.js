//fixed menu
$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();

    if ($scrollamount > 600) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }

    if ($scrollamount > 1000) {
        $(".btn").fadeIn();
    } else {
        $(".btn").fadeOut();
    }

});


//to-bottom button
$(".btn").click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
});


//banner slide
$('#banner-part').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// venu box image
$('.venobox').venobox();


//our services slide
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-down next" aria-hidden="true"></i>',
    autoplay: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//testimonial slider
$('#testimonial .left').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-down next" aria-hidden="true"></i>',
    autoplay: false,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.right-slider',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//right-slider
$('.right-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-arrow-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-down next" aria-hidden="true"></i>',
    autoplay: false,
    vertical: false,
    arrows: false,
//    centerMode: false,
//    centerPadding: 0,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


//counter js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//team
//$('.venobox').venobox();

$("#firstlink").venobox().trigger('click');


//company slider
$('#company-part .iteams').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});