// localStorage가 null -> 입력받자 -> localStoarge에 저장한다.
// localStorage에 이름이 입력되어 있으면 -> display:none처리한다

const form = document.querySelector(".name-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".name-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";
const HIDDEN = "hidden";

function saveName(value) {
  localStorage.setItem(USER_LS, value);
}

function handleSubmit(event) {
  event.preventDefault(); // enter 적용안됨
  const currentValue = input.value;
  showGreeting(currentValue); // 불러오기만 할 뿐 저장되지는 않는다
  saveName(currentValue); // 저장한다
}

function askForName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function showGreeting(USER_LS) {
  form.classList.remove(SHOWING);
  form.classList.add(HIDDEN);
  greeting.classList.add(SHOWING);
  greeting.innerText = `hello ${USER_LS}`;
}

function enterName() {
  const currentUser_value = localStorage.getItem(USER_LS); // value값 저장
  if (currentUser_value === null) {
    askForName();
  } else {
    showGreeting(currentUser_value);
  }
}

function init() {
  enterName();
}

init();
