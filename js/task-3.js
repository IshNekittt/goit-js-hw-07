const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function changeGreetingName(e) {
  const processedValue = e.target.value.trim();
  if (!processedValue) {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = processedValue;
  }
}

input.addEventListener("input", changeGreetingName);
