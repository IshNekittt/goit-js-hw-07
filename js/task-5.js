function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector(".change-color");
buttonChange.addEventListener("click", setBackgroundColor);

function setBackgroundColor() {
  const newColor = getRandomHexColor();
  const body = document.querySelector("body");
  const outputSpan = document.querySelector(".color");
  body.style.backgroundColor = newColor;
  outputSpan.textContent = newColor;

  // Я додав ще функционалу для кращого відображення тексту і його читабельності.
  // Так як змінювати оригінальний код заборонено, я реалізував це через querySelectorAll
  const paragraphs = document.querySelectorAll("p");
  if (isColorDark(newColor)) {
    paragraphs[1].style.color = "#fff";
  } else {
    paragraphs[1].style.color = "#000";
  }
}

function isColorDark(hexColor) {
  hexColor = hexColor.replace("#", "");

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  return brightness < 128;
}
