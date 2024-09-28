const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function changeGreetingName(e) {
  if (!e.target.value.trim()) {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = e.target.value.trim();
  }
}

input.addEventListener("input", changeGreetingName);
