const API_KEY = config.apikey;

function geoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you are in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherSpan = document.querySelector("#weather span:first-child"); //html span에 들어갈 내용 불러오기
      const citySpan = document.querySelector("#weather span:last-child");
      citySpan.innerText = data.name;
      weatherSpan.innerText = `${data.main.temp}${data.weather[0].main}`;
    });
  //json으로 내용물 추출 후 data 불러오기
}
function geoError() {
  alert("지역을 불러올 수 없습니다");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError); //위치 좌표 제공
