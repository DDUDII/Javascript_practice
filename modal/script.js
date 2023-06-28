'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// 리팩토링!
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal); //openModal 사용으로 리팩토링!
}

//함수를 변수에 담아 리팩로링!!
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//모듈창 꺼짐 버튼 눌렀을때 모듈창 꺼짐
/*btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// 모듈창 밖을 눌렀을때 모듈창 꺼짐
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

//키보드 누를시 작동
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
