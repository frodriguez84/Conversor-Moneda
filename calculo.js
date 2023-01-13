var usdCol, usdArg, col;

fetch('https://www.datos.gov.co/resource/32sa-8pi3.json')
  .then(response => response.json())
  .then(data => {

    data = data[0].valor
    usdCol = data
    //let value = "Hello World";
    document.getElementById("demo").innerHTML = data;
  });


usdArg = 400;
 
function colToUsd(col) {
  return col / usdCol;
}

function usdToArg(usd) {
  return usd * usdArg;
}

function processForm(event) {
  
  event.preventDefault();

  var inputElement = document.getElementById("col");
  col = inputElement.value;
  var final = usdToArg(colToUsd(col));
  console.log(final);

  var resultElement = document.getElementById("result");
  resultElement.textContent = "Pesos: $" + Math.trunc(final).toLocaleString();
}

var formElement = document.getElementById("conversion-form");
formElement.addEventListener("submit", processForm);


