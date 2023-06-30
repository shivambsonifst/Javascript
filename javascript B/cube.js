/* Main function for palindrome */
function cubeNum() {
    const input = document.getElementById("cubeNumber").value;
    console.log(input);
    console.log(typeof input);
    const output = document.getElementById("cubeOutput");

    if (input !== "") {
        if (input > 0) {
            output.innerText = "The cube of "+input +" is :- " + input * input * input;
            output.style.color = "green";
            console.log("palindrome");
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
function cubeResetFunc() {
    document.getElementById("cubeNumber").value = "";
    document.getElementById("cubeOutput").innerText = "";
}