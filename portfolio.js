// ==================toggle icon navbar==================== //
let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ==================scroll section active link==================== //

let sections = documents.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach( links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

// ==================skicky navbar==================== //

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// ==================remove the toggle icon and navbar when click navbar link(scroll)==================== //

  menuIcon.classList.toggle(bx-x);
  navbar.classList.toggle('active');
};

// ================= scroll reveal ==================== //

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contactt form',{origin:'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content h1, .about-content',{origin:'right'});

// ================= typed js ==================== //

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Java fullstack Developer', 'fyuj'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});