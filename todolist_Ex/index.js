"use strict";

const form = document.querySelector(".formTodo");
const input = document.querySelector(".inputTodo");
const button = document.querySelector(".todoBtn");
const ul = document.querySelector(".ulTodo");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const textArea = document.querySelector(".textTodo");

//배열 할 일 데이터 만들기
const todoarr = [];

//입력버튼 클릭시 이벤트
form.addEventListener("submit", (event) => {
  event.preventDefault(); //제출 버튼 누를시
  //빈값 체크
  if (input.value == "") {
    alert("제목을 입력해주세요");
    return false;
  }

  if (textArea.value == "") {
    alert("본문을 입력해주세요");
    return false; //return false 해줘서 다음에 if문 없이 내용 입력되면 다음으로 진행
  }

  //내부 데이터 넣기.
  //todoarr.push

  //화면에 그리기
  paint();
});

function paint() {
  // 데이터 기반으로 짰으면 forEach 사용해서 li 불러왔어여 했는데 밑에는
  // 이미 li를 appendchild로 붙여놓아서 ul을 리셋해주는걸 넣어줌
  ul.innerHTML = "";

  const list = document.createElement("li"); //내용입력시 li태그로 만들어짐
  const checkList = document.createElement("input");
  checkList.type = "checkbox";
  const span = document.createElement("span"); //li태그안에 값을 span태그로 묶기
  span.innerText = input.value;
  list.appendChild(span);
  list.prepend(checkList); //li 안에 checkbox 넣기

  const modalBtn = document.createElement("button"); //모달버튼 만들기
  modalBtn.textContent = "내용보기";
  const reBtn = document.createElement("button"); //수정버튼 만들기
  reBtn.textContent = "수정";
  const deleteBtn = document.createElement("button"); //삭제버튼 만들기
  deleteBtn.textContent = "삭제";

  list.appendChild(modalBtn); //li안에 모달버튼 넣기
  list.appendChild(reBtn); //li안에 수정 버튼 넣기
  list.appendChild(deleteBtn); //li안에 삭제 버튼 넣기
  ul.appendChild(list); //ul안에 li 넣기

  //const openText = input.addEventListener('click', ()=>{})

  modalBtn.addEventListener("click", () => {});
  reBtn.addEventListener("click", () => {
    //프롬프트창에 내용 넣기
    const reInput = prompt("수정해주세요");
    span.innerText = reInput; //프롬프트창 내용으로 span값 바꾸기
  });
  deleteBtn.addEventListener("click", () => {
    //삭제버튼 누르면 li 지우기
    list.remove();
  });
  const deleteCheckedBtn = document.querySelector(".deleteCheckedBtn"); //체크된 항목 삭제 버튼

  deleteCheckedBtn.addEventListener("click", () => {
    //체크된 항목 지우기
    const checkedItems = ul.querySelectorAll(
      "li input[type='checkbox']:checked"
    );

    checkedItems.forEach((item) => {
      const listItem = item.parentNode;
      listItem.remove();
    });
  });

  deleteAllBtn.addEventListener("click", () => {
    //전체 삭제
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
  });

  checkList.addEventListener("change", (event) => {
    //체크박스 누르면 라인 생김
    if (event.currentTarget.checked) {
      list.style.textDecoration = "line-through";
    } else {
      list.style.textDecoration = "none";
    }
  });

  input.value = ""; //제목 추가후 공백으로
  textArea.value = ""; //내용 추가후 공백으로
}
