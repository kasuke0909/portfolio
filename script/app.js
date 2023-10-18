//sectionのスクロールアップの内容

$(function () {
    // animation呼び出し
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    // animation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 100) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});

// スライドショー
const slides = $("#js-slide").find("img");
const slideLength = slides.length;

let now = 0;
let next = 1;

const fade = 1500;
const show = 3000;

slides.hide();
slides.eq(0).show();

const slidesshow = () => {

  slides.eq(now % slideLength).fadeOut(fade).removeClass("zoom");
  slides.eq(next % slideLength).fadeIn(fade).addClass("zoom");

  now++;
  next++;
};

setInterval(slidesshow, show);
