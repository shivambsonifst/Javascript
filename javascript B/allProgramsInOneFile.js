/* FUNCTION FOR DOUBLE INPUT */
function doubleFunction() {
    const input1 = document.getElementById("doubleInputNumber1").value; //taking value from user
    const input2 = document.getElementById("doubleInputNumber2").value; //taking value from user

    evenOdd(input1, input2);
    armstrongFunc(input1, input2);
    primeNumber(input1, input2);
    swapNum(input1, input2);


    /* main function of getting even and odd*/
    function evenOdd(input1, input2) {
        //Message of every outputs
        const outputFunc = (message, color) => {
            output.innerText = message;
            output1.innerText = "";
            output.style.color = color;
        }
        const oddEvenNumber1 = input1; //taking value from user
        console.log(oddEvenNumber1);
        const oddEvenNumber2 = input2; //taking value from user
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
                        outputFunc("ODD EVEN NUMBER:- You can't enter Number 1 greater than or equal to number 2", "red");
                    }
                }
                else {                                                                                 //validation for string limiting digit
                    outputFunc("ODD EVEN NUMBER:- You can't Enter more than 4 digit", "red");
                }

            }

            else if (oddEvenNumber1 <= 0 && oddEvenNumber2 <= 0) {                                                // validation for negetive input
                outputFunc("ODD EVEN NUMBER:- Please Enter Positive numbers", "red");
            }
            else {                                                                   //validation for string
                outputFunc("ODD EVEN NUMBER:- please enter a number not a string.", "red");
            }
        }
        else {                                                // validation for invalid input
            outputFunc("ODD EVEN NUMBER:- Field can't be empty", "red")
        }

    }


    /* main function for armstrongnumber */
    function armstrongFunc(input1, input2) {
        let output = document.getElementById("armstrongOutput");           //for output
        const armstrongNumber1 = input1;        // user input
        console.log(armstrongNumber1);
        const armstrongNumber2 = input2;        // user input
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
                        else {
                            output.innerText = "No armstrong numbers are there between this range."
                            output.style.color = "red"
                        }

                    }
                    else {
                        output.innerText = " Armstrong's number :- You can't Enter more than 5 digit";   //validation for string limiting digit
                        output.style.color = "red";
                    }
                }
                else {                                                                  //validation for string limiting digit
                    output.innerText = "Armstrong's number :- You can't enter Number 1 greater than or equal to number 2";
                    output.style.color = "red";
                }
            }

            else if (armstrongNumber1 <= 0 && armstrongNumber2 <= 0) {                                                // validation for negetive input
                output.innerText = " Armstrong's number :- Please Enter Positive numbers";
                output.style.color = "red";
            }
            else {
                output.innerText = " Armstrong's number :- please enter a number not a string.";   //validation for string
                output.style.color = "red";
            }
        }
        else {                                                // validation for invalid input
            output.innerText = " Armstrong's number :- Field can't be empty";
            output.style.color = "red";
        }
    }

    /* main function for getting prime numbers*/
    function primeNumber(input1, input2) {

        let primeNumber1 = input1;  // lower range from user
        let primeNumber2 = input2;  // higher range from user
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
                        primeNumberOutput.innerText = "Prime Numbers:- You can't enter Number 1 greater than or equal to number 2";
                        primeNumberOutput.style.color = "red";
                    }
                }
                else {
                    primeNumberOutput.innerText = " Prime Numbers:- You can't Enter more than 5 digit";   //validation for limiting digit
                    primeNumberOutput.style.color = "red";
                }
            }
            else if (primeNumber1 < 0 && primeNumber2 < 0) {                                                // validation for invalid input
                primeNumberOutput.innerText = " Prime Numbers:- Please Enter Positive numbers";
                primeNumberOutput.style.color = "red"
            }
            else {                                                // validation for invalid input
                primeNumberOutput.innerText = " Prime Numbers:- please enter a number not a string.";
                primeNumberOutput.style.color = "red"
            }
        }
        else {                                                // validation for empty input
            primeNumberOutput.innerText = " Prime Numbers:- Field can't be empty";
            primeNumberOutput.style.color = "red"
        }

    }

    /* main function of getting swapping numbers*/
    function swapNum(input1, input2) {

        //Message of every outputs
        const outputFunc = (message, color) => {
            output.innerText = message;
            output.style.color = color;
        }

        let newinput1 = input1;
        let newinput2 = input2;
        let output = document.getElementById("swapOutput"); //for printing output
        const length1 = newinput1.toString().length;
        const length2 = newinput2.toString().length;


        if (!newinput1 == "" && !newinput2 == "") {
            if (parseInt(newinput1) > 0 && parseInt(newinput2) > 0) {
                if (length1 <= 4 && length2 <= 4) {
                    newinput1 = parseInt(newinput1) + parseInt(newinput2);
                    newinput2 = parseInt(newinput1) - parseInt(newinput2);
                    newinput1 = parseInt(newinput1) - parseInt(newinput2);

                    output.innerText = " Swapped value for number 1:- " + newinput1 + " And for Number 2:- " + newinput2;
                    output.style.color = "green";
                }
                else {                                                                                 //validation for string limiting digit
                    outputFunc("Swapping Number:- You can't Enter more than 4 digit", "red");
                }

            }

            else if (parseInt(newinput1) <= 0 && parseInt(newinput2) <= 0) {                                                // validation for negetive input
                outputFunc("Swapping Number:- Please Enter Positive numbers", "red");
            }
            else {                                                                   //validation for string
                outputFunc("Swapping Number:- Please enter a number not a string.", "red");
            }
        }
        else {                                                // validation for invalid input
            outputFunc("Swapping Number:- Field can't be empty", "red")
        }
    }

}

