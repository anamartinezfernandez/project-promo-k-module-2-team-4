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

// PALETAS
const design1 = document.querySelector(".js-design-1");
const design2 = document.querySelector(".js-design-2");
const design3 = document.querySelector(".js-design-3");

const wrapper = document.querySelector(".section__article--wrapper");
const circle = document.querySelectorAll(".icons__list--item");


function changeDesign(event) {
  console.log(event.currentTarget.value);
 if (event.currentTarget.value === "design-1")  {
  wrapper.classList.add ("section__article--wrapper");
  wrapper.classList.remove ("section__article--wrapper2");
  wrapper.classList.remove ("section__article--wrapper3");
  cardName.classList.add ("color1");
  cardName.classList.remove ("color4");
  cardName.classList.remove ("color7");
  cardPosition.classList.add ("color2");
  cardPosition.classList.remove ("color5");
  cardPosition.classList.remove ("color8");
  for (const eachitem of circle) {
    eachitem.classList.add ("color3");
    eachitem.classList.remove ("color6");
    eachitem.classList.remove ("color9");
    }
  }
  
 
 if (event.currentTarget.value === "design-2") {
  wrapper.classList.add ("section__article--wrapper2");
  wrapper.classList.remove ("section__article--wrapper");
  wrapper.classList.remove ("section__article--wrapper3");
  cardName.classList.add ("color4");
  cardName.classList.remove ("color1");
  cardName.classList.remove ("color7");
  cardPosition.classList.add ("color5");
  cardPosition.classList.remove ("color2");
  cardPosition.classList.remove ("color8");
  for (const eachitem of circle) {
    eachitem.classList.add ("color6");
    eachitem.classList.remove ("color3");
    eachitem.classList.remove ("color9");
  }
 }
 if (event.currentTarget.value === "design-3") {
  wrapper.classList.add ("section__article--wrapper3");
  wrapper.classList.remove ("section__article--wrapper");
  wrapper.classList.remove ("section__article--wrapper2");
  cardName.classList.add ("color7");
  cardName.classList.remove ("color4");
  cardName.classList.remove ("color1");
  cardPosition.classList.add ("color8");
  cardPosition.classList.remove ("color5");
  cardPosition.classList.remove ("color2");
  for (const eachitem of circle) {
    eachitem.classList.add ("color9");
    eachitem.classList.remove ("color3");
    eachitem.classList.remove ("color6");
  }
 }
}


design1.addEventListener("click", changeDesign);
design2.addEventListener("click", changeDesign);
design3.addEventListener("click", changeDesign);