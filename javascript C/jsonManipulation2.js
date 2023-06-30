let product =
    [{
        "a": [
            {
                "id": "01",
                "partNumber": "101",
                "name": "acceletor",
                "size": "30",
                "colors": ["Blue"],
                "description": "this is signal light",
            },
        ],
        "b": [
            {
                "id": "02",
                "partNumber": "102",
                "name": "break",
                "size": "20",
                "colors": ["Red"],
                "description": "this is headlight",
            },
        ],
    }];


showProducts();

/* FOR LOOP FOR SHOWING PRODUCT KEY WITH NAME */
// for (let prop in product[0]) {
//     for (i = 0; i < product[0][prop].length; i++) {
//         console.log(prop + ": " + product[0][prop][i]["name"]);
//     }
// }

// console.log(product[0])

/* FUNCTION FOR SHOWING PRODUCTS */

function showProducts() {


    let mainTable = document.getElementById("mainTable");
    html = "";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Part Number</th>";
    html += "<th>Name</th>";
    html += "<th>Size</th>";
    html += "<th>Color</th>";
    html += "<th>Description</th>";
    html += "<th>Action Buttons</th>";
    html += "</tr>";
    for (let prop in product[0]) {
        for (i = 0; i < product[0][prop].length; i++) {
            // console.log(prop + ": " + product[0][prop][i]["id"] + " " + product[0][prop][i]["name"]);
            html += "<tr>";
            html += "<td>" + product[0][prop][i]["id"] + "</td>";
            html += "<td>" + product[0][prop][i]["partNumber"] + "</td>";
            html += "<td>" + product[0][prop][i]["name"] + "</td>";
            html += "<td>" + product[0][prop][i]["size"] + "</td>";
            html += "<td>" + product[0][prop][i]["colors"] + "</td>";
            html += "<td>" + product[0][prop][i]["description"] + "</td>";
            // console.log("i = ", i)
            // console.log("product[0][prop][i][id] = ", product[0][prop][i]["id"])
            html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + product[0][prop][i]["partNumber"] + ")\">Modify</button><button id= 'actionButton' onclick=\"deleteButton(" + product[0][prop][i]["partNumber"] + ")\">Delete</button><button id= 'actionButton' onclick=\"saveButton(" + product[0][prop][i]["partNumber"] + ")\">Save</button></td>";
            html += "</tr>";
        }
    }

    mainTable.innerHTML = html;
    console.log(product)


}

/* FUNCTION FOR ADDING PRODUCTS */
function addProduct() {
    let productId = document.getElementById("productId").value;
    let partNumber = document.getElementById("partNumber").value;
    let productName = document.getElementById("productName").value;
    let description = document.getElementById("description").value;
    let size = sizeButton();
    let colors = colorButton();
    let letter = productName.charAt(0);
    let text1 = "";
    let text2 = "";
    for (let prop in product[0]) {
        for (i = 0; i < product[0][prop].length; i++) {
            text1 = product[0][prop].filter(x => x["id"] === productId);
            text2 = product[0][prop].filter(x => x["partNumber"] === partNumber);

        }
    }
    // console.log("textLength of productID", text1.length)
    // console.log("textLength partNumber", text2.length)
    if (productId != "" && partNumber != "" && productName != "" && size != false && colors != false && description != "") {
        if (parseInt(partNumber) > 100 && parseInt(partNumber) < 200) {
            if (text1.length > 0) {
                message("Enter unique Product ID ", "red");
                showProducts();
            }
            else if (text2.length > 0) {
                message("Enter unique Product number ", "red");
                showProducts();
            }

            /* PUSH OPERATION FOR PRODUCT */
            else {
                if (letter in product[0]) {
                    // index "x" exists in obj

                    product[0][letter].push({
                        "id": productId,
                        "partNumber": partNumber,
                        "name": productName.toLowerCase(),
                        "size": size,
                        "colors": colors,
                        "description": description
                    });
                    message("Data Added successfully", "green");
                    showProducts();

                } else {
                    // index "x" does not exist in obj
                    let data = [{
                        "id": productId,
                        "partNumber": partNumber,
                        "name": productName.toLowerCase(),
                        "size": size,
                        "colors": colors,
                        "description": description
                    }];
                    product[0][letter] = data;

                    message("Data Added successfully", "green");
                    showProducts();
                }
            }
        }
        else {
            message("Part Number should be three digit number (ex. 101)", "red");
            showProducts();
        }
    }
    else {
        message("Please Enter some data", "red");
        showProducts();
    }
}



/* FUNCTION FOR MODIFYING PRODUCTS */
function modifyButton(prop) {

    resetFunction()
    showProducts();
    // console.log("props = ", prop)
    // console.log("modifyButton clicked")
    message("", "");
    let partNumber = prop;
    // console.log("Product id getting from modify button = ", partNumber)
    for (let prop in product[0]) {
        // console.log("props = ", prop)
        for (i = 0; i < product[0][prop].length; i++) {
            // console.log("product[0][prop][i][partNumber] = ", product[0][prop][i]["partNumber"])
            if (product[0][prop][i]["partNumber"] == partNumber) {
                // console.log("Product id getting from for loop when j = productId = ", product[0][prop][i]["id"])
                // console.log("Ids are equal")
                document.getElementById("productId").value = product[0][prop][i]["id"];
                document.getElementById("partNumber").value = product[0][prop][i]["partNumber"];
                document.getElementById("productName").value = product[0][prop][i]["name"];
                document.getElementById("description").value = product[0][prop][i]["description"];
                document.getElementsByName("size").innerHTML = modifySizeButton(partNumber);
                document.getElementsByName("colors").value = modifyColorButton(partNumber);
            }
        }
    }
}


