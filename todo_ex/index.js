"use strict";

const form = document.querySelector(".formTodo");
const input = document.querySelector(".inputText");
const ul = document.querySelector(".ulList");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value !== "") {
    const list = document.createElement("div"); //내용 입력시 li태그로 만들어짐
    list.innerText = input.value;
    const checkList = document.createElement("input");
    checkList.type = "checkbox";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    ul.appendChild(list); //ul태그의 자식 태그로 li태그 만들기
    ul.appendChild(checkList);
    ul.appendChild(deleteBtn);

    checkList.addEventListener("change", (event) => {
      //리스트를 클릭하면 라인 생김
      if (event.currentTarget.checked) {
        list.style.textDecoration = "line-through";
      } else {
        list.style.textDecoration = "none";
      }
      deleteBtn.addEventListener("click", (event) => {
        ul.removeChild(event.currentTarget.parrentNode);
      });
    });

    input.value = ""; //내용 입력후 빈칸으로
  } else {
    alert("할 일을 입력해주세요!"); //내용 입력 안할시 경고창
  }
});
