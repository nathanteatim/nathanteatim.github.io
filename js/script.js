// =====================
// TYPEWRITER EFFECT
// =====================

const text = [
"Writer.",
"Electronics Technician.",
"Systems Builder.",
"Future Germany Professional."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".hero h1").innerHTML = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

})();


// =====================
// FADE-IN ANIMATION
// =====================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll("section");

hiddenElements.forEach(el=>observer.observe(el));


// =====================
// BACK TO TOP BUTTON
// =====================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

};

topButton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =====================
// ACTIVE NAV LINKS
// =====================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-200){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


// =====================
// DARK MODE BUTTON
// =====================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.id="darkBtn";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
