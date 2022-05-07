let userInput = document.getElementById("user-input");
let inputList = document.getElementsByClassName("input");
let inputVal;

// Length Conversions
let mtToFt = 3.28084;
let mtToFtEl = document.getElementById("mt-ft");
let ftToMt = 0.3048;
let ftToMtEl = document.getElementById("ft-mt");

// Volume Conversions
let ltToGl = 0.264172;
let ltToGlEl = document.getElementById("lt-gl");
let glToLt = 3.78541;
let glToLtEl = document.getElementById("gl-lt");

// Mass Conversions
let klToPo = 2.20462;
let klToPoEl = document.getElementById("kl-po");
let poToKl = 0.453592;
let poToKlEl = document.getElementById("po-kl");

// Setting input classes to USER INPUT
function setInputs() {
  for (let input = 0; input < inputList.length; input++) {
    inputList[input].textContent = inputVal;
  }
  userInput.textContent = inputVal;
}

// Conversion function
function doConversion(ratio, el) {
  let result = inputVal * ratio;
  el.textContent = result.toFixed(3);
}

function calculate() {
  inputVal = document.getElementById("entered-input").value;
  setInputs();
  doConversion(mtToFt, mtToFtEl);
  doConversion(ftToMt, ftToMtEl);
  doConversion(ltToGl, ltToGlEl);
  doConversion(glToLt, glToLtEl);
  doConversion(klToPo, klToPoEl);
  doConversion(poToKl, poToKlEl);
}
