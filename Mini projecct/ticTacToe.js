instruction = document.getElementById("instruction");
instruction.innerHTML = "First Player starts as <b>Player X</b> <br> Second Player as <b>Player 0</b>";
let input1 = document.getElementById("input1").disabled = false;
let input2 = document.getElementById("input2").disabled = false;
let input3 = document.getElementById("input3").disabled = false;
let input4 = document.getElementById("input4").disabled = false;
let input5 = document.getElementById("input5").disabled = false;
let input6 = document.getElementById("input6").disabled = false;
let input7 = document.getElementById("input7").disabled = false;
let input8 = document.getElementById("input8").disabled = false;
let input9 = document.getElementById("input9").disabled = false;


function startButton() {
    message("", "")
    instruction = document.getElementById("instruction");
    instruction.innerHTML = "";
    let button = document.getElementById("button");
    button.innerHTML = "RESET";


    // Function to reset game
    if (button.innerHTML === "RESET") {
        let button = document.getElementById("button");
        button.onclick = function () {
            location.reload();
        }
    }

}


// Function called whenever user tab on any box
function myfunc() {

    let input1, input2, input3, input4, input5, input6, input7, input8, input9, print;
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    input3 = document.getElementById("input3").value;
    input4 = document.getElementById("input4").value;
    input5 = document.getElementById("input5").value;
    input6 = document.getElementById("input6").value;
    input7 = document.getElementById("input7").value;
    input8 = document.getElementById("input8").value;
    input9 = document.getElementById("input9").value;
    print = document.getElementById("print");

    // Checking if Player X won or not
    if ((input1 == "X") && (input2 == "X") && (input3 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")
    }
    else if (
        (input1 == "X") && (input4 == "X") && (input7 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input7 == "X") && (input8 == "X") && (input9 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input3 == "X") && (input6 == "X") && (input9 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input1 == "X") && (input5 == "X") && (input9 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input3 == "X") && (input5 == "X") && (input7 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input2 == "X") && (input5 == "X") && (input8 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }
    else if ((input4 == "X") && (input5 == "X") && (input6 == "X")) {
        message("Player X won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")

    }

    // Checking if Player 0 won or not
    else if ((input1 == "0") && (input2 == "0") && (input3 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input1 == "0") && (input4 == "0") && (input7 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input7 == "0") && (input8 == "0") && (input9 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input3 == "0") && (input6 == "0") && (input9 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input1 == "0") && (input5 == "0") && (input9 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input3 == "0") && (input5 == "0") && (input7 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input2 == "0") && (input5 == "0") && (input8 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else if ((input4 == "0") && (input5 == "0") && (input6 == "0")) {
        message("Player 0 won", "green");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }

    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((input1 == "X" || input1 == "0") && (input2 == "X" || input2 == "0") && (input3 == "X" || input3 == "0") && (input4 == "X" || input4 == "0") && (input5 == "X" || input5 == "0") &&
        (input6 == "X" || input6 == "0") && (input7 == "X" || input7 == "0") && (input8 == "X" || input8 == "0") && (input9 == "X" || input9 == "0")) {
        message("Match Tie", "red");
        stopGame("input1", "input2" ,"input3", "input4", "input5", "input6","input7","input8","input9")


    }
    else {
        if (button.innerHTML === "RESET") {
            // Here, Printing Result
            if (flag == 1) {
                print.innerHTML = "Player X Turn";
            } else {
                print.innerHTML = "Player 0 Turn";
            }
        }
        else {
            message("Please click on start button", "red")
        }
    }
}


//Functions for putting values X or 0
flag = 1;
function allInputFunction(input){
    if (button.innerHTML === "RESET") {
        if (flag == 1) {
            document.getElementById(input).value = "X";
            document.getElementById(input).disabled = true;
            flag = 0;
        } else {
            document.getElementById(input).value = "0";
            document.getElementById(input).disabled = true;
            flag = 1;
        }
    }
}

/* FUNCTION FOR SHOWING MESSAGES */
function message(showMessage, showColor) {
    let print = document.getElementById("print");
    print.innerText = "";
    print.innerHTML = showMessage;
    print.style.color = showColor;
}

function stopGame(input1, input2 ,input3, input4, input5, input6,input7,input8,input9){
    document.getElementById(input1).disabled = true;
    document.getElementById(input2).disabled = true;
    document.getElementById(input3).disabled = true;
    document.getElementById(input4).disabled = true;
    document.getElementById(input5).disabled = true;
    document.getElementById(input6).disabled = true;
    document.getElementById(input7).disabled = true;
    document.getElementById(input8).disabled = true;
    document.getElementById(input9).disabled = true;
    
}

