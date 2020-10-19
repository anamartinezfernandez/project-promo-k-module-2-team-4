const inputName = document.querySelector('.js-inputName');
const inputPosition = document.querySelector('.js-inputPosition');
const inputEmail = document.querySelector('.js-inputEmail');
const inputPhone = document.querySelector('.js-inputPhone');
const inputLinkedin = document.querySelector('.js-inputLinkedin');
const inputGithub = document.querySelector('.js-inputGithub');

const cardName = document.querySelector('.js-cardName');
const cardPosition = document.querySelector('.js-cardPosition');
const cardEmail = document.querySelector('.js-cardEmail');
const cardPhone = document.querySelector('.js-cardPhone');
const cardLinkedin = document.querySelector('.js-cardLinkedin');
const cardGithub = document.querySelector('.js-cardGithub');

function changeName() {
  cardName.innerHTML = inputName.value;
  if (inputName.value === '') {
    cardName.innerHTML = 'Lisa Simpson';
  }
}
inputName.addEventListener('keyup', changeName);

function changePosition() {
  cardPosition.innerHTML = inputPosition.value;
  if (inputPosition.value === '') {
    cardPosition.innerHTML = 'Saxophonist';
  }
}
inputPosition.addEventListener('keyup', changePosition);

function changeEmail() {
  cardEmail.setAttribute('href', cardEmail.href + inputEmail.value);
}
inputEmail.addEventListener('blur', changeEmail);

function changePhone() {
  cardPhone.setAttribute('href', cardPhone.href + inputPhone.value);
}
inputPhone.addEventListener('blur', changePhone);

function changeLinkedin() {
  cardLinkedin.setAttribute('href', cardLinkedin.href + inputLinkedin.value);
}
inputLinkedin.addEventListener('blur', changeLinkedin);

function changeGithub() {
  cardGithub.setAttribute('href', cardGithub.href + inputGithub.value);
}
inputGithub.addEventListener('blur', changeGithub);

const buttonShare = document.querySelector('.js-button--create');
const twitterContainer = document.querySelector('.js-twitterContainer');
const shareTwitter = document.querySelector('.js-section__link--share');

function hideTwitter() {
  twitterContainer.classList.remove('hidden');
  shareTwitter.classList.remove('hidden--border');
  buttonShare.classList.add('change-button');
}

buttonShare.addEventListener('click', hideTwitter);
