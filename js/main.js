// header
const menu = document.getElementById("menu__humbergar");
const img = document.getElementById("header__img");
const mask = document.getElementById("mask");
menu.addEventListener('click',() => {
  menu.classList.toggle('active');
  img.classList.toggle('active');
  mask.classList.toggle('active');
});
