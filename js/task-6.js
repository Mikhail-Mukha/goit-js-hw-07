function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

createBtn.addEventListener("click", () => {
    const amount = Number(input.value);

    if (amount >= 0 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    } else {
      alert("Please enter a number between 1 and 100.");
    }
})

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
})