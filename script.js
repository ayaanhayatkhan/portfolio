/* =========================
   CURSOR SPOTLIGHT EFFECT
========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";

    }

});


/* =========================
   TYPING EFFECT
========================= */

const titles = [
    "Student Programmer",
    "C & C++ Developer",
    "Python Enthusiast",
    "Web Developer"
];

const subtitle = document.querySelector(".hero-text h2");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        subtitle.textContent =
            currentTitle.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentTitle.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        subtitle.textContent =
            currentTitle.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


/* =========================
   REVEAL ON SCROLL
========================= */

const revealElements = document.querySelectorAll(
    ".card, .skill-card, .project-card, .contact-card"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({

            behavior: "smooth"
        });
    });

});


/* =========================
   HERO FADE-IN
========================= */

window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("loaded");

});