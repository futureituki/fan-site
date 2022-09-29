$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    },2000)
  })
})
script = document.createElement( 'script' );
script.src = "https://www.youtube.com/iframe_api";
firstScript = document.getElementsByTagName( 'script' )[ 0 ];
firstScript.parentNode.insertBefore( script , firstScript );
var ytPlayer = [];
ytData = [
    {
        id: 'D8piCp9XMKA',
        area: 'ytplayer'
    },
    {
        id: '3boaeE3dwMs',
        area: 'ytplayer2'
    }, 
    {
        id: 'drCopBcrxRM',
        area: 'ytplayer3'
    }, 
    {
        id: 'fPZ37t3nvco',
        area: 'ytplayer4'
    }, 
    {
        id: 'fagRTasDcKo',
        area: 'ytplayer5'
    }, 
];
function onYouTubeIframeAPIReady() {
    for(var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
            videoId: ytData[i]['id'],
            playerVars: {
                controls: 0,
                autoplay:1,
                mute:1,
                loop:1,
                playlist: ytData[i]['id']
            },
        });
    }
}
  
function myMute1() {
    ytPlayer[0].mute();
}
function myUnMute1() {
    ytPlayer[0].unMute();
}

  $(".music").on("click",function(){
    if(ytPlayer[0].isMuted() == true) {
        myUnMute1();
} else {
    myMute1();
}
   });

function myMute2() {
    ytPlayer[1].mute();
}
function myUnMute2() {
    ytPlayer[1].unMute();
}
  $(".music-4th").on("click",function(){
    if(ytPlayer[1].isMuted() == true) {
        myUnMute2();
} else {
    myMute2();
}
});
function myMute3() {
    ytPlayer[2].mute();
}
function myUnMute3() {
    ytPlayer[2].unMute();
}
  $(".music-3th").on("click",function(){
    if(ytPlayer[2].isMuted() == true) {
        myUnMute3();
} else {
    myMute3();
}
});
function myMute4() {
    ytPlayer[3].mute();
}
function myUnMute4() {
    ytPlayer[3].unMute();
}
  $(".music-2th").on("click",function(){
    if(ytPlayer[3].isMuted() == true) {
        myUnMute4();
} else {
    myMute4();
}
});
function myMute5() {
    ytPlayer[4].mute();
}
function myUnMute5() {
    ytPlayer[4].unMute();
}
  $(".music-1th").on("click",function(){
    if(ytPlayer[4].isMuted() == true) {
        myUnMute5();
} else {
    myMute5();
}
});
var slider = document.querySelector(".slider");
var slides = document.querySelectorAll(".slider-item");
var navPrev = document.querySelector(".go-prev");
var navNext = document.querySelector(".go-next");
var slidesNum = slides.length;
var allButtons = document.querySelectorAll(".slider-btn");
var prevSlideID = null;
var currentSlideID = 0;
var isAnimating = false;
var tl;
var startingSlide = true;
var delayTime = 30;

function init () {
    gsap.set(slides, {
        xPercent: -100
    });

    /* Set background images */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.backgroundImage = `url(${slides[i].dataset.url}`;
    }

    /* Create slide bullets */
    for (i = 0; i < slides.length; i++) {
        var slideBullet = document.createElement('div');
        var slideBulletFill = document.createElement('div');
        slideBullet.setAttribute('class', 'slide-bullet');
        slideBulletFill.setAttribute('class', 'slide-bullet-fill');
        var wrapper = document.querySelector('.slide-bullet-wrapper');
        wrapper.appendChild(slideBullet);
        slideBullet.appendChild(slideBulletFill);
    }

    /* Add mouse events to buttons */

    for (let index = 0; index < allButtons.length; index++) {
        allButtons[index].addEventListener("mouseenter", hoverEnterBtn);
        allButtons[index].addEventListener("mouseleave", hoverLeaveBtn);
    }

    navPrev.onclick = function () {
        gotoPrevSlide();
    };
    navNext.onclick = function () {
        gotoNextSlide();
    };
    /* Goto first slide */
    gotoSlide(0, 0);
}

