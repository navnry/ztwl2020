$(document).ready(function () {
    _navEvent()
    var t = $("footer").offset().top + $(".driftbar").height()

    $(window).on("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop > 200 ? $('header').addClass("layer") : $('header').removeClass("layer")
        if (t >= $(window).scrollTop() && t < ($(window).scrollTop() + $(window).height())) {
            $(".driftbar").removeClass("fixed")
        } else {
            $(".driftbar").addClass("fixed")
        }
    })
    $("img").on("mousedown",function (e) {
        e.preventDefault()
    })
    if ($(".banner img").length > 1) {
        new Swiper(".banner .swiper-container", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            }
        })
    }
    $(".footer-adderss-tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).children("a").addClass("current").parents().siblings().children("a").removeClass("current")
        $(".footer-adderss-box li").eq(_index).fadeIn(300).siblings().hide()
    })
    if ($(".bigao-swiper").length > 0) {
        new Swiper(".bigao-swiper .swiper-container", {
            speed: 600,
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.bigao-swiper .swiper-button-next',
                prevEl: '.bigao-swiper .swiper-button-prev',
            },
        })
    }

    if ($(".sem-anli-tabs").length > 0) {
        var semAnliThumbs = new Swiper('.sem-anli-tabs .swiper-container', {
            spaceBetween: 0,
            slidesPerView: 7,
            speed:600,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var semAnliBox = new Swiper('.sem-anli-box .swiper-container', {
            spaceBetween: 10,
            speed:600,
            allowTouchMove:false,
            thumbs: {
                swiper: semAnliThumbs
            },
            navigation: {
                nextEl: '.sem-anli-tabs .swiper-button-next',
            },
        });
    }
})
$(window).on("resize", function () {
    _navEvent()
})

function _navEvent() {
    if ($('#header-nav').length == 0) {
        return;
    }
    var len = $('#header-nav a.current').text().length;
    var lenzr = $('#header-nav a.current').width();
    var $item = $('#header-nav a.current').parent();
    var offset = $item.offset();
    var uo = $('nav').offset();
    var $bg = $('#header-nav > .underline');
    var left = offset.left - uo.left;
    console.log(lenzr);
    $bg.css({
        'width': lenzr + 'px',
        'left': left + 15 + "px"
    });

    $('#header-nav a').hover(function () {

        var len2 = $(this).text().length;
        var lenzr = $(this).width();

        var $item2 = $(this).parent();
        var offset2 = $item2.offset();
        var left2 = offset2.left - uo.left;

        $bg.css({
            'width': lenzr + 'px',
            'left': left2 + 15 + "px"
        })

    }, function () {
        $bg.css({
            'width': lenzr + 'px',
            'left': left + 15 + "px"
        });
    })
}