/* Function for fabonacci series */
function fabonacciSeries() {

    const input = document.getElementById("fabonacciNumber").value;   //input from user
    console.log(input);
    const output = document.getElementById("fabinacciOutput");


    if (!input == "") {                                    // validation for blank string
        if (parseInt(input) > 0) {                                    // validation for positive string
            if (parseInt(input) <= 150) {                                 //validation for string limiting digit
                let firstNumber = 0;
                let secondNumber = 1;
                let nextNumber = 0;
                const result = [];
                for (let i = 1; i <= parseInt(input); i++) {              //loop for getting fabonacci numbers
                    result.push(firstNumber);
                    nextNumber = firstNumber + secondNumber;
                    firstNumber = secondNumber;
                    secondNumber = nextNumber;
                }
                output.innerText = "The Fabonacci Series is :- " + result;        //output for series  
                output.style.color = "green";
            }
            else {                                                          //validation for string limiting digit                                                          
                output.innerText = " Note:- You can't Enter more than 150.";
                output.style.color = "red";
            }
        }
        else if (input <= 0) {                                        // validation for negetive input
            output.innerText = " Note:- Please Enter Positive numbers";
            output.style.color = "red";
        }
        else {                                                                   //validation for string
            output.innerText = " Note:- please enter a number not a string.";
            output.style.color = "red";
        }
    }
    else {                                                 // validation for blank string
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}

/* Reset Functions  */
function FabonacciResetFunc() {
    document.getElementById("fabonacciNumber").value = "";
    document.getElementById("fabinacciOutput").innerText = "";
}  