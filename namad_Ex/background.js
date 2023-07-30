const images = ["바다2.jpg", "사막2.jpg", "수영장.jpg"]; //이미지 폴더에 있는 이미지 이름과 동일하게

const chosenImg = images[Math.floor(Math.random() * images.length)];

console.log(chosenImg);

const bgImg = document.createElement("img"); //createElement 자바스크립트로 html요소 생성하기

bgImg.src = `images/${chosenImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);
