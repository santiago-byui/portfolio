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
            ease: "bounce",
            onComplete: ()=> { messagePicture.style.cursor = "auto" }
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
    const carouselH2 = document.querySelector("#carousel-h2")


    const imageList = [

            {src: "images/georgia-lowres.jpg",lineOne: "TYPE",lineTwo: "POSTER",text:"This is a type poster I made for the popular typeface Georgia! I tried to highlight its elegance and playfulness by employing a dynamic but heavily aligned composition. ",href:"showcase-pages/type-poster.html"},
            {src: "images/book-lowres.jpg",lineOne: "BOOK",lineTwo: "COVER",text:"A book cover design for Dante's Divine Comedy. I chose to draw attention to the INFERNO subtitle because of its popularity as well as it's boldness."},
            {src: "images/home-lowres.jpg",lineOne: "HOME",lineTwo: "LAYOUT",text:"One of my favorite works on display. The goal of this exploration was to form the word HOME through framented type and negative space. Juggling readability and incresingly elaborate compositions was hard but incredibly fun."},
            {src: "images/vinyl-lowres.jpg",lineOne: "VINYL",lineTwo: "COVER",text:"Cover design for the Body and Soul album by Coleman Hawkins. The composition is purely geometrical, and it relies solely on design principles like alignment and negative space to create visual interest. Limitations demand creative solutions.",href:"showcase-pages/vynil-cover.html"}

        ]


    showcaseObserver.observe(carouselImage)

    function changeImage(thumbnail) {

        if(carouselCooldown === true){return};
        
        carouselCooldown = true;
        containerShade.style.display = "none";
        
        const lastImage = carouselImage.src
        const newImage = thumbnail.src

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
                        containerShade.style.display = "";
                    }
                })

                carouselH2.textContent = imageInfo.text;
                

                gsap.to(carouselH2,{
                    opacity:1,
                    duration:0.5,
                    ease: "power1.out",
                })


            }
        })


        gsap.to(carouselH2,{
            opacity:0,
            duration:0.5,
            ease: "power1.out"
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




    const star = document.querySelector("#footer-star")

    gsap.to(star,{

        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "linear"

    })


    /*IMAGE CONTAINER SHADE*/ 
    const containerShade = document.querySelector("#carousel-image-container-shade");
    const containerShadeButton = document.querySelector("#carousel-image-container-button");

    containerShade.addEventListener("mouseenter",()=>{
        gsap.to(containerShade,{
            opacity:1,
            duration:0.2
        })
        gsap.from(containerShadeButton,{
            opacity:0,
            x:100,
            duration:0.6,
            ease: "power1.out"
        })
    });

    containerShade.addEventListener("mouseleave",()=>{
        gsap.to(containerShade,{
            opacity:0,
            duration:0.2
        })
    });

    /* IMAGE CONTAINER BUTTON FUNCTIONALITY! */
    containerShadeButton.addEventListener("click",()=>{

        const currentImage = carouselImage.src
        const imageInfo = imageList.find(img => currentImage.endsWith(img.src))
        

        if (imageInfo.href){
            window.open(imageInfo.href,"_blank");
        } else {
            console.log("no image info")
        }

    });




});