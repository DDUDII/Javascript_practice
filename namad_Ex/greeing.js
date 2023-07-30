const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함한 변수 이름 쓸땐 대문자 관습
const USERNAME_KEY = "username";

loginForm.classList.remove("hidden");
//loginBtn을 눌렀을때의 이벤트 발생에 대한 내용을 함수로
function loginBtnClick(event) {
  event.preventDefault(); //form에서 클릭(submit)시 자동으로 새로고침 방지
  const username = loginInput.value; //input 값을 변수에 복사 해주기

  if (username === "") {
    alert("이름을 입력해 주세요!");
  } //else if (username.length > 10) {
  //alert("이름이 너무 길어요!");   <-- input태그 속성에서 지정가능
  else {
    localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 input 값 저장 키값, 입력값 @@

    paintGreetings(username);

    console.log(username);
    console.log("click");
    console.log(greeting);
  }
}
//중복되는 코드들 함수안으로 넣어주기
function paintGreetings(username) {
  //인자값 넣어주고
  greeting.classList.remove(HIDDEN_CLASSNAME); //값을 h1으로 보여주고
  greeting.innerText = `hello ${username}`; //h1의 텍스트는 이것으로
  loginForm.classList.add(HIDDEN_CLASSNAME); //값 있으면 form은 없애주기
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  //로컬스토리지에 값이 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form을 보여줌
  loginForm.addEventListener("submit", loginBtnClick); // 함수를 이용해서 제출 됐을 시 일어나는 이벤트
} else {
  //로컬스토리지에 값이 있으면
  paintGreetings(saveUsername); //인자로 saveUsername 넣어주고
}
