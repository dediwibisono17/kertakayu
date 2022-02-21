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

    $(".navbar-toggler").click(() => {
        // alert(1)
        $(".helper-task").toggleClass('overflow')
    })
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



$.ajax({
    url: '/kertakayu/js/benefit.json',
    type: 'GET',
    beforeSend: function() {
        $(".loading").show();
    },
    complete: function() {
        $(".loading").hide();
    },
    // <div class="card__circle">
    //     <div class="image">
    //         <img src="${response[a].img}" alt="">
    //     </div>
    // </div>
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            $(".benefit").append(`
            <li class="wrap">
                <div class="card_">
                    <div class="content">
                        <h3 class="font-std font-bold">
                            ${response[a].title}
                        </h3>
                        <p class="font-std">${response[a].desc}</p>
                        
                    </div>
                </div>
            </li>
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
            <div class="material-content">
                <div class="card_">
                    <div class="content">
                        <h3 class="font-medium font-bold upper">
                            ${response[a].title}
                        </h3>
                        <div class="desc font-small">${response[a].desc}</div>
                        </div>
                </div>
            </div>
                `)
        }
        $(".material").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
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
            ]
        });
    }
})
