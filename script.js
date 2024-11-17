// Tab navigation functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Google Sheet form submission functionality
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxYVNI7cdpKr-ZsPk104Onm39zgemo7QSjWJNkLLgpKjOrPSJMEDyhtWKQ8K5MLizg6nA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message Sent Successfully!";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});

/*-----------------animation--------------*/

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('div'); // Replace 'div' with your section selector if needed

    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

/*---------------------animation on heading text--------------------*/

const texts = ["Anshul!", "a Developer.", "an Innovator."];
const animatedTextElement = document.getElementById("animated-text");

let currentTextIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[currentTextIndex].length) {
        animatedTextElement.textContent += texts[currentTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1670); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        animatedTextElement.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
        setTimeout(typeText, 500); // Pause before typing next text
    }
}

typeText();
