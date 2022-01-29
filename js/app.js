$(document).ready(function() {
    new WOW().init();
    $(".scrolltop").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });
    $('.scrolltop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

})

$(window).scroll(function() {
    var nav = $('.bg-scroll');
    var top = 20;
    if ($(window).scrollTop() >= top) {

        nav.addClass('bg-black');

    } else {
        nav.removeClass('bg-black');
    }
});

$(".chevron-wrapper").click(function() {
    $('html, body').animate({
        scrollTop: $("#first").offset().top - 0
    }, 500);
})

$('.top-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px',
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.campaign').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '60px',
                adaptiveHeight: true
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$.ajax({
    url: '/kertakayu/js/benefit.json',
    type: 'GET',
    beforeSend: function() {
        $(".loading").show();
    },
    complete: function() {
        $(".loading").hide();
    },
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            $(".benefit").append(`
            <div class="col-md-3 col-6">
                <div class="card_">
                    <div class="card__circle">
                        <div class="image">
                            <img src="${response[a].img}" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <h3 class="font-std font-bold text-center">
                            ${response[a].title}
                        </h3>
                        
                    </div>
                </div>
            </div>
            `)
        }
    }
})

$.ajax({
    url: '/kertakayu/js/material.json',
    type: 'GET',
    beforeSend: function() {
        $(".loading").show();
    },
    complete: function() {
        $(".loading").hide();
    },
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            $(".material").append(`
            <div class="col-md-3 col-6">
                <div class="card_">
                    <div class="card__circle">
                        <div class="image">
                            <img src="${response[a].img}" alt="">
                        </div>
                    </div>
                    <div class="content">
                        <h3 class="font-std font-bold text-center">
                            ${response[a].title}
                        </h3>
                        
                    </div>
                </div>
            </div>
            `)
        }
    }
})