// Your code goes here
const nav = document.querySelector(".nav-container");

nav.addEventListener('mouseover', () => {
    nav.style.backgroundColor = 'grey';
    nav.style.color = 'white';
   

})

const link = document.querySelectorAll(".nav .nav-link");

link.forEach(el => {
    el.addEventListener('click', (event) => {
        el.style.backgroundColor = 'red';
        el.style.color = 'white';
        event.preventDefault();
        TweenMax.to(el, 3, {y:100, rotation: 90});

    })
})

const bus = document.querySelector(".intro img");
window.addEventListener('resize', () => {
    bus.style.transform = 'scale(0.8)';
    
})

const content = document.querySelectorAll(".content-section");

content.forEach( el => {
    window.addEventListener('scroll', ()=> {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
})
})

const letter = document.querySelector(".intro h2");

letter.addEventListener('dblclick', () => {
    letter.style.fontSize = '5rem';
})

const des = document.querySelectorAll(".destination");

des.forEach( el => {
 el.addEventListener('click', () => {
     el.innerHTML = ` <h2>Adventure Awaits</h2>
     <p>Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.</p> 
     <p>Expedition colorful design simple excursion blogger blogger design WordPress design, design organized website theme.</p>`;
 })
})

 const button = document.querySelectorAll(".destination .btn");

button.forEach( el => {
    el.addEventListener('click', (event) => {
        el.style.backgroundColor = "red";
        el.textContent = "THIS IS PRESSED";
       event.stopPropagation();
    })
})