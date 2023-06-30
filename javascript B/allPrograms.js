/* main function of getting even and odd*/
function evenOdd() {

    //Message of every outputs
    const outputFunc = (message, color) => {
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
                        if (i % 2 !== 0) {                                             // for checking odd number

                            oddNumber.push(i);
                        }
                    }
                    output.innerText = "Even numbers are:- " + evenNumber;    //output for evenNumber
                    output.style.color = "green"
                    output1.innerText = "Odd numbers are:- " + oddNumber;      //output for oddNumber
                    output1.style.color = "green"
                }
                if (parseInt(oddEvenNumber2) < parseInt(oddEvenNumber1)) {                                                                  //validation for string limiting digit
                    outputFunc("You can't enter Number 1 greater than or equal to number 2", "red");
                }
            }
            if (length1 > 4 && length2 > 4)  {                                                                                 //validation for string limiting digit
                outputFunc("You can't Enter more than 4 digit", "red");
            }

        }

        if (oddEvenNumber1 <= 0 && oddEvenNumber2 <= 0) {                                                // validation for negetive input
            outputFunc("Please Enter Positive numbers", "red");
        }
                                                                      
    }
    if (oddEvenNumber1 === "" && oddEvenNumber2 === "") {                                                // validation for invalid input
        outputFunc("Field can't be empty", "red")
    }

}

/* main function for armstrongnumber */
function armstrongFunc() {
    let output = document.getElementById("armstrongOutput");           //for output
    const armstrongNumber1 = document.getElementById("armstrongNumber1").value;        // user input
    console.log(armstrongNumber1);
    const armstrongNumber2 = document.getElementById("armstrongNumber2").value;        // user input
    console.log(armstrongNumber2);

    const length1 = armstrongNumber1.toString().length;
    const length2 = armstrongNumber2.toString().length;
    if (armstrongNumber1 !== "" && armstrongNumber2 !== "") {                                            // validation for empty string
        if (parseInt(armstrongNumber1) > 0 && parseInt(armstrongNumber2) > 0) {                                           //validation for positive input
            if (parseInt(armstrongNumber2) > parseInt(armstrongNumber1)) {
                if (length1 <= 5 && length2 <= 5) {
                    /*  function for checking number is armstrong or not */
                    const isArmstrong = number => {
                        let temp = parseInt(number);
                        const len = temp.toString().length;
                        let res = 0;
                        while (temp > 0) {
                            let rem = temp % 10;
                            res = parseInt(res) + (rem ** len);
                            temp = parseInt(temp / 10);
                        }
                        return res === number;
                    };

                    const res = [];
                    for (let i = parseInt(armstrongNumber1); i <= parseInt(armstrongNumber2); i++) {
                        if (isArmstrong(i)) {
                            res.push(i);
                        }
                    }

                    if (res.length > 0) {
                        output.innerText = "Armstrong's number are :-" + res;
                        output.style.color = "Green"
                    }
                    if (res.length < 0) {
                        output.innerText = "No armstrong numbers are there between this range."
                        output.style.color = "red"
                    }

                }
                if (length1 > 5 && length2 > 5) {
                    output.innerText = " Note:- You can't Enter more than 5 digit";   //validation for string limiting digit
                    output.style.color = "red";
                }
            }
            if (parseInt(armstrongNumber2) < parseInt(armstrongNumber1)) {                                                                  //validation for string limiting digit
                output.innerText = "You can't enter Number 1 greater than or equal to number 2";
                output.style.color = "red";
            }
        }

        if (armstrongNumber1 <= 0 && armstrongNumber2 <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive numbers";
            output.style.color = "red";
        }
        
    }
    if (armstrongNumber1 === "" && armstrongNumber2 === "") {                                                // validation for invalid input
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}

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
                if (parseInt(primeNumber2) < parseInt(primeNumber1)) {                                                                  //validation for string limiting digit
                    primeNumberOutput.innerText = "You can't enter Number 1 greater than or equal to number 2";
                    primeNumberOutput.style.color = "red";
                }
            }
            if (length1 > 5 && length2 > 5) {
                primeNumberOutput.innerText = " Note:- You can't Enter more than 5 digit";   //validation for limiting digit
                primeNumberOutput.style.color = "red";
            }
        }
        if (primeNumber1 < 0 && primeNumber2 < 0) {                                                // validation for invalid input
            primeNumberOutput.innerText = " Note:- Please Enter Positive numbers";
            primeNumberOutput.style.color = "red"
        }
    }
    if (primeNumber1 === "" && primeNumber2 === "")  {                                                // validation for empty input
        primeNumberOutput.innerText = " Note:- Field can't be empty";
        primeNumberOutput.style.color = "red"
    }

}

