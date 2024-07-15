import { STUDENTS } from "./db/server.js"

const btnOpen = document.querySelector(".btn__open");
const register = document.querySelector(".register");
const overlay = document.querySelector(".overlay");

const model = document.querySelector(".model");
const modelName = document.querySelector(".model_name");
const modelSurname = document.querySelector(".model_surname");
const modelAge = document.querySelector(".model_age");
const modelAddress = document.querySelector(".model_address");
const modelBtn = document.querySelector(".model__btn");
const modelScore = document.querySelector(".model_score");
const modelClose = document.querySelector(".model__close");

const tableContent = document.querySelector(".table__content");

let students = JSON.parse(localStorage.getItem("STUDENTS")) || STUDENTS;

for (let i = 1; i <= 9; i += 0.5) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  modelScore.appendChild(option);
}

function createCard(data) {
  while (tableContent.firstChild) {
    tableContent.firstChild.remove();
  }
  data.forEach(user => {
    let card = document.createElement("tr");
    card.innerHTML = `
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td>${user.score}</td>
    `;
    tableContent.appendChild(card);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("STUDENTS", JSON.stringify(students));
}

model.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = modelName.value;
  let surname = modelSurname.value;
  let age = modelAge.value;
  let address = modelAddress.value;
  let score = modelScore.value;

  let newStudent = {
    id: new Date().getTime(),
    name,
    surname,
    age,
    address,
    score
  };

  students.push(newStudent);
  model.reset();
  createCard(students);
  saveToLocalStorage();  
});

btnOpen.addEventListener("click", () => {
  register.style.display = 'flex';
});

modelBtn.addEventListener("click", () => {
  register.style.display = 'none';
});

overlay.addEventListener("click", () => {
  register.style.display = 'none';
});

modelClose.addEventListener("click", () => {
  register.style.display = 'none';
});

createCard(students);
