$(document).ready(function () {
    _navEvent()
    $(window).on("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var bannerHeight = $(".banner").height(),
            headerTop = $("header").height() + 30
        scrollTop > bannerHeight - headerTop ? $('header').addClass("layer") : $('header').removeClass("layer")
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
})
$(window).on("resize",function () {
    _navEvent()
})
function _navEvent() {
    if ($('#header-nav').length == 0) {
        return;
    }
    var len = $('#header-nav a.current').text().length;
    var $item = $('#header-nav a.current').parent();
    var offset = $item.offset();
    var uo = $('nav').offset();
    var $bg = $('#header-nav > .underline');
    var left = offset.left - uo.left;
    $bg.css({
        'width': len + 'em',
        'left': left + 15 + "px"
    });

    $('#header-nav a').hover(function () {
        var len2 = $(this).text().length;
        var $item2 = $(this).parent();
        var offset2 = $item2.offset();
        var left2 = offset2.left - uo.left;

        $bg.css({
            'width': len2 + 'em',
            'left': left2 + 15 + "px"
        })

    }, function () {
        $bg.css({
            'width': len + 'em',
            'left': left + 15 + "px"
        });
    })
}