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
// second-page line-grow animation
let li = document.querySelectorAll(".switchImg li");

for(let i = 0 ; i <li.length ; i++){
    li[i].onclick = function(e){
        let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
        lineSwitch.classList.remove("lineSwitch")
        this.classList.add("lineSwitch")
    }
}

// second-page line-grow animation
