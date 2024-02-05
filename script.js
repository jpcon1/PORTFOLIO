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
    start:"top top",
    toggleActions: "restart play reverse restart",
    scrub:1
    },
    
})