/* main function for factorial*/
function factorialFunc() {
    /* recursive function for factorial*/
    function factorial(x) {
        if (x === 0) {
            return 1
        }
        if (x !== 0) {
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
            if (length > 3) {
                output.innerText = " Note:- You can't Enter more than 3 digit";   //validation for string limiting digit
                output.style.color = "red";
            }
        }
        if (factorialNumber <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive factorialNumbers";
            output.style.color = "red";
        }
    }
    if (factorialNumber === "") {                                                // validation for invalid input
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}

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

/* Main function for palindrome */
function palindromeNum() {
    const input = document.getElementById("palindromeNumber").value;
    console.log(input);
    console.log(typeof input);

    const output = document.getElementById("palindromeOutput");
    const length = input.toString().length;
    console.log(length);
    {
        if (input > 0) {
            if (input.length <= 10) {
                for (let i = 0; i < (length / 2) - 1; i++) {
                    console.log(i);
                    if (input[i] !== input[length - 1 - i]) {
                        output.innerText = input + " is Not Palindrome";
                        output.style.color = "red";

                        console.log("not palindrome");
                    }
                    if (input[i] === input[length - 1 - i]) {
                        output.innerText = input + " is Palindrome";
                        output.style.color = "green";
                        console.log("palindrome");
                    }
                }
            }
            if (input.length >= 10) {
                output.innerText = " Note:- You can't Enter more than 10 digit";   //validation for limiting digit
                output.style.color = "red";
            }
        }
        if (input <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive numbers";
            output.style.color = "red";
        }
        
            output.innerText = " Note:- please enter a number not a string.";   //validation for string
            output.style.color = "red";
        
    }
    if (input === "") {
        output.innerText = " Note:- Field can't be empty";
        output.style.color = "red";
    }
}

/* Main function for palindrome */
function cubeNum() {
    const input = document.getElementById("cubeNumber").value;
    console.log(input);
    console.log(typeof input);
    const output = document.getElementById("cubeOutput");

    if (input !== "") {
        if (input > 0) {
            output.innerText = "The cube of " + input + " is :- " + input * input * input;
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
/* main function of getting swapping numbers*/

function swapNum() {

    //Message of every outputs
    const outputFunc = (message, color) => {
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
                input1 = parseInt(input1) - parseInt(input2);

                output.innerText = " Swapped value for number 1:- " + input1 + " And for Number 2:- " + input2;
                output.style.color = "green";
            }
            else {                                                                                 //validation for string limiting digit
                outputFunc("You can't Enter more than 4 digit", "red");
            }

        }

        else if (parseInt(input1) <= 0 && parseInt(input2) <= 0) {                                                // validation for negetive input
            outputFunc("Please Enter Positive numbers", "red");
        }
        else {                                                                   //validation for string
            outputFunc("please enter a number not a string.", "red");
        }
    }
    else {                                                // validation for invalid input
        outputFunc("Field can't be empty", "red")
    }
}

/* Main Functions for vowel and consonents  */
function vowelCons() {
    const input = document.getElementById("vowelConsonentInput").value;               //input from user
    const output1 = document.getElementById("vowelConsonentOutput1");             //output variable for vowel    
    const output2 = document.getElementById("vowelConsonentOutput2");             //output variable for consonents

    let text = input.toLowerCase();                                     //converting text into lowercase
    console.log(text);

    let vowelList = [];
    let consonentList = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {      //for getting vowel
            vowelList.push(text[i]);
        }
        else if (text[i] === ' ') {                                                           // excluding spaces from text
            continue;
        }
        else if (text[i] === '0' || text[i] === '1' || text[i] === '2' || text[i] === '3' || text[i] === '4' || text[i] === '5' || text[i] === '6' || text[i] === '7' || text[i] === '8' || text[i] === '9') {      //removing numbers
            continue;
        }
        else {                                                                // for getting consonents
            consonentList.push(text[i]);
        }
    }
    if (vowelList != 0 && consonentList != 0) {
        output1.innerText = "Total Vowels found are:- " + vowelList;
        output1.style.color = "green";
        output2.innerText = "Total Consonents found are:- " + consonentList;
        output2.style.color = "green";
    }
    else {
        output1.innerText = "Please enter a string";
        output1.style.color = "red";
    }
}

/* Main Functions for vowel and consonents  */
function lineWordSpace() {
    const input = document.getElementById("countOutputText").value;               //input from user
    const output1 = document.getElementById("countOutputText1");             //output variable for vowel    
    const output2 = document.getElementById("countOutputText2");             //output variable for consonents
    const output3 = document.getElementById("countOutputText3");             //output variable for consonents
    let text = input.toLowerCase();                                     //converting text into lowercase
    let line = 1;
    let space = 0;
    let word = 0;
    let split = text.split(' ');
    let j = 0;
    for (let i = 1; i < text.length; i++) {

        if (text[i] === '\n') {      //for getting count of new line
            line++;
        }
        else if (text[i] === ' ') {                                                           // counting spaces from text
            space++;
        }
        while (j < split.length) {
            if (split[j] != "") {
                word++;
            }
            j++
        }
    }
    if (line > 1 || word > 0 || space > 0) {
        output1.innerText = "Total number of lines found are:- " + line;
        output1.style.color = "green";
        output2.innerText = "Total number of spaces found are:- " + space;
        output2.style.color = "green";
        output3.innerText = "Total number of words found are:- " + word;
        output3.style.color = "green";
    }
    else {
        output1.innerText = "Please enter a string";
        output1.style.color = "red";
    }
}


/* All Reset Functions*/


// For odd even
function oddEvenresetFunc() {
    document.getElementById("oddEvenNumber1").value = "";
    document.getElementById("oddEvenNumber2").value = "";
    document.getElementById("oddEvenoutput1").innerText = "";
    document.getElementById("oddEvenoutput2").innerText = "";
}

// For armstrong number series
function armstrongResetFunc() {
    document.getElementById("armstrongNumber1").value = "";
    document.getElementById("armstrongNumber2").value = "";
    document.getElementById("armstrongOutput").innerText = "";
}
// For Prime number series
function primeResetFunc() {
    document.getElementById("primeNumber1").value = "";
    document.getElementById("primeNumber2").value = "";
    document.getElementById("primeNumberOutput").innerText = "";
}
// For Factorial
function factoriaResetFunc() {
    document.getElementById("factorialNumber").value = "";
    document.getElementById("factorialOutput").innerText = "";
}
// For fabonacci number series
function FabonacciResetFunc() {
    document.getElementById("fabonacciNumber").value = "";
    document.getElementById("fabinacciOutput").innerText = "";
}
// For palindrome number 
function palindromeResetFunc() {
    document.getElementById("palindromeNumber").value = "";
    document.getElementById("palindromeOutput").innerText = "";
}
// For cube  
function cubeResetFunc() {
    document.getElementById("cubeNumber").value = "";
    document.getElementById("cubeOutput").innerText = "";
}
//For swapping numbers
function swapResetFunc() {
    document.getElementById("swapNumber1").value = "";
    document.getElementById("swapNumber2").value = "";
    document.getElementById("swapOutput").innerText = "";
}
//For vowel Consonent
function vowelConsonentResetFunc() {
    document.getElementById("vowelConsonentInput").value = "";
    document.getElementById("vowelConsonentOutput1").innerText = "";
    document.getElementById("vowelConsonentOutput2").innerText = "";
}
//For Counting lines, space, words
function countResetFunc() {
    document.getElementById("countOutputText").value = "";
    document.getElementById("countOutputText1").innerText = "";
    document.getElementById("countOutputText2").innerText = "";
    document.getElementById("countOutputText3").innerText = "";
}
