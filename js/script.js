/*=========================================
SD NEGERI 1 CIJAWA
Official Website
Javascript
==========================================*/


// ================================
// Header berubah saat scroll
// ================================

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#005baa";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

}else{

header.style.background="rgba(0,91,170,.90)";
header.style.boxShadow="none";

}

});


// ================================
// Scroll To Top
// ================================

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});



// ================================
// Counter Statistik
// ================================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

}

updateCounter();

});



// ================================
// Fade Animation
// ================================

const fade=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

fade.forEach(item=>{

const top=item.getBoundingClientRect().top;

const screen=window.innerHeight;

if(top<screen-120){

item.classList.add("active");

}

});

});



// ================================
// Smooth Scroll Menu
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});



// ================================
// Lightbox Gallery
// ================================

const gallery=document.querySelectorAll(".galeri-item img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const light=document.createElement("div");

light.className="lightbox";

light.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(light);

light.addEventListener("click",()=>{

light.remove();

});

});

});




// ================================
// Navbar Active
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-120){

current=section.getAttribute("id");

}

});

navLinks.forEach(a=>{

a.classList.remove("active");

if(a.getAttribute("href")==="#"+current){

a.classList.add("active");

}

});

});




// ================================
// Typing Hero
// ================================

const text=[
"BERPRESTASI",
"SEHAT",
"INOVATIF",
"NASIONALIS",
"AGAMIS",
"RAMAH"
];

let count=0;

let index=0;

let currentText="";

let letter="";

(function type(){

if(document.querySelector(".typing")){

if(count===text.length){

count=0;

}

currentText=text[count];

letter=currentText.slice(0,++index);

document.querySelector(".typing").textContent=letter;

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1500);

}else{

setTimeout(type,120);

}

}

})();




// ================================
// Loading Screen
// ================================

window.onload=function(){

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

};




// ================================
// Parallax Hero
// ================================

window.addEventListener("scroll",()=>{

const bg=document.querySelector(".hero-bg");

if(bg){

bg.style.transform=`translateY(${window.scrollY*0.3}px)`;

}

});




// ================================
// Floating Animation
// ================================

const floating=document.querySelectorAll(".floating");

floating.forEach(item=>{

let position=0;

setInterval(()=>{

position++;

item.style.transform=`translateY(${Math.sin(position/10)*8}px)`;

},40);

});




// ================================
// Hover Card
// ================================

const cards=document.querySelectorAll(".card,.guru-card,.program-card,.prestasi-card,.berita-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.backgroundPosition=x+"px "+y+"px";

});

});