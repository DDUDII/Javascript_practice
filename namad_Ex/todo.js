const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let todos = [];

//@@@@ todo 입력값을 저장해주는 함수 @@@@
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  //JSON.stringify --> 객체나 배열을 무조건 string으로 바꿔줌, 로컬스토리지에는 배열이 저장 안되기때문
}

//@@@@ 삭제 버튼 누를시에 대한 함수 @@@@
function delBtnClick(event) {
  const li = event.target.parentElement; //del버튼의 부모 노드 불러옴
  todos = todos.filter((item) => item.id !== parseInt(li.id)); //li.id는 문자형이어서 넘버로 바꿔주기
  //filter이용하여 li에 보여지는 것과 같은 id의 배열에 있는 것을 지우기
  li.remove();
  saveTodo(); //변경된 배열을 다시 저장하기 위해 호출해줌?!
}

// @@@@ 보여질 화면에 대한 함수 @@@@
function paintTodo(newTodo) {
  const li = document.createElement("li"); //js에서 li 태그 생성
  li.id = newTodo.id; //input값을 li로 보여지게
  const span = document.createElement("span"); //js에서 span 태그 생성
  span.innerText = newTodo.text; //span 내용에 input 값 @@@ 객체의 text로 @@@

  const deleteBtn = document.createElement("button"); //js에서 button 태그 생성
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", delBtnClick);

  li.appendChild(span); //자식으로 넣어주기
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

//@@@@ 클릭시 발생하는 이벤트 함수 @@@@@
function todoBtnClick(event) {
  event.preventDefault(); //form에서 클릭(submit)시 자동으로 새로고침 방지
  const newTodo = todoInput.value; //todo input 값을 변수에 복사해주기
  todoInput.value = ""; //input 값 제출 후 공백으로 만들어주기

  //---- 입력되는 input값을 객체롤 만들어서 id 주기 ----
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj); //배열에 객체상체로 넘겨주기
  paintTodo(newTodoObj); //화면 그림도 객체랑 연결(!!!!text와 id를 넘겨줄 수 있게!!!!)
  saveTodo();
}

todoForm.addEventListener("submit", todoBtnClick);

const savedtodos = localStorage.getItem(TODOS_KEY);

if (savedtodos !== null) {
  const parseTodos = JSON.parse(savedtodos); //로컬스토리지 저장 값을 object로 만들어주기
  todos = parseTodos; //새로고침 시 빈배열로 시작하는 게 아니라 기존 객체 유지후 새로고침!!!
  parseTodos.forEach(paintTodo); //!!!중요!!! 저장된 객체들을 차례로 화면에 보여지도록
}