function gotoPrevSlide () {
    var slideToGo = currentSlideID - 1;
    if (slideToGo <= -1) {
        slideToGo = slidesNum - 1;
    }

    /* Unfill the current bullet before going back */
    var allBullets = document.querySelectorAll('.slide-bullet-fill');
    gsap.set(allBullets[currentSlideID], { width: "0%" });

    /* Fill all previous bullets if first bullet is actively animating */
    if (currentSlideID == 0) {
        for (let index = 0; index <= slidesNum - 2; index++) {
            gsap.to(allBullets[index], { width: "100%" });
        }
    }

    gotoSlide(slideToGo, 1, "prev");
}

function gotoNextSlide () {
    var slideToGo = currentSlideID + 1;
    if (slideToGo >= slidesNum) {
        slideToGo = 0;
    }

    var allBullets = document.querySelectorAll('.slide-bullet-fill');

    /* When all slides are complete clear out the bullets */
    if (currentSlideID >= slidesNum - 1) {
        gsap.to(allBullets, .25, { width: "0%" });
    }

    /* Fill the last bullet before going to next */
    if (currentSlideID !== slidesNum - 1) {
        gsap.to(allBullets[currentSlideID], { width: "100%" });
    }

    gotoSlide(slideToGo, 1, "next");
}

