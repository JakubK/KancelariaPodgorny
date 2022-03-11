//  Navigation 
const navbar = document.querySelector('.navbar');
const firstSection = document.getElementsByTagName('section')[0];
const navOptions = document.querySelector('.navbar__options');

document.addEventListener('scroll', () => {
  if(navOptions.classList.contains('navbar__options--toggled') || window.scrollY > navbar.clientHeight)
    navbar.classList.add('scrolled');
  else
    navbar.classList.remove('scrolled');
});

const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  if(!navOptions.classList.contains('navbar__options--toggled')) {
    navOptions.classList.add('navbar__options--toggled');
    navbar.classList.add('scrolled');
  }
  else {
    navOptions.classList.remove('navbar__options--toggled');
    navbar.classList.remove('scrolled');
  }
});

//  Specs

const testSpec = document.querySelector('.spec');
const specList = document.querySelector('.specs__list');

const leftArrow = document.querySelector('.specs__left');
const rightArrow = document.querySelector('.specs__right');
const amount = testSpec.clientWidth;
let scrollLeft = 0;


leftArrow.addEventListener('mousedown', () => {
  moveList(-amount);
})

rightArrow.addEventListener('mousedown', () => {
  moveList(amount);
})


const moveList = (amount) => {
  scrollLeft += amount;
  if(scrollLeft < 0) {
    scrollLeft = 0;
    return;
  }
  if(scrollLeft > specList.scrollWidth) {
    scrollLeft = specList.scrollWidth;
    return;
  }
  specList.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}


//  Carousel

const slides = document.querySelectorAll('.carousel__frame');
const slideNav = document.querySelector('.carousel__nav');
const slideElement = document.createElement('span');
slideElement.classList.add('carousel__btn');

for(let i = 0;i < slides.length;i++) {
  slideNav.appendChild(slideElement.cloneNode(false));
}

const enableSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.style.display = 'none';
    if(i == index)
      slide.style.display = 'block';
  });
}

const slideButtons = document.querySelectorAll('.carousel__btn');
slideButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    enableSlide(index);
  })
})

enableSlide(0);
