// banner 輪播及進場動畫
let swiper1 = new Swiper(".swiper1",{
    speed:2000,
    loop:true,
    autoplay:{
        delay:6000
    },
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
        slideChangeTransitionStart: function(){
            if(this.realIndex == 0){
                banner1In()
            }else if(this.realIndex == 1){
                banner2In()
            }
           
     
        },
      },
   
})

function banner1In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img1",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
function banner2In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img2",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
// banner 輪播及進場動畫
// arrowmove
// let more = document.getElementsByClassName("readmore")[0];
// more.onmouseover = function(){
//     arrowMove()
// }
// function arrowMove(){
//     let gg = gsap.timeline();
//     gg.to(".arrow",{
//         keyframes:{
//             x:[0,60],
//             x:[-60,3,-3,0]
//         },
//         duration:3,
//         repeat:-1
//     })
// }

// arrowmove
