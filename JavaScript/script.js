// navbar section active color section start

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

// navbar section active color section end


// project-filter button option section start

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

// project-filter button option section end


// popup-project open and close section start

const projectBox1 = document.querySelector('.p1');
const projectBox2 = document.querySelector('.p2');
const projectBox3 = document.querySelector('.p3');
const projectBox4 = document.querySelector('.p4');
const projectBox5 = document.querySelector('.p5');
const projectBox6 = document.querySelector('.p6');
const projectBox7 = document.querySelector('.p7');
const projectBox8 = document.querySelector('.p8');
const projectBox9 = document.querySelector('.p9');

const popupProject1 = document.querySelector('.p1-popup');
const popupProject2 = document.querySelector('.p2-popup');
const popupProject3 = document.querySelector('.p3-popup');
const popupProject4 = document.querySelector('.p4-popup');
const popupProject5 = document.querySelector('.p5-popup');
const popupProject6 = document.querySelector('.p6-popup');
const popupProject7 = document.querySelector('.p7-popup');
const popupProject8 = document.querySelector('.p8-popup');
const popupProject9 = document.querySelector('.p9-popup');

const closeButton1 = document.querySelector('.p1-popup .close-icon-button');
const closeButton2 = document.querySelector('.p2-popup .close-icon-button');
const closeButton3 = document.querySelector('.p3-popup .close-icon-button');
const closeButton4 = document.querySelector('.p4-popup .close-icon-button');
const closeButton5 = document.querySelector('.p5-popup .close-icon-button');
const closeButton6 = document.querySelector('.p6-popup .close-icon-button');
const closeButton7 = document.querySelector('.p7-popup .close-icon-button');
const closeButton8 = document.querySelector('.p8-popup .close-icon-button');
const closeButton9 = document.querySelector('.p9-popup .close-icon-button');


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

projectBox8.addEventListener('click', () => {
  popupProject8.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton8.addEventListener('click', () => {
  popupProject8.style.display = 'none';
  document.body.style.overflow = 'auto';
});

projectBox9.addEventListener('click', () => {
  popupProject9.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeButton9.addEventListener('click', () => {
  popupProject9.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// popup-project open and close section end


// aside section open on the smaller screen start

const navToggler = document.querySelector('.nav-toggler');
const menuIcon = navToggler.querySelector('.bx-menu');
const closeIcon = navToggler.querySelector('.bx-x');
const nav = document.querySelector('.nav');
const aside = document.querySelector('.aside');
navToggler.addEventListener('click', () => {
  if (menuIcon.style.display !== 'none') {
    nav.classList.add('show');
    aside.classList.add('open');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    nav.classList.remove('show');
    aside.classList.remove('open');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('show');
    aside.classList.remove('open');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});

// aside section open on the smaller screen end


// Popup service section open and close start 

const serviceItems = document.querySelectorAll('.s1, .s2, .s3');
const popupServices = document.querySelectorAll('.popup-service');

serviceItems.forEach((serviceItem, index) => {
  serviceItem.addEventListener('click', () => {
    const popupService = popupServices[index];
    popupService.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});
document.querySelectorAll('.close-icon-button').forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    const popupService = closeButton.parentElement.parentElement.parentElement;
    popupService.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// Popup service section open and close end

