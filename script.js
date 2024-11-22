'use strict';
const overlay = document.querySelector('.overlay');
const btnOpenmodal = document.querySelectorAll('.show-modal');
const btnClosemodal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');

const openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenmodal.length; i++) {
    btnOpenmodal[i].addEventListener('click', openmodal);
}
btnClosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function(w){
if(w.key=='Escape'&& !modal.classList.contains('hidden'))

closemodal();


})
