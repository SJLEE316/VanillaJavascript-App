// Logic
// Object를 사용해서 현재 시간을 가져옴
// 1초마다 reset되게 함

const clockContainer = document.querySelector(".clock");
const clock = document.createElement("span");

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clockContainer.appendChild(clock);
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
