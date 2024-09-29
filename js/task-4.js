const form = document.forms[0];
form.addEventListener("submit", sendingForm);
function sendingForm(e) {
  e.preventDefault();
  const elemArray = Array.from(e.currentTarget.elements);
  const resultObj = {};
  for (const elem of elemArray) {
    if (elem.tagName === "INPUT") {
      const processedValue = elem.value.trim();
      if (!processedValue) {
        alert("All form fields must be filled in");
        return;
      } else {
        resultObj[elem.name] = processedValue;
      }
    }
  }
  console.log(resultObj);
  e.currentTarget.reset();
}
