// navbar section active color section


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.aside .nav li a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - 1 && scrollPosition < sectionTop + sectionHeight - 1) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});




// project-filter button option section


const buttons = document.querySelectorAll('.button-group button');
const projectBoxes = document.querySelectorAll('.project-box');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    const activeButton = document.querySelector('.button-group button.active');

    activeButton.classList.remove('active');
    button.classList.add('active');

    projectBoxes.forEach((projectBox) => {
      if (filterValue === '*') {
        projectBox.style.display = 'block';
      } 
      else if (projectBox.classList.contains(filterValue.replace('.', ''))) {
        projectBox.style.display = 'block';
      } 
      else {
        projectBox.style.display = 'none';
      }
    });
  });
});












// popup-project open and close section


const projectBox1 = document.querySelector('.p1');
const projectBox2 = document.querySelector('.p2');
const projectBox3 = document.querySelector('.p3');
const projectBox4 = document.querySelector('.p4');
const projectBox5 = document.querySelector('.p5');
const projectBox6 = document.querySelector('.p6');
const projectBox7 = document.querySelector('.p7');

const popupProject1 = document.querySelector('.p1-popup');
const popupProject2 = document.querySelector('.p2-popup');
const popupProject3 = document.querySelector('.p3-popup');
const popupProject4 = document.querySelector('.p4-popup');
const popupProject5 = document.querySelector('.p5-popup');
const popupProject6 = document.querySelector('.p6-popup');
const popupProject7 = document.querySelector('.p7-popup');

const closeButton1 = document.querySelector('.p1-popup .close-icon-button');
const closeButton2 = document.querySelector('.p2-popup .close-icon-button');
const closeButton3 = document.querySelector('.p3-popup .close-icon-button');
const closeButton4 = document.querySelector('.p4-popup .close-icon-button');
const closeButton5 = document.querySelector('.p5-popup .close-icon-button');
const closeButton6 = document.querySelector('.p6-popup .close-icon-button');
const closeButton7 = document.querySelector('.p7-popup .close-icon-button');


projectBox1.addEventListener('click', () => {
  popupProject1.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton1.addEventListener('click', () => {
  popupProject1.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox2.addEventListener('click', () => {
  popupProject2.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton2.addEventListener('click', () => {
  popupProject2.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox3.addEventListener('click', () => {
  popupProject3.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton3.addEventListener('click', () => {
  popupProject3.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox4.addEventListener('click', () => {
  popupProject4.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton4.addEventListener('click', () => {
  popupProject4.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox5.addEventListener('click', () => {
  popupProject5.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton5.addEventListener('click', () => {
  popupProject5.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox6.addEventListener('click', () => {
  popupProject6.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton6.addEventListener('click', () => {
  popupProject6.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox7.addEventListener('click', () => {
  popupProject7.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton7.addEventListener('click', () => {
  popupProject7.style.display = 'none';
  document.body.style.overflow = 'auto';
});





// aside section open onn the smaller screen


const aside = document.querySelector('.aside');
const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () => {
  aside.classList.toggle('open');
  navToggler.classList.toggle('close');
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    aside.classList.remove('open');
    navToggler.classList.remove('close');
  });
});
