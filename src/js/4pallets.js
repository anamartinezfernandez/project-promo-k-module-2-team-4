'use strict';

const designCard = document.querySelector('.section__article');
const design1 = document.querySelector('.js-design-1');
const design2 = document.querySelector('.js-design-2');
const design3 = document.querySelector('.js-design-3');

function changeDesign(event) {
  if (event.currentTarget.value === 'design-1') {
    designCard.classList.add('palets-1');
    designCard.classList.remove('palets-2');
    designCard.classList.remove('palets-3');
    console.log('121');
  }

  if (event.currentTarget.value === 'design-2') {
    designCard.classList.add('palets-2');
    designCard.classList.remove('palets-3');
    designCard.classList.remove('palets-1');
  }

  if (event.currentTarget.value === 'design-3') {
    designCard.classList.add('palets-3');
    designCard.classList.remove('palets-2');
    designCard.classList.remove('palets-1');
  }
}

design1.addEventListener('click', changeDesign);
design2.addEventListener('click', changeDesign);
design3.addEventListener('click', changeDesign);
