const designContainer = document.querySelector('.js-designContainer');
const fillContainer = document.querySelector('.js-fillContainer');
const shareContainer = document.querySelector('.js-shareContainer');

const designCollapsable = document.querySelector('.js-designCollapsable');
const fillCollapsable = document.querySelector('.js-fillCollapsable');
const shareCollapsable = document.querySelector('.js-shareCollapsable');

const hiddenshare = document.querySelector('.js-hiddenshare');

function hideDesign() {
  designContainer.classList.toggle('hidden');
  designCollapsable.classList.toggle('rotate');
}
designCollapsable.addEventListener('click', hideDesign);

function hideFill() {
  fillContainer.classList.toggle('hidden');
  fillCollapsable.classList.toggle('rotate');
}
fillCollapsable.addEventListener('click', hideFill);

function hideShare() {
  shareContainer.classList.toggle('hidden');
  hiddenshare.classList.toggle('hiddenshare');
  shareCollapsable.classList.toggle('rotate');
}
shareCollapsable.addEventListener('click', hideShare);