gsap.registerPlugin(DrawSVGPlugin,Draggable,InertiaPlugin,MorphSVGPlugin,ScrambleTextPlugin);


document.addEventListener("DOMContentLoaded",()=>{


const heroText = document.querySelector("#hero-text");

const introTimeline = gsap.timeline();

introTimeline.from(heroText,{
    opacity: 0,
    y: 100,
    duration:1,
    ease: "power1.out"
})
.from("main",{
    opacity:0,
    duration: 1,
    ease: "power1.out"
})
.from("footer",{
    opacity:0,
    duration: 1,
    ease: "power1.out"
},"<")






    // AI DID THIS :( //
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit-button");

    const emailField = document.querySelector("form input");
    const messageField = document.querySelector("form textarea");


    submitButton.addEventListener("click", () => {

         if (emailField.value === ""){
            return
        }
        if (messageField.value === ""){
            return
        }

        submitButton.disabled = true;
        submitButton.textContent = "...";

        // AI DID THIS :( //// AI DID THIS :( //
        emailjs.sendForm("service_xo6hy6b", "template_0q2gnam", form)
            .then(() => {
                gsap.to(submitButton, { duration: 0.3, backgroundColor: "#4952ED", boxShadow: "0 8px 30px rgba(55, 64, 235, 0.4)", color: "#FFFFFF" });
                submitButton.textContent = "Message Sent";
                form.reset();
            })
            .catch((err) => {
                console.error("FAILED...", err);
                gsap.to(submitButton, { duration: 0.3, backgroundColor: "#f44336", boxShadow: "0 8px 30px rgba(237, 73, 73, 0.35)" });
                submitButton.textContent = "Failed! Try Again";
            })
            .finally(() => {
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit";
                    gsap.to(submitButton, { duration: 0.3, backgroundColor: "#4952ED",boxShadow: "0 8px 30px rgba(237, 73, 73, 0)"});
                }, 2000);
            });
    });









})