/* FUNCTION FOR SINGLE INPUT */
function singleFunction() {
    const inputnumber = document.getElementById("singleInputNumber").value; //taking value from user

    factorialFunc(inputnumber);
    fabonacciSeries(inputnumber);
    palindromeNum(inputnumber);
    cubeNum(inputnumber);

    /* main function for factorial*/
    function factorialFunc(inputnumber) {
        /* recursive function for factorial*/
        function factorial(x) {
            if (x == 0) {
                return 1
            }
            else {
                return x * factorial(x - 1)
            }
        }

        let factorialNumber = inputnumber; // input from user
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
                    output.innerText = " Factorial:- You can't Enter more than 3 digit";   //validation for string limiting digit
                    output.style.color = "red";
                }
            }
            else if (factorialNumber <= 0) {                                                // validation for negetive input
                output.innerText = " Factorial:- Please Enter Positive factorialNumbers";
                output.style.color = "red";
            }
            else {
                output.innerText = " Factorial:- please enter a number not a string.";   //validation for string
                output.style.color = "red";
            }
        }
        else {                                                // validation for invalid input
            output.innerText = " Factorial:- Field can't be empty";
            output.style.color = "red";
        }
    }

    /* Function for fabonacci series */
    function fabonacciSeries(inputnumber) {

        const input = inputnumber;   //input from user
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
                    output.innerText = " Fabonacci Series:- You can't Enter more than 150.";
                    output.style.color = "red";
                }
            }
            else if (input <= 0) {                                        // validation for negetive input
                output.innerText = " Fabonacci Series:- Please Enter Positive numbers";
                output.style.color = "red";
            }
            else {                                                                   //validation for string
                output.innerText = " Fabonacci Series:- please enter a number not a string.";
                output.style.color = "red";
            }
        }
        else {                                                 // validation for blank string
            output.innerText = " Fabonacci Series:- Field can't be empty";
            output.style.color = "red";
        }
    }

    /* Main function for palindrome */
    function palindromeNum(inputnumber) {
        const input = inputnumber;
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
                    output.innerText = " Palindrome:- You can't Enter more than 10 digit";   //validation for limiting digit
                    output.style.color = "red";
                }
            }
            else if (input <= 0) {                                                // validation for negetive input
                output.innerText = " Palindrome:- Please Enter Positive numbers";
                output.style.color = "red";
            }
            else {
                output.innerText = " Palindrome:- please enter a number not a string.";   //validation for string
                output.style.color = "red";
            }
        }
        else {
            output.innerText = " Palindrome:- Field can't be empty";
            output.style.color = "red";
        }
    }

    /* Main function for palindrome */
    function cubeNum(inputnumber) {
        const input = inputnumber;
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
                output.innerText = " The cube:- Please Enter Positive numbers";
                output.style.color = "red";
            }
            else {
                output.innerText = " The cube:- please enter a number not a string.";   //validation for string
                output.style.color = "red";
            }
        }
        else {
            output.innerText = " The cube:- Field can't be empty";
            output.style.color = "red";
        }
    }

}

