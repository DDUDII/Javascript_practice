"use strict";

const form = document.querySelector(".formTodo");
const input = document.querySelector(".inputTodo");
const button = document.querySelector(".todoBtn");
const ul = document.querySelector(".ulTodo");
const deleteAllBtn = document.querySelector(".deleteAllBtn");
const textArea = document.querySelector(".textTodo");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

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

  //if (textArea.value == "") {
  // alert("본문을 입력해주세요");
  // return false; //return false 해줘서 다음에 if문 없이 내용 입력되면 다음으로 진행
  // }

  //내부 데이터: todoarr배열에 input값과 textArea 값 같이 넣어주기
  todoarr.push({
    subject: input.value,
    content: textArea.value,
  });
  //textarr.push(textArea.value);
  console.log(todoarr);
  //console.log(textarr);

  //화면에 그리기

  paint();
});

function paint() {
  // 데이터 기반으로 짰으면 forEach 사용해서 li 불러왔어야 했는데 밑에는
  // 이미 li를 appendchild로 붙여놓아서 ul을 리셋해주는걸 넣어줌
  ul.innerHTML = "";

  const openModal = (e) => {
    console.log(e.target); //@@@@복습@@@@ --> target으로 data-index라고 만들어준 속성 불러오기
    let index = e.target.getAttribute("data-index");
    console.log(index);
    modal.querySelector(".modal_cont").textContent = todoarr[index].content;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  //forEach 사용해서 i(인덱스 번호) 가져오기 (현재값, 인덱스)
  todoarr.forEach((todo, i) => {
    const list = document.createElement("li"); //내용입력시 li태그로 만들어짐
    const checkList = document.createElement("input");
    checkList.type = "checkbox";
    const span = document.createElement("span"); //li태그안에 값을 span태그로 묶기
    span.innerText = todo.subject; //span 안에 subject ---> input value 넣기
    list.appendChild(span);
    list.prepend(checkList); //li 안에 checkbox 넣기

    const modalBtn = document.createElement("button"); //모달버튼 만들기
    modalBtn.textContent = "내용보기";
    modalBtn.setAttribute("data-index", i); //@@@@복습@@@@ --> setAttribute 이용해서 모달버튼에 인덱스 번호 가져올수 있는 속성 만들어주기
    const reBtn = document.createElement("button"); //수정버튼 만들기
    reBtn.textContent = "수정";
    const deleteBtn = document.createElement("button"); //삭제버튼 만들기
    deleteBtn.textContent = "삭제";

    list.appendChild(modalBtn); //li안에 모달버튼 넣기

    list.appendChild(reBtn); //li안에 수정 버튼 넣기
    list.appendChild(deleteBtn); //li안에 삭제 버튼 넣기
    ul.appendChild(list); //ul안에 li 넣기

    modalBtn.addEventListener("click", openModal);

    reBtn.addEventListener("click", () => {
      //@@@@@@@@ 인덱스로 키값 빼내기 @@@@@@@@@@
      input.value = todo.subject;
      textArea.value = todo.content;

      const updatedTodo = {
        subject: input.value,
        content: textArea.value,
      };
      if ((todoarr[i] = updatedTodo)) {
        list.remove();
        todoarr.splice(i, 1);
      }
      console.log(todoarr);
    });
    deleteBtn.addEventListener("click", () => {
      //삭제버튼 누르면 li 지우기
      list.remove();
      todoarr.splice(i, 1);

      console.log(todoarr);
    });

    checkList.addEventListener("change", (event) => {
      //체크박스 누르면 라인 생김
      if (event.currentTarget.checked) {
        list.style.textDecoration = "line-through";
      } else {
        list.style.textDecoration = "none";
      }
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
        todoarr.splice(i, 1);

        console.log(todoarr);
      });
    });

    deleteAllBtn.addEventListener("click", () => {
      //전체 삭제
      while (ul.firstChild) {
        ul.firstChild.remove();
        todoarr.splice(i, 1);

        console.log(todoarr);
      }
    });
  });

  input.value = ""; //제목 추가후 공백으로
  textArea.value = ""; //내용 추가후 공백으로
}
