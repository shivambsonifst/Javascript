var form = document.getElementById("form");
function handleForm(event) {event.preventDefault();}

form.addEventListener('submit', handleForm);

// const errtxt = document.getElementById('error')
// errtxt.style.color ='red'
const newLineOutput = document.getElementById('newLine')
const wordOutput = document.getElementById('word')
const spaceOutput = document.getElementById('space')
const paragraphInput = document.getElementById('paragraphInput')


let paragraphData = ""

function calculate() {

let newLineCount = 0;
let spaceCount = 0;
let wordCount = 0;
newLineOutput.innerHTML = "";
wordOutput.innerHTML = "";
spaceOutput.innerHTML = "";

paragraphData = paragraphInput.value;
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

console.log(wordArr2);
for (let i = 0; i < wordArr2.length; i++) {
for (let j = 0; j < wordArr2[i].length; j++) {
if (!wordArr2[i][j] == "") {
wordCount++;
}
}

}






newLineOutput.innerHTML = "Line Count - " + ++newLineCount;
wordOutput.innerHTML = "word Count - " + wordCount;
spaceOutput.innerHTML = "space Count - " + spaceCount;

}