/* FUNCTION FOR TEXT AREAS INPUT */
function textAreaFunction() {
    const textAreaInputText = document.getElementById("textAreaInput").value; //taking value from user

    vowelCons(textAreaInputText);
    lineWordSpace(textAreaInputText);

    /* Main Functions for vowel and consonents  */
    function vowelCons() {
        const input = textAreaInputText;               //input from user
        const output1 = document.getElementById("vowelConsonentOutput1");             //output variable for vowel    
        const output2 = document.getElementById("vowelConsonentOutput2");             //output variable for consonents

        let text = input.toLowerCase();                                     //converting text into lowercase


        let vowelList = [];
        let consonentList = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {      //for getting vowel
                vowelList.push(text[i]);
            }
            else if (text[i] === ' ' || text[i] === '\n' ) {                                                           // excluding spaces from text
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
            output1.innerText = "Vowel and Consonent:- Please enter a string";
            output1.style.color = "red";
        }
    }

    /* Main Functions for vowel and consonents  */
    function lineWordSpace() {
        let paragraphData = ""
        paragraphData = textAreaInputText;               //input from user
        const output1 = document.getElementById("countOutputText1");             //output variable for vowel    
        const output2 = document.getElementById("countOutputText2");             //output variable for consonents
        const output3 = document.getElementById("countOutputText3");             //output variable for consonents
        let newLineCount = 0;
        let spaceCount = 0;
        let wordCount = 0;
        output1.innerHTML = "";
        output2.innerHTML = "";
        output3.innerHTML = "";

       
        //---------line and space---------------
        for (let index = 0; index < paragraphData.length; index++) {
            if (paragraphData[index] == " ") {
                spaceCount++;
            }
            if (paragraphData[index]== "\n") {
                newLineCount++;
            }
        }
        // --------word---------------------
        let wordArr = paragraphData.split(" ");
        let wordArr2 = []
        for (let i = 0; i < wordArr.length; i++) {
            wordArr2.push(wordArr[i].split("\n"));
        }
        for (let i = 0; i < wordArr2.length; i++) {
            for (let j = 0; j < wordArr2[i].length; j++) {
                if (!wordArr2[i][j] == "") {
                    wordCount++;
                }
            }
        }
        if (newLineCount > 0 || spaceCount > 0 || wordCount > 0) {
            output1.innerText = "Total number of lines found are:- " + ++newLineCount;
            output1.style.color = "green";
            output2.innerText = "Total number of spaces found are:- " + spaceCount;
            output2.style.color = "green";
            output3.innerText = "Total number of words found are:- " + wordCount;
            output3.style.color = "green";
        }
        else {
            output1.innerText = "Line, word and Spaces:- Please enter a string";
            output1.style.color = "red";
        }
    }

}

/* All Reset Functions*/
function doubleFunctionReset() {
    document.getElementById("doubleInputNumber1").value = "";
    document.getElementById("doubleInputNumber2").value = "";
    // For odd even
    document.getElementById("oddEvenoutput1").innerText = "";
    document.getElementById("oddEvenoutput2").innerText = "";
    // For armstrong number series
    document.getElementById("armstrongOutput").innerText = "";
    // For Prime number series
    document.getElementById("primeNumberOutput").innerText = "";
    //For swapping numbers
    document.getElementById("swapOutput").innerText = "";
}
function singleFunctionReset() {
    document.getElementById("singleInputNumber").value = "";
    // For Factorial
    document.getElementById("factorialOutput").innerText = "";
    // For fabonacci number series
    document.getElementById("fabinacciOutput").innerText = "";
    // For palindrome number 
    document.getElementById("palindromeOutput").innerText = "";
    // For cube
    document.getElementById("cubeOutput").innerText = "";
}

function textAreaFunctionReset() {
    document.getElementById("textAreaInput").value = "";
    //For vowel Consonent
    document.getElementById("vowelConsonentOutput1").innerText = "";
    document.getElementById("vowelConsonentOutput2").innerText = "";

    //For Counting lines, space, words
    document.getElementById("countOutputText1").innerText = "";
    document.getElementById("countOutputText2").innerText = "";
    document.getElementById("countOutputText3").innerText = "";
}