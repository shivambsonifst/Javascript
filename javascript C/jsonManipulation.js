/* JSON ARRAY OF DATA */
let product = [
    {
        "id": "01",
        "partNumber": "101",
        "name": "signalight",
        "size": "30",
        "colors": ["Blue"],
        "description": "this is signal light"
    },
    {
        "id": "02",
        "partNumber": "102",
        "name": "headlight",
        "size": "20",
        "colors": ["Red"],
        "description": "this is headlight"
    }
];

let html = "";

showProducts()

/* FUNCTION FOR SHOWING PRODUCTS */
function showProducts() {
    let mainTable = document.getElementById("mainTable");
    html = "";
    if (product.length >= 1) {
        html += "<tr>";
        html += "<th>ID</th>";
        html += "<th>Part Number</th>";
        html += "<th>Name</th>";
        html += "<th>Size</th>";
        html += "<th>Color</th>";
        html += "<th>Description</th>";
        html += "<th>Action Buttons</th>";
        html += "</tr>";
        for (var i = 0; i < product.length; i++) {
            html += "<tr>";
            html += "<td>" + product[i].id + "</td>";
            html += "<td>" + product[i].partNumber + "</td>";
            html += "<td>" + product[i].name + "</td>";
            html += "<td>" + product[i].size + "</td>";
            html += "<td>" + product[i].colors + "</td>";
            html += "<td>" + product[i].description + "</td>";
            html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + i + ")\">Modify</button><button id= 'actionButton' onclick=\"deleteButton(" + i + ")\">Delete</button><button id= 'actionButton' onclick=\"saveButton(" + i + ")\">Save</button></td>";
            html += "</tr>";
        }
        mainTable.innerHTML = html;
    }
}