function gotoSlide (slideID, _time, _direction) {
    if (!isAnimating) {
        isAnimating = true;
        prevSlideID = currentSlideID;
        currentSlideID = slideID;
        var prevSlide = slides[prevSlideID];
        var currentSlide = slides[currentSlideID];
        var time = .2;
        if (_time !== null) {
            time = _time;
        }
        var direction = "next";
        if (_direction != null) {
            direction = _direction;
        }

        /* If timeline exists kill it */
        if (tl) {
            tl.kill();
        }

        /* Make sure that the button is hidden so we can animate it */
        var slBtn = currentSlide.querySelector('.slider-btn');

        if (slBtn) {
            slBtn.style.display = "none"
        }

        /* Animations if the slide direction is next or forward */
        if (direction == "next") {
            tl = gsap.timeline();


            if (!startingSlide) {
                /* Titles Animation for exiting previous slide */
                tl.fromTo(prevSlide.querySelectorAll('.sl_main_title, .sl_sub_title'), .25, {
                    width: "100%"
                }, {
                    width: "0%",
                    stagger: 0.1,
                    ease: Power4
                }, 0);

                /* Button outro animations */
                if (allButtons[prevSlideID] != undefined || allButtons[prevSlideID] != null) {

                    /* Button outro animation */
                    animateBtn(prevSlide.querySelector('.slider-btn'), "prev");

                    /* Button label outro animation */
                    tl.fromTo(prevSlide.querySelector('.slider-label'), .3, { opacity: 100 }, { opacity: 0 }, 0);
                }
            }

            /* Animate background images. */

            /* If not the starting slide, move 1st slide off stage. */
            if (!startingSlide) {
                tl.to(prevSlide, time, {
                    xPercent: -100,
                    ease: Power4
                }, .4);
            }

            /* No longer need starting slide variable so set to false. */
            startingSlide = false;

            /* Move next slide onto stage */
            tl.fromTo(currentSlide, time, {
                xPercent: 100
            }, {
                xPercent: 0,
                ease: Power4
            }, .4);

            /* Titles intro animation for current slide */
            tl.fromTo(currentSlide.querySelectorAll('.sl_main_title, .sl_sub_title'), .25, {
                width: "0%"
            }, {
                width: "100%",
                stagger: 0.1,
                ease: Power4
            });

            tl.fromTo(currentSlide.querySelectorAll('.span_title'), .7, {
                y: 250
            }, {
                y: 0,
                stagger: 0.1,
                ease: Power1,
                /* Button outline animation */
                onComplete: animateBtn,
                onCompleteParams: [currentSlide.querySelector('.slider-btn'), "next"]
            });

            /* Button label intro animation */
            if (allButtons[currentSlideID] != undefined || allButtons[currentSlideID] != null) {
                tl.set(currentSlide.querySelector('.slider-label'), { opacity: 100 });
                tl.fromTo(currentSlide.querySelector('.slider-label'), .25, { y: 75 }, { y: 0 }, 3.5);
            }

            /* Bullet fill */
            tl.fromTo(document.querySelectorAll('.slide-bullet-fill')[currentSlideID], delayTime, {
                width: "0%"
            }, {
                width: "100%",
                ease: Power2,
                onComplete: play
            });

        } else {
            /* Animations if the slide direction is previous or backwards */
            tl = gsap.timeline();

            /* Titles exit animation for previous slide */
            tl.fromTo(prevSlide.querySelectorAll('.sl_main_title, .sl_sub_title'), .25, {
                width: "100%"
            }, {
                width: "0%",
                stagger: 0.1,
                ease: Power4
            }, 0);

            /* Button outro animation */
            if (allButtons[prevSlideID] != undefined || allButtons[prevSlideID] != null) {
                animateBtn(prevSlide.querySelector('.slider-btn'), "prev");


                /* Button label outro animation */
                tl.fromTo(prevSlide.querySelector('.slider-label'), .3, { opacity: 100 }, { opacity: 0 }, 0);
            }


            /* Animate background images. */
            tl.to(prevSlide, time, {
                xPercent: 100,
                ease: Power4
            }, .4);
            tl.fromTo(currentSlide, time, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: Power4
            }, .4);

            /* Titles intro animation */
            tl.fromTo(currentSlide.querySelectorAll('.sl_main_title, .sl_sub_title'), .25, {
                width: "0%"
            }, {
                width: "100%",
                stagger: 0.1,
                ease: Power4
            });

            tl.fromTo(currentSlide.querySelectorAll('.span_title'), .7, {
                y: 250
            }, {
                y: 0,
                stagger: 0.1,
                ease: Power1,
                /* Button outline animation */
                onComplete: animateBtn,
                onCompleteParams: [currentSlide.querySelector('.slider-btn'), "next"]
            });

            /* Button label intro animation */
            if (allButtons[currentSlideID] != undefined || allButtons[currentSlideID] != null) {
                tl.set(currentSlide.querySelector('.slider-label'), { opacity: 100 });
                tl.fromTo(currentSlide.querySelector('.slider-label'), .25, { y: 75 }, { y: 0 }, 3.5);
            }

            /* Bullet fill */
            tl.fromTo(document.querySelectorAll('.slide-bullet-fill')[currentSlideID], delayTime, {
                width: "0%"
            }, {
                width: "100%",
                ease: Power2,
                onComplete: play
            });

        }

        gsap.delayedCall(time, function () {
            isAnimating = false;
        });

    }
}

function play () {

    gotoNextSlide();
}

function animateBtn (slide, direction) {

    if (slide) {

        /* The button is hidden so we need to show the button before animating */
        slide.style.display = "flex";
        slideSVG = slide.querySelector('svg path');

        /* SVG button outline animation */
        if (direction == "next") {
            anime({
                targets: slideSVG,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: function (el, i) {
                    return i * 250
                }
            });
        } else {
            anime({
                targets: slideSVG,
                strokeDashoffset: [0, anime.setDashoffset],
                easing: 'easeInOutSine',
                duration: 380,
                delay: function (el, i) {
                    return i * 250
                }
            });
        }
    }
}

function hoverEnterBtn () {

    anime({
        targets: 'svg path',
        fillOpacity: 1,
        easing: 'easeInOutSine',
        duration: 500,
    });
}

