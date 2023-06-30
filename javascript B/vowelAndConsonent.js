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

/* Reset Functions  */
function vowelConsonentResetFunc() {
    document.getElementById("vowelConsonentInput").value = "";
    document.getElementById("vowelConsonentOutput1").innerText = "";
    document.getElementById("vowelConsonentOutput2").innerText = "";
}