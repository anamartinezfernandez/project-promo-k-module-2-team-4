"use strict";

//FORMULARIO
const inputName = document.querySelector(".js-inputName");
const inputPosition = document.querySelector(".js-inputPosition");
const inputEmail = document.querySelector(".js-inputEmail");
const inputPhone = document.querySelector(".js-inputPhone");
const inputLinkedin = document.querySelector(".js-inputLinkedin");
const inputGithub = document.querySelector(".js-inputGithub");

const cardName = document.querySelector(".js-cardName");
const cardPosition = document.querySelector(".js-cardPosition");
const cardEmail = document.querySelector(".js-cardEmail");
const cardPhone = document.querySelector(".js-cardPhone");
const cardLinkedin = document.querySelector(".js-cardLinkedin");
const cardGithub = document.querySelector(".js-cardGithub");

function changeName() {
  cardName.innerHTML = inputName.value;
  if (inputName.value === "") {
    cardName.innerHTML = "Lisa Simpson";
  }
}
inputName.addEventListener("keyup", changeName);

function changePosition() {
  cardPosition.innerHTML = inputPosition.value;
  if (inputPosition.value === "") {
    cardPosition.innerHTML = "Saxophonist";
  }
}
inputPosition.addEventListener("keyup", changePosition);

function changeEmail() {
  cardEmail.setAttribute("href", cardEmail.href + inputEmail.value);
}
inputEmail.addEventListener("blur", changeEmail);

function changePhone() {
  cardPhone.setAttribute("href", cardPhone.href + inputPhone.value);
}
inputPhone.addEventListener("blur", changePhone);

function changeLinkedin() {
  cardLinkedin.setAttribute("href", cardLinkedin.href + inputLinkedin.value);
}
inputLinkedin.addEventListener("blur", changeLinkedin);

function changeGithub() {
  cardGithub.setAttribute("href", cardGithub.href + inputGithub.value);
}
inputGithub.addEventListener("blur", changeGithub);

//COLAPSABLES
const designContainer = document.querySelector(".js-designContainer");
const fillContainer = document.querySelector(".js-fillContainer");
const shareContainer = document.querySelector(".js-shareContainer");

const designCollapsable = document.querySelector(".js-designCollapsable");
const fillCollapsable = document.querySelector(".js-fillCollapsable");
const shareCollapsable = document.querySelector(".js-shareCollapsable");

const hiddenshare = document.querySelector(".js-hiddenshare");

function hideDesign() {
  designContainer.classList.toggle("hidden");
  designCollapsable.classList.toggle("rotate");
}
designCollapsable.addEventListener("click", hideDesign);

function hideFill() {
  fillContainer.classList.toggle("hidden");
  fillCollapsable.classList.toggle("rotate");
}
fillCollapsable.addEventListener("click", hideFill);

function hideShare() {
  shareContainer.classList.toggle("hidden");
  hiddenshare.classList.toggle("hiddenshare");
  shareCollapsable.classList.toggle("rotate");
}
shareCollapsable.addEventListener("click", hideShare);
