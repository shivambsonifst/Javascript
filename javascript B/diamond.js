/* Main Functions for printing diamond  */
function diamondFunction() {
    let n = document.getElementById("diamondNumber").value;
    let output = document.getElementById("diamondOutput");
    let string = "";

    if (n != "") {
        if (n > 1) {
            if(n < 10){
            // Upside pyramid
            for (let i = 1; i <= n; i++) {
                // printing spaces
                for (let j = n; j > i; j--) {
                    string += " ";
                }
                // printing star
                for (let k = 0; k < i * 2 - 1; k++) {
                    string += "*";
                }
                string += "\n";
            }
            // downside pyramid
            for (let i = 1; i <= n - 1; i++) {
                // printing spaces
                for (let j = 0; j < i; j++) {
                    string += " ";
                }
                // printing star
                for (let k = (n - i) * 2 - 1; k > 0; k--) {
                    string += "*";
                }
                string += "\n";
            }

            console.log(string);
            output.innerText = "SEE YOUR OUTPUT IN CONSOLE.";
            output.style.color = "green";
        }
        else {
            output.innerText = "Please enter number less than 10";
            output.style.color = "red";
        }
    }
        else if (n < 1) {
            output.innerText = "Please enter positive number.";
            output.style.color = "red";
        }
        else {
            output.innerText = "Please enter valid number.";
            output.style.color = "red";
        }
    }
    else {
        output.innerText = "Field can't be empty.";
        output.style.color = "red";
    }
}

//For Counting lines, space, words
function diamondResetFunc() {
    document.getElementById("diamondNumber").value = "";
    document.getElementById("diamondOutput").innerText = "";
  

}