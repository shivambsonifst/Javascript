function myclick1(){
    document.getElementById("click").innerHTML = "You have clicked once.";
}

function myclick2(){
    document.getElementById("over").innerHTML = "Mouse over."
}

function myclick3(){
    document.getElementById("over").innerHTML = "Mouse out."
}

function myclick4(){
   let text =  document.getElementById("blur");
   text.value = text.value.toUpperCase();
}

function myreset(){
    document.getElementById("blur").value = "";
    document.getElementById("text").value = "";
    document.getElementById("textPrint").innerHTML = "";
}

function myclick5(){
    document.getElementById("dbclick").innerHTML = "you have clicked."
}

function mytext(){
    let word = document.getElementById("text").value;
    document.getElementById("textPrint").innerHTML=word;
}

