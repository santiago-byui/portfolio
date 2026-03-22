gsap.registerPlugin(SplitText,DrawSVGPlugin,Draggable,InertiaPlugin,MorphSVGPlugin);


document.addEventListener("DOMContentLoaded",()=>{
   
    const timeline = gsap.timeline();

    timeline.from("#message-picture",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power2.out"
    })
    .from("#message-1",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power2.out"
    },"<")
    .from("#message-2",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power2.out"
    },)
    .from("#phone-container",{
        y: "300px",
        duration: 2,
        ease: "power2.out"

    })

});