/* main function for getting prime numbers*/

function primeNumber() {

  let primeNumber1 = document.getElementById("primeNumber1").value;  // lower range from user
  let primeNumber2 = document.getElementById("primeNumber2").value;  // higher range from user
  const length1 = primeNumber1.toString().length;
  const length2 = primeNumber2.toString().length;
  let primeNumberOutput = document.getElementById("primeNumberOutput");      // for primeNumberOutput
  const res = [];
  if (primeNumber1 !== "" && primeNumber2 !== "") {
    if (primeNumber1 >= 0 && primeNumber2 >= 0) {                     // for validation
      if (length1 <= 5 && length2 <= 5) {
        if (parseInt(primeNumber2) > parseInt(primeNumber1)) {
          for (let i = primeNumber1; i <= primeNumber2; i++) {
            let temp = 0;
            for (let j = 2; j < i; j++) {
              if (i % j === 0) {
                temp = 1;
                break;
              }
            }
            if (i > 1 && temp === 0) {                    //pushing elements in array
              res.push(i);
            }
            primeNumberOutput.innerText = "Prime Numbers are:- " + res;
            primeNumberOutput.style.color = "green"
          }
        }
        else {                                                                  //validation for string limiting digit
          primeNumberOutput.innerText = "You can't enter Number 1 greater than or equal to number 2";
          primeNumberOutput.style.color = "red";
        }
      }
      else {
        primeNumberOutput.innerText = " Note:- You can't Enter more than 5 digit";   //validation for limiting digit
        primeNumberOutput.style.color = "red";
      }
    }
    else if (primeNumber1 < 0 && primeNumber2 < 0) {                                                // validation for invalid input
      primeNumberOutput.innerText = " Note:- Please Enter Positive numbers";
      primeNumberOutput.style.color = "red"
    }
    else {                                                // validation for invalid input
      primeNumberOutput.innerText = " Note:- please enter a number not a string.";
      primeNumberOutput.style.color = "red"
    }
  }
  else {                                                // validation for empty input
    primeNumberOutput.innerText = " Note:- Field can't be empty";
    primeNumberOutput.style.color = "red"
  }

}


/* Reset Functions  */
function resetFunc() {
  document.getElementById("primeNumber1").value = "";
  document.getElementById("primeNumber2").value = "";
  document.getElementById("primeNumberOutput").innerText = "";
}   
