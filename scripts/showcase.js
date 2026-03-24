gsap.registerPlugin(SplitText,DrawSVGPlugin,Draggable,InertiaPlugin,MorphSVGPlugin,ScrambleTextPlugin);



document.addEventListener("DOMContentLoaded",()=>{
   
    const timeline = gsap.timeline();

    const messageTwo = document.querySelector("#message-2");

    const messageOne = document.querySelector("#message-1");

    const messagePicture = document.querySelector("#message-picture")

    let jumpTriggered = false;

     /* Message Bubble Animation */  /* Message Bubble Animation */
    messageTwo.addEventListener("mouseenter",()=>{
        gsap.to("#message-2 .message-bubble",{
            backgroundColor: "#525bf7",
            duration: 0.1,
            ease: "power1.in"

        })
        gsap.to("#message-2 .message-tail path",{
            fill: "#525bf7",
            duration: 0.1,
            ease: "power1.out"

        })
    });

    messageTwo.addEventListener("mouseleave",()=>{
        gsap.to("#message-2 .message-bubble",{
            backgroundColor: "#4952ed",
            duration: 0.1,
            ease: "power1.out"

        })
        gsap.to("#message-2 .message-tail path",{
            fill: "#4952ed",
            duration: 0.1,
            ease: "power1.out"

        })
    });

    messageOne.addEventListener("mouseenter",()=>{
        gsap.to("#message-1 .message-bubble",{
            backgroundColor: "#525bf7",
            duration: 0.1,
            ease: "power1.out"

        })
        gsap.to("#message-1 .message-tail path",{
            fill: "#525bf7",
            duration: 0.1,
            ease: "power1.out"

        })
    });

    messageOne.addEventListener("mouseleave",()=>{
        gsap.to("#message-1 .message-bubble",{
            backgroundColor: "#4952ed",
            duration: 0.1,
            ease: "power1.out"

        })
        gsap.to("#message-1 .message-tail path",{
            fill: "#4952ed",
            duration: 0.1,
            ease: "power1.out"

        })
    });

    messagePicture.addEventListener("mouseenter",()=>{

        gsap.to(messagePicture,{
            rotate:"360deg",
            duration: 2,
            ease: "power2.out"

        })
    });

    messagePicture.addEventListener("click",()=>{

        if (jumpTriggered == true) {
            return
        }

        const messagePictureTimeline = gsap.timeline();

        messagePictureTimeline.to(messagePicture,{
            y:"-40px",
            duration:0.8
        })
        .to(messagePicture,{
            y: "0px",
            duration: 0.4,
            ease: "bounce"
        })
        .to("#message-1",{
            y:"-10px",
            rotate: "2deg",
            duration:0.2
        },"<47%")
        .to("#message-2",{
            y:"-10px",
            rotate: "-2deg",
            duration:0.2
        },"<")
        .to("#message-1",{
            y:"0px",
            rotate: "0deg",
            duration:0.2,
            ease: "bounce"
        },)
        .to("#message-2",{
            y:"0px",
            rotate: "0deg",
            duration:0.2,
            ease: "bounce"
        },"<")
        .to(".message-status",{

            rotate:"360deg",
            y:"500px",
            duration: 4,
            ease: "power1.out"
        },"<20%")
        .to(".message-status",{

            rotate:"360deg",
            opacity: 0,
            duration: 2,
            ease: "power1.out"
        },"<")

        jumpTriggered = true

    });
     /* Message Bubble Animation */  /* Message Bubble Animation */
   


    timeline.from("#message-picture",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power1.out"
    })
    .from("#message-1",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power1.out"
    },"<")
    .from("#message-2",{
        opacity:0,
        y: "10px",
        duration:0.5,
        ease: "power1.out"
    },)
    .from("#phone-container",{
        y: "300px",
        duration: 1.5,
        ease: "power2.out"

    })
    .from("#phone-p2",{
        x: "300px",
        opacity:0,
        duration: 1.5,
        ease: "power2.out"
        
    })





    /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */
    /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */ /* CAROUSEL ANIMATION */


    const showcaseTitle = document.querySelector("#showcase-title");

    gsap.from(showcaseTitle,{
        duration: 1.5,
        scrambleText: {
        text: "PROJECT",
        chars: "upperCase",
    }
    });

    const showcaseTitleTwo = document.querySelector("#showcase-title-two");

    gsap.from(showcaseTitleTwo,{
        duration: 1.5,
        scrambleText: {
        text: "SHOWCASE",
        chars: "upperCase"
    }
    });


    const carouselImage = document.querySelector("#carousel-image")
    const thumbnailOne = document.querySelector("#thumbnail-1")
    const thumbnailTwo = document.querySelector("#thumbnail-2")
    const thumbnailThree = document.querySelector("#thumbnail-3")


    function changeImage(thumbnail) {

        if(carouselCooldown === true){return};
        
        carouselCooldown = true;
        
        const lastImage = carouselImage.src
        const newImage = thumbnail.src
        

        gsap.to(carouselImage,{
            opacity:0,
            duration:0.5,
            y: "-20px",
            scale: 0.3,
            ease: "power1.out",
            onComplete: ()=>{

                carouselImage.src = newImage;
                

                gsap.to(carouselImage,{
                    opacity:1,
                    duration:0.5,
                    y: "0px",
                    scale: 1,
                    ease: "power1.out",
                    onComplete: ()=>{
                        carouselCooldown = false;
                    }
                })
            }
        })

        gsap.to(thumbnail,{
            opacity:0,
            duration:0.5,
            ease: "power1.out",
            onComplete: ()=>{

                thumbnail.src = lastImage;
                

                gsap.to(thumbnail,{
                    opacity:1,
                    duration:0.5,
                    ease: "power1.out",
                    
                })
            }
        })



        
    };


    

    let carouselCooldown = false

    
    thumbnailOne.addEventListener("pointerup",()=>{
        changeImage(thumbnailOne);
    })

    thumbnailTwo.addEventListener("pointerup",()=>{
        changeImage(thumbnailTwo);
    })

    thumbnailThree.addEventListener("pointerup",()=>{
        changeImage(thumbnailThree);
    })



});