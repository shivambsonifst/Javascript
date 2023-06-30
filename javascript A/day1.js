
// //Function 
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }



// let a = 10;

// // For loop
// document.write("For loop <br>");
// for (let i = 0; i < a; i++) {

//     document.write("The number is " + i + "<br>");
// }


// document.write("<hr>")
// // While loop
// document.write("While loop <br>");
// let j=1,b = 5;
// while ( j <= b) {
//     document.write("The number is " + j + "<br>");
//     j++;
// }


function myForm() {

    let date = document.getElementById("date").value;
    // document.write(date);
    let dateTime = document.getElementById("datetime").value;
    // document.write(dateTime);
    let mail = document.getElementById("email").value;
    // document.write(mail);
    let month = document.getElementById("month").value;
    // document.write(month);
    let number = document.getElementById("number").value;
    // document.write(number);
    let range = document.getElementById("range").value;
    // document.write(range);
    let tel = document.getElementById("tel").value;
    // document.write(tel);
    let url = document.getElementById("url").value;
    // document.write(url);
    let week = document.getElementById("week").value;
    // document.write(week);


    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var urlformat = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (date && dateTime && mail && month && number && range && tel && url && week != "") {
        if (mail.match(mailformat)) {
            if (urlformat.test(url)) {
                document.write(date + "<br>" + dateTime + "<br>" + mail + "<br>" + month + "<br>" + number + "<br>" + range + "<br>" + tel + "<br>" + week + "<br>" + url);
            }

            if (!urlformat.test(url)){

                // event.preventDefault();
                alert("You have entered an invalid url!");
                return false;
            }

        }
        if (!mail.match(mailformat)) {
            // event.preventDefault();
            alert("You have entered an invalid email address!");
            return false;
        }
    }
}
