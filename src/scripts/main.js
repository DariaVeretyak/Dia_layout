'use strict';

const theme = document.querySelector('.page');

const changeTheme = document.querySelector('.header__theme');

changeTheme.addEventListener('click', (ev) => {
  theme.classList.toggle('page--color');
});

const sliderImg = document.querySelector('.slider__slideImg--1');
const sliderImgPrev = document.querySelector('.slider__slideImg--2');
const sliderImgNext = document.querySelector('.slider__slideImg--3');

const sliderPrev = document.querySelector('.slider__button--prev');
const sliderNext = document.querySelector('.slider__button--next');

sliderPrev.addEventListener('click', (ev) => {
  if (sliderImg.classList.contains('slider__slideImg--active')) {
    sliderImg.classList.remove('slider__slideImg--active');
    sliderImgPrev.classList.add('slider__slideImg--active');
    sliderPrev.setAttribute('disabled', true);
  } else if (sliderImgNext.classList.contains('slider__slideImg--active')) {
    sliderImgNext.classList.remove('slider__slideImg--active');
    sliderImg.classList.add('slider__slideImg--active');
    sliderNext.removeAttribute('disabled');
  }
});

sliderNext.addEventListener('click', (ev) => {
  if (sliderImg.classList.contains('slider__slideImg--active')) {
    sliderImg.classList.remove('slider__slideImg--active');
    sliderImgNext.classList.add('slider__slideImg--active');
    sliderNext.setAttribute('disabled', true);
  } else if (sliderImgPrev.classList.contains('slider__slideImg--active')) {
    sliderImgPrev.classList.remove('slider__slideImg--active');
    sliderImg.classList.add('slider__slideImg--active');
    sliderPrev.removeAttribute('disabled');
  }
});

const menuOpen = document.querySelector('.nav__menu');
const menuClose = document.querySelector('.nav__menuClose');
const menu = document.querySelector('.nav__list--header');

menuOpen.addEventListener('click', (ev) => {
  menu.classList.add('nav__list--header--active');
  menuClose.classList.add('nav__menuClose--active');
  menuOpen.classList.add('nav__menu--close');
  changeTheme.classList.add('header__theme--active');
});

menuClose.addEventListener('click', (ev) => {
  menu.classList.remove('nav__list--header--active');
  menuClose.classList.remove('nav__menuClose--active');
  menuOpen.classList.remove('nav__menu--close');
  changeTheme.classList.remove('header__theme--active');
});

// анимация
const anim = document.querySelectorAll('.anim');

function animOnScroll() {
  for (let index = 0; index < anim.length; index++) {
    const animItem = anim[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      (scrollY > animItemOffset - animItemPoint)
      && scrollY < (animItemOffset + animItemHeight)
    ) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('anim-no-hide')) {
        animItem.classList.remove('_active');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft
    = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop
    = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop, leff: rect.left + scrollLeft,
  };
}

if (anim.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  setTimeout(() => {
    animOnScroll();
  }, 200);
}
