const buttonReset = document.querySelector('.js-button--reset');
const profileImageCard = document.querySelector('.js__profile-image');
const url = './assets/images/lisa_simpson.png';
const smallImage = document.querySelector('.js__profile-preview');
const urlSmall = ' ';

function reset() {
  inputName.value = '';
  cardName.innerHTML = 'Lisa Simpson';
  inputPosition.value = '';
  cardPosition.innerHTML = 'Saxophonist';
  inputEmail.value = '';
  cardEmail.href = 'mailto:';
  inputPhone.value = '';
  cardPhone.href = 'tel:';
  inputLinkedin.value = '';
  cardLinkedin.href = 'https://';
  inputGithub.value = '';
  cardGithub.href = 'https://';

  profileImageCard.style.backgroundImage = `url(${url})`;

  smallImage.style.backgroundImage = `url(${urlSmall})`;
}

buttonReset.addEventListener('click', reset);
