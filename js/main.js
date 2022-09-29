$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
    setInterval
    $('.top_visual-title').addClass('active-top').delay(3000);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})

$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})
 

// intersection observe 
function scan(hoge, setting) {
  const target = hoge === undefined ? '.animation-box' : hoge;
  const add = setting === undefined ? 'active' : setting;

  const targets = [].slice.call(document.querySelectorAll(target));
  const options = {
    root: null,
    rootMargin: "0px 0px -50%",
    threshold: 0
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(function(target) {
    observer.observe(target);
  });

  function callback(entries, object) {
    entries.forEach(function(entry, i){
      if(!entry.isIntersecting) return;
      const item = entry.target;
      animation(item);
      object.unobserve(item);
    })
  }

  function animation(target) {
    if (!target.classList.contains(add)) {
      target.classList.add(add);
    }
  }
}
const TLSlide = gsap.timeline({ repeat: -1 });
const TLSlide2 = gsap.timeline({ repeat: -1 });

TLSlide
.from('.discography-img img', { autoAlpha: 0, stagger: .8, duration: 0.5, y: 0, })
.to( '.discography-img img',
  { autoAlpha: 1, stagger: 1.2, duration: 0.5, y: 0 },
  0.5
);
TLSlide2
.from('.top_visual_slider .top-bg', { autoAlpha: 0, stagger: .8, duration: 0.5, y: 0})
.to( '.top_visual_slider .top-bg',
  { autoAlpha: 1, stagger: 1.2, duration: 0.5, y: 0},
  0.5
)
// var slides = $(".top_visual"),
//   slidesWrapper = $(".top_visual_slider"),
//   next = $("#nextBtn"),
//   prev = $("#prevtBtn"),
//   moveSlideTL = gsap.timeline();

// function nextClick() {
//   if(!moveSlideTL.isActive()) {
//     var slideFrom = $(".top_visual.active"),
//         sectionToIndex = slides.index(slideFrom);

//     if(sectionToIndex !== slides.length - 1) {
//       slideTo = slides.eq(sectionToIndex + 1);
//       moveToSlide(slideFrom, slideTo);
//     } else {
//       slideTo = slides.eq(0);
//       moveToSlide(slideFrom, slideTo);
//     }
//   }
// }

// function prevClick() {
//   if(!moveSlideTL.isActive()) {
//     var slideFrom = $(".top_visual.active"),
//         sectionToIndex = slides.index(slideFrom);
    
//     if(sectionToIndex != 0) {
//       slideTo = slides.eq(sectionToIndex - 1);
//       moveToSlide(slideFrom, slideTo);
//     } else {
//       slideTo = slides.eq(slides.length - 1);
//       moveToSlide(slideFrom, slideTo);
//     }
//   }
// }


// function moveToSlide(slideFrom, slideTo) {
//   if(slides.index(slideFrom) < slides.index(slideTo)) {
//     moveSlideTL = gsap.timeline({onStartParams: [slideTo, slideFrom]})
//       .to(slideFrom, 1, {height: 0, autoAlpha:0, ease:"power4.inOut", clearProps:"all", className: "top_visual", opacity:0.5})
    
//       .set(slideTo, {top: 'auto', bottom: 0}, 0)
//       .to(slideTo, 1, {width: "100%",height:"100%", autoAlpha:1, ease:"power4.inOut", className: "top_visual active"}, 0)
//       .set(slideTo, {top: 0, bottom: 'auto'})
//   } 
  
//   else {
//     moveSlideTL = gsap.timeline({onStartParams: [slideTo, slideFrom]})
//       .set(slideFrom, {top: 'auto', bottom: 0})
//       .to(slideFrom, 1, {height: 0, autoAlpha: 0, ease:"power4.inOut", clearProps:"all", className: "top_visual"})
    
//       .set(slideTo, {top: 0, bottom: 'auto', autoAlpha: .5}, 0)
//       .to(slideTo, 1, {width: "100%",height:"100vh", autoAlpha: 1, ease:"power4.inOut", className: "top_visual active"}, 0)
//   }
// }
// gsap.to ({}, 3 , { onRepeat : nextClick , repeat :- 1 });  

// function init() {

//   next.on('click', nextClick);

//   prev.on('click', prevClick);
  
//   gsap.set(".top_visual.active", {height: "100%"});
// }

// init();

// const title = document.querySelector('.title');
// const spanWrapText = (target) => {
//   const nodes = [...target.childNodes]; // ノードリストを配列にする
//   let returnText = ''; // 最終的に返すテキスト

//   for (const node of nodes) {
//     if (node.nodeType == 3) {
//       //テキストの場合
//       const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
//       const splitText = text.split(''); // 一文字ずつ分割
//       for (const char of splitText) {
//         returnText += `<span>${char}</span>`; // spanタグで挟んで連結
//       }
//     } else {
//       //テキスト以外の場合
//       //<br>などテキスト以外の要素をそのまま連結
//       returnText += node.outerHTML;
//     }
//   }
//   return returnText;
// };
// title.innerHTML = spanWrapText(title)

// gsap.to('.title span', {
//     duration: 1.5, //アニメーションの時間の設定
//     opacity: 1, //表示状態の指定
//     //同じclass名のバリデーションの設定
//     stagger: {
//       each: 0.2, //ディレイ時間
//       from: "start", //出現方法の指定
//     },
//   });

const bubbles = [...document.querySelectorAll('.member_name')]


const area = document.querySelector(".side-member-wrapper");
const panels = document.querySelectorAll(".pn40");
const length = panels.length;
const visual = document.querySelector('.top_visual');
const itemSwitch = (progress) => {
  const snapVal = gsap.utils.snap(1, progress * length - 1); //0 , 1 , 2...length
  const clampVal = gsap.utils.clamp(0, length - 0.1 , snapVal); //0 ～ length -1 の間に収める
  panels.forEach((panel, index) => {
    if( index == clampVal){
      panel.classList.add("active40");
    }else{
      panel.classList.remove("active40");
    }
  });
}

itemSwitch(0);

ScrollTrigger.create({
  trigger: ".side-wrapper",
  start: "top",
  end: "+=400%",
  scrub: true,
  autoAlpha: 0.6,
  pin: true,
  onUpdate: (self) => {
    itemSwitch(self.progress);
  },
  // onLeave: (self) => {
  //     area.classList.add('no-active')
  //   console.log(self)
  // },
  // onEnterBack: (self) => {
  //   area.classList.remove('no-active')
  // }
});

gsap.to('.scroll-indicator', {
	value: 130, // 最大値
	ease: 'none', // イージング
	scrollTrigger: {
		scrub: 0.05 // 追いつくまでの時間
	}
});

