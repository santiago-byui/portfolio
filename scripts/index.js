gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);

document.addEventListener("DOMContentLoaded",function(){

    const heroText = document.getElementById("hero-text");

    const split = new SplitText(heroText, {type:"chars"});

    const timeline = gsap.timeline();

    const body = document.querySelector("body");

    const logo = document.querySelector("#logo-container");

    const footer = document.querySelector("footer");

    timeline.from(split.chars,{
        opacity:0,
        y: 100,
        stagger:{
            each: 0.008,
            from: "randoms"
        },
        duration: 0.6,
        ease: "power2.out"
    })
    .to(body,{
        backgroundColor: "#070707",
        duration: 2,
        ease: "power4.out"
    })
    .to(logo,{
        opacity: 1,
        duration: 3,
        ease: "power1.out"
    },"<")
    .to(heroText,{
        color: "#F3F3F3",
        duration: 2,
        ease: "power4.out"
    },"<")
    .from(footer,{
        opacity: 0,
        duration: 5,
        ease: "power1.out"
    },"<")
    .from('.draw-me', { duration: 3, drawSVG: "0%", ease: "power4.out", opacity:0  },"<");
    
});

