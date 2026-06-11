// =========================
// REVEAL ON SCROLL
// =========================

const revealElements = document.querySelectorAll(
'.milestone-card,.value-card,.education-card,.headgirl-card,.event-card,.debate-card,.anchor-card,.communication-card,.reading-card,.book-card,.writing-card,.book-showcase,.poetry-card,.nyaf-card,.exam-card,.project-card,.achievement-card,.participation-card,.sports-card,.creative-card,.skill-card,.future-card,.certificate-card,.fact-card,.contact-card'
);

function revealOnScroll() {

const triggerBottom = window.innerHeight * 0.85;

revealElements.forEach(element => {

const boxTop = element.getBoundingClientRect().top;

if(boxTop < triggerBottom){

element.style.opacity = "1";
element.style.transform = "translateY(0)";

}

});

}

revealElements.forEach(element => {

element.style.opacity = "0";
element.style.transform = "translateY(40px)";
element.style.transition =
"all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 120;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,15);

}
else{

counter.innerText = target;

}

};

updateCounter();

});


// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(pageYOffset >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});


// =========================
// TYPEWRITER EFFECT
// =========================

const textArray = [

"Student Leader",
"Author & Poet",
"Public Speaker",
"Future Entrepreneur",
"Creative Thinker",
"Web Creator"

];

let textIndex = 0;
let charIndex = 0;

const typeTarget =
document.getElementById(
"typewriter"
);

function typeEffect(){

if(!typeTarget) return;

if(
charIndex <
textArray[textIndex].length
){

typeTarget.textContent +=
textArray[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typeTarget.textContent =
textArray[textIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

textIndex++;

if(textIndex >= textArray.length){

textIndex = 0;

}

setTimeout(typeEffect,300);

}

}

if(typeTarget){

typeEffect();

}


// =========================
// FLOATING PARTICLES
// =========================

const canvas =
document.createElement("canvas");

canvas.id = "particles";

document.body.appendChild(canvas);

const ctx =
canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

const particles = [];

for(let i=0;i<60;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*4+1,

speedX:(Math.random()-0.5)*0.4,

speedY:(Math.random()-0.5)*0.4

});

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(255,255,255,0.45)";

ctx.fill();

p.x += p.speedX;
p.y += p.speedY;

if(p.x < 0) p.x = canvas.width;
if(p.x > canvas.width) p.x = 0;

if(p.y < 0) p.y = canvas.height;
if(p.y > canvas.height) p.y = 0;

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();


// =========================
// SCROLL TO TOP BUTTON
// =========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.background = "#ffbdd1";
topButton.style.color = "#24324A";
topButton.style.display = "none";
topButton.style.boxShadow =
"0 10px 25px rgba(0,0,0,.15)";

document.body.appendChild(
topButton
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

topButton.style.display =
"block";

}
else{

topButton.style.display =
"none";

}

}
);

topButton.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);