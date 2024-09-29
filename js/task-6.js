function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(value) {
  const documentFragment = document.createDocumentFragment();
  let sizeValue = 30;
  for (let i = 0; i < value; i++) {
    const newElem = document.createElement("div");
    newElem.style.width = `${sizeValue}px`;
    newElem.style.height = `${sizeValue}px`;
    newElem.style.backgroundColor = getRandomHexColor();
    documentFragment.append(newElem);
    sizeValue += 10;
  }
  outputDiv.append(documentFragment);
}

const outputDiv = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

destroyBtn.addEventListener("click", () => {
  outputDiv.innerHTML = "";
});

createBtn.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  if (inputValue > 100 || inputValue < 1) return;
  document.querySelector("input").value = "";
  outputDiv.innerHTML = "";
  createBoxes(inputValue);
});