function hoverLeaveBtn () {

    anime({
        targets: 'svg path',
        fillOpacity: 0,
        easing: 'easeInOutSine',
        duration: 500,
    });
}

init();

$(".gallery").modaal({
    type: 'image',
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});
$(".gallery-4th").modaal({
    type: 'image',
    overlay_close:true,
    before_open:function(){
    $('html').css('overflow-y','hidden');
    },
    after_close:function(){
    $('html').css('overflow-y','scroll');
    }
});
$(".gallery-3th").modaal({
    type: 'image',
    overlay_close:true,
    before_open:function(){
    $('html').css('overflow-y','hidden');
    },
    after_close:function(){
    $('html').css('overflow-y','scroll');
    }
});
$(".gallery-2th").modaal({
    type: 'image',
    overlay_close:true,
    before_open:function(){
    $('html').css('overflow-y','hidden');
    },
    after_close:function(){
    $('html').css('overflow-y','scroll');
    }
});
$(".gallery-1th").modaal({
    type: 'image',
    overlay_close:true,
    before_open:function(){
    $('html').css('overflow-y','hidden');
    },
    after_close:function(){
    $('html').css('overflow-y','scroll');
    }
});
$(".live").modaal({
    content_source: '#live',
    background:'#000',
    overlay_close:true,
});
$(".live2").modaal({
    content_source: '#live2',
    background:'#000',
    overlay_close:true,
});
$(".album1").modaal({
    content_source: '#album1',
    background:'#0e2044',
    overlay_close:true,
});
$(".album2").modaal({
    content_source: '#album2',
    background:'#0e2044',
    overlay_close:true,
});
$(".album3").modaal({
    content_source: '#album3',
    background:'#0e2044',
    overlay_close:true,
});
$(".4th-A").modaal({
    content_source: '#4th-A',
    background:'#EDEDED',
    overlay_close:true,
    overlay_opacity:.96,
});
$(".4th-B").modaal({
    content_source: '#4th-B',
    background:'#EDEDED',
    overlay_close:true,
});
$(".4th-C").modaal({
    content_source: '#4th-C',
    background:'#EDEDED',
    overlay_close:true,
    overlay_opacity:.96,
});
$(".4th-D").modaal({
    content_source: '#4th-D',
    background:'#EDEDED',
    overlay_close:true,
    overlay_opacity:.96,
});
$(".4th").modaal({
    content_source: '#4th',
    background:'#EDEDED',
    overlay_close:true,
    overlay_opacity:.96,
});
$(".3th-A").modaal({
    content_source: '#3th-A',
    background:'#EDEDED',
    overlay_close:true,
    overlay_opacity:.96,
});
$(".3th-B").modaal({
    content_source: '#3th-B',
    background:'#EDEDED',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".3th-C").modaal({
    content_source: '#3th-C',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".3th-D").modaal({
    content_source: '#3th-D',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".3th").modaal({
    content_source: '#3th',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".2th-A").modaal({
    content_source: '#2th-A',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".2th-B").modaal({
    content_source: '#2th-B',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".2th-C").modaal({
    content_source: '#2th-C',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".2th-D").modaal({
    content_source: '#2th-D',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".2th").modaal({
    content_source: '#2th',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".1th-A").modaal({
    content_source: '#1th-A',
    background:'#FFF',
    overlay_close:true,
    overlay_opacity:.96,

});
$(".1th-B").modaal({
    content_source: '#1th-B',
    background:'#FFF',
    overlay_close:true,
    overlay_opacity:.96,

});
$(".1th-C").modaal({
    content_source: '#1th-C',
    background:'#FFF',
    overlay_close:true,
    overlay_opacity:.96,

});
$(".1th-D").modaal({
    content_source: '#1th-D',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});
$(".1th").modaal({
    content_source: '#1th',
    background:'#FFF',
    overlay_close:true,
        overlay_opacity:.96,

});