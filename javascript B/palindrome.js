/* Main function for palindrome */
function palindromeNum() {
    const input = document.getElementById("palindromeNumber").value;
    console.log(input);
    console.log(typeof input);

    const output = document.getElementById("palindromeOutput");
    const length = input.toString().length;
    console.log(length);
    if (input !== "") {
        if (input > 0) {
            if (input.length <= 10) {
                for (let i = 0; i < (length / 2) - 1; i++) {
                    console.log(i);
                    if (input[i] !== input[length - 1 - i]) {
                        output.innerText = input + " is Not Palindrome";
                        output.style.color = "red";

                        console.log("not palindrome");
                    }
                    else {
                        output.innerText = input + " is Palindrome";
                        output.style.color = "green";
                        console.log("palindrome");
                    }
                }
            }
            else {
                output.innerText = " Note:- You can't Enter more than 10 digit";   //validation for limiting digit
                output.style.color = "red";
            }
        }
        else if (input <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive numbers";
            output.style.color = "red";
        }
        else {
            output.innerText = " Note:- please enter a number not a string.";   //validation for string
            output.style.color = "red";
        }
    }
    else {
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}
/* Reset Functions */
function palindromeResetFunc() {
    document.getElementById("palindromeNumber").value = "";
    document.getElementById("palindromeOutput").innerText = "";
}