const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

// @@@@ 입력되는 값에 대한 함수 @@@@
function paintTodo(newTodo) {
  const li = document.createElement("li"); //li 태그 생성
  const span = document.createElement("span"); //span 태그 생성
  li.appendChild(span); //자식으로 넣어주기
  span.innerText = newTodo; //span 내용에 input 값
  todoList.appendChild(li);
}

//@@@@ 클릭시 발생하는 이벤트 함수 @@@@@
function todoBtnClick(event) {
  event.preventDefault(); //form에서 클릭(submit)시 자동으로 새로고침 방지
  const newTodo = todoInput.value; //todo input 값을 변수에 복사해주기
  todoInput.value = ""; //input 값 제출 후 공백으로 만들어주기
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", todoBtnClick);
