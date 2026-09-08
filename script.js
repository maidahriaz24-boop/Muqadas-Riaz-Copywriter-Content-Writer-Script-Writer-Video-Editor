/* =====================================================
   MUQADAS RIAZ PORTFOLIO - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

function closeMobileMenu() {
    if (!navMenu) return;

    navMenu.classList.remove("active");

    if (menuToggle) {
        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }
}


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function (e) {

        e.stopPropagation();

        navMenu.classList.toggle("active");

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
   2. MOBILE NAV LINKS
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        closeMobileMenu();
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

            closeMobileMenu();
        }

    });

});


/* =====================================================
   4. HERO BUTTONS
===================================================== */

const heroButtons = document.querySelectorAll(
    ".left-container > div:nth-of-type(1) button"
);


/* -----------------------------------------------------
   Let's Work Together
----------------------------------------------------- */

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


/* -----------------------------------------------------
   View My Works
----------------------------------------------------- */

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

const hireMeButton = document.querySelector(
    ".header nav > a:last-of-type"
);

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

        closeMobileMenu();

    });

}


/* =====================================================
   6. EMAILJS INITIALIZATION
===================================================== */

/*
   EmailJS Public Key
*/

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "7tS7I9CfUNgXXyp-J"
    });

}


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
           Get Form Fields
        --------------------------------------------- */

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const message = document.getElementById("message");


        /* ---------------------------------------------
           Check Elements
        --------------------------------------------- */

        if (
            !name ||
            !email ||
            !service ||
            !message ||
            !submitBtn ||
            !formMessage
        ) {

            console.error(
                "Contact form elements are missing."
            );

            return;

        }


        /* ---------------------------------------------
           Validate Form
        --------------------------------------------- */

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
           Basic Email Validation
        --------------------------------------------- */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "#b42318";

            return;

        }


        /* ---------------------------------------------
           Loading State
        --------------------------------------------- */

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        formMessage.textContent = "";


        /* =================================================
           EMAILJS SEND
           
           REPLACE THESE TWO VALUES:
           
           YOUR_SERVICE_ID
           YOUR_TEMPLATE_ID
        ================================================= */

        emailjs.sendForm(
            "service_mbb33oj",
            "template_4q40zfg",
            contactForm
        )

        .then(function (response) {

            console.log(
                "EmailJS Success:",
                response.status,
                response.text
            );


            /* ---------------------------------------------
               Success Message
            --------------------------------------------- */

            formMessage.textContent =
                "Message sent successfully! I'll get back to you soon.";

            formMessage.style.color = "#2e7d32";


            /* ---------------------------------------------
               Reset Form
            --------------------------------------------- */

            contactForm.reset();


            /* ---------------------------------------------
               Reset Button
            --------------------------------------------- */

            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message";

        })

        .catch(function (error) {

            console.error(
                "EmailJS Error:",
                error
            );


            /* ---------------------------------------------
               Error Message
            --------------------------------------------- */

            formMessage.textContent =
                "Something went wrong. Please try again.";

            formMessage.style.color = "#b42318";


            /* ---------------------------------------------
               Reset Button
            --------------------------------------------- */

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

    const clickedInsideMenu =
        navMenu.contains(e.target);

    const clickedToggle =
        menuToggle.contains(e.target);


    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        closeMobileMenu();

    }

});


/* =====================================================
   9. CLOSE MOBILE MENU WITH ESCAPE
===================================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeMobileMenu();

    }

});


/* =====================================================
   END OF JAVASCRIPT
===================================================== */