/* FUNCTION FOR SAVING MODIFIED PRODUCTS */
function saveButton(id) {
    let newPartNumber = id;
    message("", "");
    let productId = document.getElementById("productId").value;
    let partNumber = document.getElementById("partNumber").value;
    let newProductName = document.getElementById("productName").value;
    let newDescription = document.getElementById("description").value;
    let newSize = sizeButton();
    let newColors = colorButton();

    for (let prop in product[0]) {
        for (i = 0; i < product[0][prop].length; i++) {
            if (product[0][prop][i]["partNumber"] == newPartNumber) {
                if (product[0][prop][i]["id"] == productId && product[0][prop][i]["partNumber"] == partNumber) {
                    product[0][prop][i]["name"] = newProductName;
                    product[0][prop][i]["description"] = newDescription;
                    product[0][prop][i]["size"] = newSize;
                    product[0][prop][i]["colors"] = newColors;
                    showProducts();
                    message("Data Modified successfully", "green");
                    resetFunction();
                }
                else {
                    // console.log("else part")
                    message("Product ID & Part number can't be changed", "red");
                }
            }
        }
    }
}


/* FUNCTION FOR MODIFIED SIZE BUTTON PRODUCTS */
function modifySizeButton(prop) {

    // console.log("inside modify size button")
    let partNumber = prop;
    // console.log("modifySizeButton ,partNumber =  ", partNumber)
    for (let prop in product[0]) {
        for (i = 0; i < product[0][prop].length; i++) {
            // console.log("product[0][prop][i][partNumber]", product[0][prop][i]["partNumber"])
            if (product[0][prop][i]["partNumber"] == partNumber) {
                if (product[0][prop][i]["size"] === "10") {
                    document.getElementById('radio1').checked = true;
                }
                else if (product[0][prop][i]["size"] === "20") {
                    document.getElementById('radio2').checked = true;
                }
                else if (product[0][prop][i]["size"] === "30") {
                    document.getElementById('radio3').checked = true;
                }
                else if (product[0][prop][i]["size"] === "40") {
                    document.getElementById('radio4').checked = true;
                }
            }
        }
    }
}

/* FUNCTION FOR MODIFIED COLOR BUTTON PRODUCTS */
function modifyColorButton(prop) {
    // console.log("inside modify color button")
    let partNumber = prop;
    for (let prop in product[0]) {
        for (i = 0; i < product[0][prop].length; i++) {
            // console.log("product[0][prop][i][colors]", product[0][prop][i]["colors"])
            for (j = 0; j < product[0][prop][i]["colors"].length; j++) {
                if (product[0][prop][i]["partNumber"] == partNumber) {

                    if (product[0][prop][i]["colors"][j] === "Red") {
                        document.getElementById('check1').checked = true;
                    }
                    else if (product[0][prop][i]["colors"][j] === "Blue") {
                        document.getElementById('check2').checked = true;
                    }
                    else if (product[0][prop][i]["colors"][j] === "Green") {
                        document.getElementById('check3').checked = true;
                    }
                    else if (product[0][prop][i]["colors"][j] === "Yellow") {
                        document.getElementById('check4').checked = true;
                    }
                }
            }
        }
    }
}

/* FUNCTION FOR SIZE BUTTON PRODUCTS */
function sizeButton() {
    if (document.getElementById('radio1').checked) {
        return "10";
    }
    else if (document.getElementById('radio2').checked) {
        return "20";
    }
    else if (document.getElementById('radio3').checked) {
        return "30";
    }
    else if (document.getElementById('radio4').checked) {
        return "40";
    }
    else {
        return "";
    }
}

/* FUNCTION FOR COLOR BUTTON PRODUCTS */
function colorButton() {
    let color = []
    if (document.getElementById('check1').checked) {
        color.push(" Red");
    }
    if (document.getElementById('check2').checked) {
        color.push(" Blue");
    }
    if (document.getElementById('check3').checked) {
        color.push(" Green");
    }
    if (document.getElementById('check4').checked) {
        color.push(" Yellow");
    }
    if (color.length > 0) {
        return color;
    }
    else {
        return "";
    }

}

/* FUNCTION FOR RESETING VALUES AND MESSAGES */
function resetFunction() {
    document.getElementById("productId").value = "";
    document.getElementById("partNumber").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("description").value = "";
    document.getElementById('radio1').checked = false;
    document.getElementById('radio2').checked = false;
    document.getElementById('radio3').checked = false;
    document.getElementById('radio4').checked = false;
    document.getElementById('check1').checked = false;
    document.getElementById('check2').checked = false;
    document.getElementById('check3').checked = false;
    document.getElementById('check4').checked = false;
}
/* FUNCTION FOR RESET BUTTON */
function resetFunctionButton() {
    resetFunction();
    document.getElementById("addMessage").innerText = "";
}


/* FUNCTION FOR SHOWING MESSAGES */
function message(showMessage, showColor) {
    let addMessage = document.getElementById("addMessage");
    addMessage.innerText = "";
    addMessage.innerText = showMessage;
    addMessage.style.color = showColor;
}