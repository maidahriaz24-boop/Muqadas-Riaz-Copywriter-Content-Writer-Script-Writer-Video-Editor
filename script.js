/* =====================================================
   MUQADAS RIAZ PORTFOLIO - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION TOGGLE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        // Icon change: bars <-> X
        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

}


/* =====================================================
   2. CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


/* =====================================================
   3. SMOOTH SCROLLING
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            e.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   4. HERO BUTTONS
===================================================== */

// Let's Work Together button
const heroButtons = document.querySelectorAll(".left-container > div:nth-of-type(1) button");

if (heroButtons.length >= 1) {

    heroButtons[0].addEventListener("click", function () {

        const contactSection = document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// View My Works button
if (heroButtons.length >= 2) {

    heroButtons[1].addEventListener("click", function () {

        const workSection = document.getElementById("work");

        if (workSection) {

            workSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =====================================================
   5. HIRE ME BUTTON
===================================================== */

const hireMeButton = document.querySelector(".header nav > a:last-of-type");

if (hireMeButton) {

    hireMeButton.addEventListener("click", function (e) {

        e.preventDefault();

        const contactSection = document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


/* =====================================================
   6. EMAILJS INITIALIZATION
===================================================== */

/*
   IMPORTANT:

   Yahan apni EmailJS Public Key lagani hai.
*/

emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});


/* =====================================================
   7. CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        /* ---------------------------------------------
           Check required fields
        --------------------------------------------- */

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const message = document.getElementById("message");


        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !service.value ||
            !message.value.trim()
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color = "#b42318";

            return;

        }


        /* ---------------------------------------------
           Button Loading State
        --------------------------------------------- */

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        formMessage.textContent = "";


        /* ---------------------------------------------
           SEND EMAIL USING EMAILJS
        --------------------------------------------- */

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            contactForm
        )

        .then(function () {

            /* -----------------------------------------
               SUCCESS
            ----------------------------------------- */

            formMessage.textContent =
                "Message sent successfully! I'll get back to you soon.";

            formMessage.style.color = "#2e7d32";


            /* -----------------------------------------
               RESET FORM
            ----------------------------------------- */

            contactForm.reset();


            /* -----------------------------------------
               RESET BUTTON
            ----------------------------------------- */

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";


        })

        .catch(function (error) {

            /* -----------------------------------------
               ERROR
            ----------------------------------------- */

            console.error("EmailJS Error:", error);

            formMessage.textContent =
                "Something went wrong. Please try again.";

            formMessage.style.color = "#b42318";


            /* -----------------------------------------
               RESET BUTTON
            ----------------------------------------- */

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

        });

    });

}


/* =====================================================
   8. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", function (e) {

    if (!menuToggle || !navMenu) {
        return;
    }

    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});



document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    }

});