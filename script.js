
// ===============================
// Typing Animation
// ===============================

const words = [
    "Aspiring Software Developer",
    "Web Developer",
    "Java Programmer",
    "Problem Solver",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    const speed = isDeleting ? 60 : 120;

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Navbar Scroll Effect
// ===============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.75)";

        navbar.style.boxShadow =
            "none";
    }
});


// ===============================
// Active Navigation Link
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active-link");
        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements =
    document.querySelectorAll(
        ".glass-card, .skill-card, .project-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (
            revealTop <
            windowHeight - revealPoint
        ) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ===============================
// Contact Form Demo
// ===============================

const form =
    document.querySelector("form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your message has been received."
            );

            form.reset();
        }
    );
}


// ===============================
// Current Year Footer
// ===============================

const footer =
    document.querySelector("footer p");

if (footer) {

    const year =
        new Date().getFullYear();

    footer.innerHTML =
        `© ${year} Radha Portfolio | Designed with HTML, CSS, Bootstrap & JavaScript`;
}
