// ======================================
// Portfolio JavaScript
// ======================================

// Mobile Menu

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,11,22,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(8,11,22,.85)";
        header.style.boxShadow = "none";

    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        nav.classList.remove("active");

    });

});

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// Typing Effect

const typingElement = document.querySelector(".typing");

if(typingElement){

const words = [

"Developer",
"Designer",
"Programmer",
"Creator"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const word = words[wordIndex];

    if(!deleting){

        typingElement.textContent = word.substring(0,charIndex++);

    }else{

        typingElement.textContent = word.substring(0,charIndex--);

    }

    if(!deleting && charIndex === word.length + 1){

        deleting = true;

        setTimeout(type,1200);

        return;

    }

    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

    }

    setTimeout(type,deleting ? 70 : 130);

}

type();

}