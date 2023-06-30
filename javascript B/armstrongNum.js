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

                    if (res.length>0) {
                        output.innerText = "Armstrong's number are :-" + res;
                    output.style.color = "Green"
                    }
                    else{
                        output.innerText = "No armstrong numbers are there between this range."
                        output.style.color = "red"
                    }
                    
                }
                else {
                    output.innerText = " Note:- You can't Enter more than 5 digit";   //validation for string limiting digit
                    output.style.color = "red";
                }
            }
            else {                                                                  //validation for string limiting digit
                output.innerText = "You can't enter Number 1 greater than or equal to number 2";
                output.style.color = "red";
            }
        }

        else if (armstrongNumber1 <= 0 && armstrongNumber2 <= 0) {                                                // validation for negetive input
            output.innerText = " Note:- Please Enter Positive numbers";
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


/*  RESET BUTTON  */
function resetFunc() {
    document.getElementById("armstrongNumber1").value = "";
    document.getElementById("armstrongNumber2").value = "";
    document.getElementById("armstrongOutput").innerText = "";
}