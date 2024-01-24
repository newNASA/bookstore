
function asarlar_btn() {
  const asarlar_div = document.querySelector('.asarlari .bottom');
  asarlar_div.classList.toggle('asarlar-notscroll')
}

var gmMenu = document.querySelector('.gamburger-menu');
var headFix = document.querySelector('.header-fixer');
var headBg = document.querySelector('.head-bg');
var clearBtn = document.querySelector('.clear-btn');

gmMenu.addEventListener('click', () => {
  headFix.style.display = 'flex';
  headBg.style.display = 'flex';
});

clearBtn.addEventListener('click', () => {
  headFix.classList.add('nowork');
  headBg.classList.add('head-nowork');
  setTimeout(() => {
    headFix.classList.remove('nowork');
    headFix.style.display = 'none';
    headBg.classList.remove('head-nowork');
    headBg.style.display = 'none';
  }, 700);
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const controls = document.querySelectorAll('.slider-control div');
  let currentIndex = 0;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function setActiveControl(index) {
    controls.forEach((control, i) => {
      control.style.background = i === index ? 'var(--white)' : 'var(--light-gray)';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % controls.length;
    showSlide(currentIndex);
    setActiveControl(currentIndex);
  }

  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      setActiveControl(currentIndex);
    });
  });

  setInterval(nextSlide, 4000);
});


var log = document.querySelector('.log')
var sign = document.querySelector('.sign')

const subCategory = document.querySelector('.sub-category');

function subCategoryIn() {
  subCategory.style.opacity = '1';
  subCategory.style.pointerEvents = 'auto';
}

function subCategoryOut() {
  subCategory.style.opacity = '0';
  subCategory.style.pointerEvents = 'none';
}
