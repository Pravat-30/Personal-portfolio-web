// ==============================
// Portfolio JavaScript
// ==============================

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Scroll Animation
// ==============================

const hiddenElements = document.querySelectorAll(
".card,.project,.edu-card,.about-container,.home-text,.home-image"
);

hiddenElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

});

function reveal() {

    hiddenElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ==============================
// Typing Effect
// ==============================

const typingText = [

"B.Tech IT Student",

"Web Developer",

"Java Programmer",

"Python Learner"

];

const typingElement = document.querySelector(".home-text h2");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {

        typingElement.textContent =
        currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
        currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

// ==============================
// Contact Form
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;

    if(name==""){

        alert("Please enter your name.");

        return;

    }

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    form.reset();

});

// ==============================
// Back To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.background = "#38bdf8";
topButton.style.color = "#000";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.transition = ".3s";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==============================
// Welcome Message
// ==============================

window.onload = function(){

    console.log("Portfolio Loaded Successfully");

};

// ==============================
// Image Hover Animation
// ==============================

const images = document.querySelectorAll(".project img");

images.forEach(image=>{

    image.addEventListener("mouseover",()=>{

        image.style.transform="scale(1.05)";
        image.style.transition=".4s";

    });

    image.addEventListener("mouseout",()=>{

        image.style.transform="scale(1)";

    });

});

// ==============================
// Profile Image Animation
// ==============================

const profile = document.querySelector(".home-image img");

profile.addEventListener("mouseover",()=>{

    profile.style.transform="scale(1.05)";

});

profile.addEventListener("mouseout",()=>{

    profile.style.transform="scale(1)";

});

// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer p:last-child");

footer.innerHTML =
"© " +
new Date().getFullYear() +
" Pravat Samanta. All Rights Reserved.";

// ==============================
// End
// ==============================

console.log("Developed by Pravat Samanta");