// Logic
// 임의의 숫자를 반환(0~6)
// 그 숫자를 파일 이름으로 가진 image를 호출

const body = document.querySelector("body");

function setBgImg(number) {
  const bgImg = new Image();
  bgImg.src = `../src/images/${number}.jpg`;
  bgImg.classList.add("bgImg");
  body.appendChild(bgImg);
}

function getNumber() {
  const number = Math.ceil(Math.random() * 6); // 1~6까지의 임의의 정수 반환
  setBgImg(number);
}

function init() {
  getNumber();
}

init();
