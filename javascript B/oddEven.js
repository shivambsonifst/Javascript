/* main function of getting even and odd*/
function evenOdd() {

    //Message of every outputs
    const outputFunc = (message, color) =>{
        output.innerText = " Note:- " + message;
        output1.innerText = "";
        output.style.color = color;
    } 
    const oddEvenNumber1 = document.getElementById("oddEvenNumber1").value; //taking value from user
    console.log(oddEvenNumber1);
    const oddEvenNumber2 = document.getElementById("oddEvenNumber2").value; //taking value from user
    console.log(oddEvenNumber2);
    let output = document.getElementById("oddEvenoutput1"); //for printing output
    let output1 = document.getElementById("oddEvenoutput2"); //for printing output
    const length1 = oddEvenNumber1.toString().length;
    const length2 = oddEvenNumber2.toString().length;
    const evenNumber = [];
    const oddNumber = [];
    console.log(typeof oddEvenNumber1);
    console.log(typeof oddEvenNumber2);
    if (oddEvenNumber1 !== "" && oddEvenNumber2 !== "") {
        if (oddEvenNumber1 >= 0 && oddEvenNumber2 >= 0) {
            if (length1 <= 4 && length2 <= 4) {
                if (parseInt(oddEvenNumber2) > parseInt(oddEvenNumber1)) {
                    for (let i = parseInt(oddEvenNumber1); i <= parseInt(oddEvenNumber2); i++) {
                        if (i % 2 === 0) {                            //for checking even number
                            evenNumber.push(i);
                        }
                        else {                                             // for checking odd number

                            oddNumber.push(i);
                        }
                    }
                    output.innerText = "Even numbers are:- " + evenNumber;    //output for evenNumber
                    output.style.color = "green"
                    output1.innerText = "Odd numbers are:- " + oddNumber;      //output for oddNumber
                    output1.style.color = "green"
                }
                else {                                                                  //validation for string limiting digit
                    outputFunc("You can't enter Number 1 greater than or equal to number 2","red");    
                }
            }
            else {                                                                                 //validation for string limiting digit
                outputFunc("You can't Enter more than 4 digit","red");    
            }

        }

        else if (oddEvenNumber1 <= 0 && oddEvenNumber2 <= 0) {                                                // validation for negetive input
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
/* Reset Functions */
function resetFunc() {
    document.getElementById("oddEvenNumber1").value = "";
    document.getElementById("oddEvenNumber2").value = "";
    document.getElementById("oddEvenoutput1").innerText = "";
    document.getElementById("oddEvenoutput2").innerText = "";
}