/* FUNCTION FOR ADDING PRODUCTS */
function addProduct() {
    message("", "");
    let productId = document.getElementById("productId").value;
    let partNumber = document.getElementById("partNumber").value;
    let productName = document.getElementById("productName").value;
    let description = document.getElementById("description").value;
    let size = sizeButton();
    let colors = colorButton();
    let text1 = product.filter(x => x.id === productId);
    let text2 = product.filter(x => x.partNumber === partNumber);
    console.log("textLength of productID", text1.length)
    console.log("textLength partNumber", text2.length)
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
                product.push({
                    "id": productId,
                    "partNumber": partNumber,
                    "name": productName.toLowerCase(),
                    "size": size,
                    "colors": [colors],
                    "description": description
                });
                message("Data Added successfully", "green");
                showProducts();
                resetFunction();
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

/* FUNCTION FOR DELETING PRODUCTS */
function deleteButton(id) {
    message("", "");
    let productId = id;
    for (let i = 0; i < product.length; i++) {
        if (i === productId) {
            product.splice(i, 1);
            showProducts();
            message("Data Deleted successfully", "green");
        }
    }
}

/* FUNCTION FOR MODIFYING PRODUCTS */
function modifyButton(id) {
    message("", "");
    let productId = id;
    for (let i = 0; i < product.length; i++) {
        if (i === productId) {
            console.log("Ids are equal")
            document.getElementById("productId").value = product[i].id;
            document.getElementById("partNumber").value = product[i].partNumber;
            document.getElementById("productName").value = product[i].name;
            document.getElementById("description").value = product[i].description;
            document.getElementsByName("size").innerHTML = modifySizeButton(i);
            document.getElementsByName("colors").value = modifyColorButton(i);
        }
    }
}
/* FUNCTION FOR SAVING MODIFIED PRODUCTS */
function saveButton(id) {
    message("", "");
    let productId = document.getElementById("productId").value;
    let partNumber = document.getElementById("partNumber").value;
    let newProductName = document.getElementById("productName").value;
    let newDescription = document.getElementById("description").value;
    let newSize = sizeButton();
    let newColors = colorButton();

    for (let i = 0; i < product.length; i++) {
        if (i === id) {
            if (product[i].id === productId && product[i].partNumber === partNumber) {
                product[i].name = newProductName;
                product[i].description = newDescription;
                product[i].size = newSize;
                product[i].colors = newColors;
                showProducts();
                message("Data Modified successfully", "green");
                resetFunction();
            }
            else {
                message("Product ID & Part number can't be changed", "red");
            }
        }
    }
}

/* FUNCTION FOR SEARCHIG PRODUCTS */
function searchProductButton() {
    let searchProduct = document.getElementById("searchProduct").value;
    console.log(searchProduct)
    let mainTable = document.getElementById("mainTable");
    html = "";
    let text = product.filter(x => x.id === searchProduct);    
    console.log(text.length)
        if (searchProduct != "") {
            console.log("not null")
            if (text.length>0) {
                console.log(" greater than zero")
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
                for (let i = 0; i < product.length; i++) {
                    if (product[i].id === searchProduct ) {
                    console.log("inside printing for loop")
                    html += "<tr>";
                    html += "<td>" + product[i].id + "</td>";
                    html += "<td>" + product[i].partNumber + "</td>";
                    html += "<td>" + product[i].name + "</td>";
                    html += "<td>" + product[i].size + "</td>";
                    html += "<td>" + product[i].colors + "</td>";
                    html += "<td>" + product[i].description + "</td>";
                    html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + i + ")\">Modify</button><button id= 'actionButton' onclick=\"deleteButton(" + i + ")\">Delete</button><button id= 'actionButton' onclick=\"saveButton(" + i + ")\">Save</button></td>";
                    html += "</tr>";
                    }
                 
                }
                mainTable.innerHTML = html;
            }
            else {
                console.log("not matched")
                message("No matched Data Found", "red");
                showProducts();
            }
        }
        else {
            message("Please Enter some data", "red");
            showProducts();
        }
    
}


/* FUNCTION FOR MODIFIED SIZE BUTTON PRODUCTS */
function modifySizeButton(i) {
    let size = i;
    for (let i = 0; i < product.length; i++) {
        if (product[size].size === "10") {
            document.getElementById('radio1').checked = true;
        }
        else if (product[size].size === "20") {
            document.getElementById('radio2').checked = true;
        }
        else if (product[size].size === "30") {
            document.getElementById('radio3').checked = true;
        }
        else if (product[size].size === "40") {
            document.getElementById('radio4').checked = true;
        }
    }
}

/* FUNCTION FOR MODIFIED COLOR BUTTON PRODUCTS */
function modifyColorButton(i) {
    let color = i;
    for (let i = 0; i < product.length; i++) {
        for (let j = 0; j < product[color].colors.length; j++) {

            if (product[color].colors[j] === "Red") {
                document.getElementById('check1').checked = true;
            }
            else if (product[color].colors[j] === "Blue") {
                document.getElementById('check2').checked = true;
            }
            else if (product[color].colors[j] === "Green") {
                document.getElementById('check3').checked = true;
            }
            else if (product[color].colors[j] === "Yellow") {
                document.getElementById('check3').checked = true;
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
        console.log(color);
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


/* FUNCTION FOR SORTING PRODUCTS BY ID */
function sortByIdFunction() {
    product.sort(GetSortOrder("id"));
    for (let item in product) {
        if (product[item].id) {
            console.log(product[item].name)
            showProducts();
        }
    }
}

/* FUNCTION FOR SORTING PRODUCTS BY NAME */
function sortByNameFunction() {
    product.sort(GetSortOrder("name"));
    for (let item in product) {
        if (product[item].name) {
            console.log(product[item].name)
            showProducts();
        }
    }
}

/* MAIN FUNCTION FOR SORTING */
function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}


/* FUNCTION FOR SHOWING MESSAGES */
function message(showMessage, showColor) {
    let addMessage = document.getElementById("addMessage");
    addMessage.innerText = "";
    addMessage.innerText = showMessage;
    addMessage.style.color = showColor;
}