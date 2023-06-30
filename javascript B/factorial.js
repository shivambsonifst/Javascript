/* main function for factorial*/
function factorialFunc() {
    /* recursive function for factorial*/
    function factorial(x) {
        if (x == 0) {
            return 1
        }
        else {
            return x * factorial(x - 1)
        }
    }

    let factorialNumber = document.getElementById("factorialNumber").value; // input from user
    let output = document.getElementById("factorialOutput");   //For output
    const length = factorialNumber.toString().length;

    if (factorialNumber !== "") {
        if (factorialNumber >= 1) {
            if (length <= 3) {
                const result = factorial(factorialNumber);
                output.innerText = "The factorial of number you entered is " + result;
                output.style.color = "green"

            }
            else {
                output.innerText = " Note:- You can't Enter more than 3 digit";   //validation for string limiting digit
                output.style.color = "red";
            }
        }
        else if (factorialNumber <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive factorialNumbers";
            output.style.color = "red";
        }
        else {
            output.innerText = " Note:- please enter a number not a string.";   //validation for string
            output.style.color = "red";
        }
    }
    else {                                                // validation for invalid input
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}

/* Reset Functions */
function factoriaResetFunc() {
    document.getElementById("factorialNumber").value = "";
    document.getElementById("factorialOutput").innerText = "";
}
