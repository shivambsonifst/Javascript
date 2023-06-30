/* main function of getting even and odd*/

function swapNum() {

        //Message of every outputs
        const outputFunc = (message, color) =>{
            output.innerText = " Note:- " + message;
            output.style.color = color;
        }

    let input1 = document.getElementById("swapNumber1").value;
    let input2 = document.getElementById("swapNumber2").value;
    let output = document.getElementById("swapOutput"); //for printing output
    const length1 = input1.toString().length;
    const length2 = input2.toString().length;


    if (!input1 == "" && !input2 == "") {
        if (parseInt(input1) > 0 && parseInt(input2) > 0) {
            if (length1 <= 4 && length2 <= 4) {
                input1 = parseInt(input1) + parseInt(input2);
                input2 = parseInt(input1) - parseInt(input2);
                input1 =parseInt(input1) - parseInt(input2);

                output.innerText = " Swapped value for number 1:- " + input1 + " And for Number 2:- " + input2;
                output.style.color = "green";
            }
            else {                                                                                 //validation for string limiting digit
                outputFunc("You can't Enter more than 4 digit","red");    
            }

        }

        else if (parseInt(input1) <= 0 && parseInt(input2) <= 0) {                                                // validation for negetive input
            outputFunc("Please Enter Positive numbers","red");    
        }
        else {                                                                   //validation for string
            outputFunc("please enter a number not a string.","red");    
        }
    }
    else {                                                // validation for invalid input
        outputFunc("Field can't be empty","red")
    }
}

/* Reset Functions  */
function swapResetFunc() {
    document.getElementById("swapNumber1").value = "";
    document.getElementById("swapNumber2").value = "";
    document.getElementById("swapOutput").innerText = "";
}
