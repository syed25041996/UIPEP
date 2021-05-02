'use strict';

const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay1 = document.querySelector('.overlay1');
const overlay2 = document.querySelector('.overlay2');
const overlay3 = document.querySelector('.overlay3');
const btnCloseModal1 = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const btnsOpenModal1 = document.querySelector('.show-modal1');
const btnsOpenModal2 = document.querySelector('.show-modal2');
const btnsOpenModal3 = document.querySelector('.show-modal3');

const openModal1 = function () {
  modal1.classList.remove('hidden1');
  overlay1.classList.remove('hidden1');
};

const openModal2 = function () {
  modal2.classList.remove('hidden2');
  overlay2.classList.remove('hidden2');
};

const openModal3 = function () {
  modal3.classList.remove('hidden3');
  overlay3.classList.remove('hidden3');
};

const closeModal1 = function () {
  modal1.classList.add('hidden1');
  overlay1.classList.add('hidden1');
};

const closeModal2 = function () {
  modal2.classList.add('hidden2');
  overlay2.classList.add('hidden2');
};

const closeModal3 = function () {
  modal3.classList.add('hidden3');
  overlay3.classList.add('hidden3');
};

btnsOpenModal1.addEventListener('click', openModal1);
btnsOpenModal2.addEventListener('click', openModal2);
btnsOpenModal3.addEventListener('click', openModal3);

btnCloseModal1.addEventListener('click', closeModal1);
btnCloseModal2.addEventListener('click', closeModal2);
btnCloseModal3.addEventListener('click', closeModal3);

overlay1.addEventListener('click', closeModal1);
overlay2.addEventListener('click', closeModal2);
overlay3.addEventListener('click', closeModal3);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
//     closeModal();
//   }
// });
