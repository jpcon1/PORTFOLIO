import { gsap } from "./node_modules/gsap/index.js";

gsap.registerPlugin(ScrollTrigger);
const animatef = gsap.from;
const animatet = gsap.to;
animatef('.navigation-list>li',{duration:1,y:'-100%',stagger:0.05});
animatef('.box1>h1',{duration:1,x:'-100%',stagger:0.2})

animatef('.skills-container>img',{
    rotation:-360,
    duration:1,
    x:'-100%',
    stagger:0.1,
    opacity:0,

    scrollTrigger:{
    trigger:".box1",
    markers:1,
    start:"top top", //if top of .box1 hits top of viewport activate trigger (first top is top of box or element  second top is top of viewport)
    end:"center",
    toggleActions: "play reverse play reverse ",//enter leave | goback leaveback
    scrub:6
    },
    
})




