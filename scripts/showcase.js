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
    const showcaseTitleTwo = document.querySelector("#showcase-title-two");
    const descriptionTitleTwo = document.querySelector("#description-title-two")
    const carousel = document.querySelector("#carousel")

    const showcaseObserver = new IntersectionObserver((entries,observer)=>{

        entries.forEach(entry => {

            if (entry.isIntersecting){

                gsap.to(showcaseTitle,{
                duration: 1.5,
                scrambleText: {
                text: "TYPE",
                chars: "upperCase",
                }
    });

                 gsap.to(showcaseTitleTwo,{
                duration: 1.5,
                scrambleText: {
                text: "POSTER",
                chars: "upperCase"
            }
            });


                

    observer.unobserve(entry.target)

            }

        })

    },{threshold:1});

    


    const carouselImage = document.querySelector("#carousel-image")
    const thumbnailOne = document.querySelector("#thumbnail-1")
    const thumbnailTwo = document.querySelector("#thumbnail-2")
    const thumbnailThree = document.querySelector("#thumbnail-3")

    showcaseObserver.observe(carouselImage)

    function changeImage(thumbnail) {

        if(carouselCooldown === true){return};
        
        carouselCooldown = true;
        
        const lastImage = carouselImage.src
        const newImage = thumbnail.src
        
        const imageList = [

            {src: "images/georgia-lowres.jpg",lineOne: "TYPE",lineTwo: "POSTER",text:" PLACEHOLDER Type influences usability more than we think. This Georgia poster was a quick study in legibility, hierarchy, and personality. Three elements at the core of meaningful UI."},
            {src: "images/book-lowres.jpg",lineOne: "BOOK",lineTwo: "COVER",text:" PLACEHOLDER This Divine Comedy cover plays with scale, layering, and restraint—where quiet space meets bold interruption to establish hierarchy and rhythm. Three forces at the core of intentional design."},
            {src: "images/home-lowres.jpg",lineOne: "HOME",lineTwo: "LAYOUT",text:" PLACEHOLDER This “HOME” composition explores contrast, disruption, and balance—where a dominant serif anchors the layout while fractured forms challenge readability. Three tensions at the core of expressive design."},
            {src: "images/vinyl-lowres.jpg",lineOne: "VINYL",lineTwo: "COVER",text:" PLACEHOLDER This Body and Soul sleeve explores geometry, alignment, and negative space—where angled planes and restrained type create rhythm through precision. Three structures at the core of composed design."}

        ]

        const imageInfo = imageList.find(img => newImage.endsWith(img.src))
        

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


    gsap.to(showcaseTitle,{
        duration: 1.5,
        scrambleText: {
        text: imageInfo.lineOne,
        chars: "upperCase",
    }
    });

    gsap.to(showcaseTitleTwo,{
        duration: 1.5,
        scrambleText: {
        text: imageInfo.lineTwo,
        chars: "upperCase"
    }
    });

        
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