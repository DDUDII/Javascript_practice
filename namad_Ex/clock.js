const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //seconds 로 따로 만들어주고  String 사용하여 문자로 만들어준 뒤 padStart로 0 붙여주기
  const clockEx = `${hours}:${mins}:${seconds}`;
  clock.innerText = clockEx;
}

getClock(); //함수를 먼저 호출하면 시계 바로 실행

//interval: 매 n초마다 실행
setInterval(getClock, 1000);

//timeout: n초 후 한번 실행
//setTimeout(sayHello, 1500);
