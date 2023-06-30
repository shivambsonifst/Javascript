/* Main Functions for vowel and consonents  */
function lineWordSpace() {
    const paragraphData = ""
    paragraphData = document.getElementById("countOutputText").value;               //input from user
    const output1 = document.getElementById("countOutputText1");             //output variable for vowel    
    const output2 = document.getElementById("countOutputText2");             //output variable for consonents
    const output3 = document.getElementById("countOutputText3");             //output variable for consonents
    let newLineCount = 0;
    let spaceCount = 0;
    let wordCount = 0;
    output1.innerHTML = "";
    output3.innerHTML = "";
    output2.innerHTML = "";

    // ------------newLine----------------------
    let tempArr = paragraphData.split(" ");
    console.log(tempArr);
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr[i].length; j++) {
            console.log(tempArr[i][j]);
            if (tempArr[i][j] === "\n") {
                newLineCount++;
            }
        }
    }
    //---------space---------------
    for (let index = 0; index < paragraphData.length; index++) {
        if (paragraphData[index] == " ") {
            spaceCount++;
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
        output1.innerText = "Please enter a string";
        output1.style.color = "red";
    }
}

/* Reset Functions  */
function countResetFunc() {
    document.getElementById("countOutputText").value = "";
    document.getElementById("countOutputText1").innerText = "";
    document.getElementById("countOutputText2").innerText = "";
    document.getElementById("countOutputText3").innerText = "";
}