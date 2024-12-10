const number = document.getElementById('number');
const button = document.getElementById('convert-btn');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  let processedNumber = Number(number.value.trim());
  if (isNaN(processedNumber) || number.value.trim() === "") {
    output.innerText = "Please enter a valid number";
  } else if (processedNumber < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (processedNumber > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const lista = [
      ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
      ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
      ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];
    let rezultat = [];
    
    while (processedNumber > 0) {
      lista.forEach(([caracter, numar]) => {
        while (processedNumber >= numar) {
          rezultat.push(caracter);
          processedNumber -= numar;
        }
      });
      console.log(rezultat)
      return output.innerText= rezultat.join("")
    }
    
  }
});
