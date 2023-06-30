// 24 jan update
let product =
{
    "a": [
        {
            "id": "1",
            "partNumber": "101",
            "name": "acceletor",
            "size": "30",
            "colors": ["Blue"],
            "weight": "10",
            "description": "this is signal light",
            "company": {
                "companyName": "zero",
                "date": "2005-10-28",
                "address": "surat , gujarat"
            }
        },

    ],
    // "b": [
    //     {
    //         "id": "2",
    //         "partNumber": "102",
    //         "name": "bbbb",
    //         "size": "30",
    //         "colors": ["Blue"],
    //         "weight": "30",
    //         "description": "this is signal light",

    //     },

    // ],
};


showProducts();

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
    html += "<th>Product Weight</th>";
    html += "<th>Description</th>";
    html += "<th>Company Name</th>";
    html += "<th>Established date</th>";
    html += "<th>Company Address</th>";
    html += "<th>Action Buttons</th>";
    html += "</tr>";
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            html += "<tr>";
            html += "<td>" + product[prop][i]["id"] + "</td>";
            html += "<td>" + product[prop][i]["partNumber"] + "</td>";
            html += "<td>" + product[prop][i]["name"] + "</td>";
            html += "<td>" + product[prop][i]["size"] + "</td>";
            html += "<td>" + product[prop][i]["colors"] + "</td>";
            if (product[prop][i]["weight"]) {
                html += "<td>" + product[prop][i]["weight"] + "</td>";
            }
            if (!product[prop][i]["weight"]) {
                html += "<td>" + "Not Available" + "</td>";
            }
            html += "<td>" + product[prop][i]["description"] + "</td>";
            if (product[prop][i]["company"]) {
                html += "<td>" + product[prop][i]["company"]["companyName"] + "</td>";
                html += "<td>" + product[prop][i]["company"]["date"] + "</td>";
                html += "<td>" + product[prop][i]["company"]["address"] + "</td>";
            }
            if (!product[prop][i]["company"]) {
                html += "<td>" + "Not Available" + "</td>";
                html += "<td>" + "Not Available" + "</td>";
                html += "<td>" + "Not Available" + "</td>";
            }

            html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + product[prop][i]["id"] + ")\">Modify</button><button id= 'actionButton' onclick=\"propertyButton(" + product[prop][i]["id"] + ")\">Check property</button><button id= 'actionButton' onclick=\"saveButton(" + product[prop][i]["id"] + ")\">Save</button><button id= 'actionButton' onclick=\"deleteButton(" + product[prop][i]["id"] + ")\">Delete</button></td>";
            html += "</tr>";
        }
    }

    mainTable.innerHTML = html;
    console.log(product)
}

/* FUNCTION FOR ADDING PRODUCTS */
function addProduct() {
    // console.log("add button clicked")
    let productId = document.getElementById("productId").value;
    let partNumber = document.getElementById("partNumber").value;
    let productName = document.getElementById("productName").value;
    let productWeight = document.getElementById("productWeight").value;
    let description = document.getElementById("description").value;
    let companyName = document.getElementById("companyName").value;
    let companyDate = document.getElementById("companyDate").value;
    let address = document.getElementById("address").value;
    let size = sizeButton();
    let colors = colorButton();
    let letter = productName.charAt(0);
    let text1 = "";
    let text2 = "";
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            text1 = product[prop].filter(x => x["id"] === productId);
            text2 = product[prop].filter(x => x["partNumber"] === partNumber);

        }
    }
    if (productId != "" && partNumber != "" && productName != "" && size != false && colors != false && description != "") {
        if (parseInt(partNumber) > 100 && parseInt(partNumber) < 200) {
            if (text1.length > 0) {
                message("Enter unique Product ID ", "red");
                showProducts();
            }
            else if (text2.length > 0) {
                message("Enter unique Part number ", "red");
                showProducts();
            }
            /* PUSH OPERATION FOR PRODUCT */
            else if (productWeight === "" || productWeight === " " || companyName === "" || companyName === " " || companyDate === "" || companyDate === " " || address === "" || address === " ") {
    
                console.log("inside equal loop")
                if (letter in product) {
                    product[letter].push({
                        "id": productId,
                        "partNumber": partNumber,
                        "name": productName.toLowerCase(),
                        "size": size,
                        "colors": colors,
                        "description": description,
                    });
                    message("Data Added successfully", "green");
                    resetFunction();
                    showProducts();
                }
                else {
                    // index "x" does not exist in obj
                    let data = [{
                        "id": productId,
                        "partNumber": partNumber,
                        "name": productName.toLowerCase(),
                        "size": size,
                        "colors": colors,
                        "description": description,
                    }];
                    product[letter] = data;
                    message("Data Added successfully", "green");
                    resetFunction();
                    showProducts();
                }
                
                
            }
            else{
                if (companyName !== "" || companyName !== " " || companyDate !== "" || companyDate !== " " || address !== "" || address !== " " || productWeight !== "" || productWeight !== " ") {
                    console.log("inside not equal loop")
                    if (letter in product) {
                        product[letter].push({
                            "id": productId,
                            "partNumber": partNumber,
                            "name": productName.toLowerCase(),
                            "size": size,
                            "colors": colors,
                            "weight": productWeight,
                            "description": description,
                            "company": {
                                "companyName": companyName,
                                "date": companyDate,
                                "address": address
                            }
                        });
                        message("Data Added successfully", "green");
                        resetFunction();
                        showProducts();
                    }
                    else {
                        // index "x" does not exist in obj
                        let data = [{
                            "id": productId,
                            "partNumber": partNumber,
                            "name": productName.toLowerCase(),
                            "size": size,
                            "colors": colors,
                            "weight": productWeight,
                            "description": description,
                            "company": {
                                "companyName": companyName,
                                "date": companyDate,
                                "address": address
                            }
                        }];
                        product[letter] = data;
                        message("Data Added successfully", "green");
                        resetFunction();
                        showProducts();
                    }
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
    let productID = prop;
    // console.log("Product id getting from modify button = ", partNumber)
    for (let prop in product) {
        // console.log("props = ", prop)
        for (i = 0; i < product[prop].length; i++) {
            // console.log("product[prop][i][partNumber] = ", product[prop][i]["partNumber"])
            if (product[prop][i]["id"] == productID) {
                //     // console.log("Product id getting from for loop when j = productId = ", product[prop][i]["id"])
                //     // console.log("Ids are equal")

                document.getElementById("companyName").value = product[prop][i]["company"]["companyName"];
                document.getElementById("companyDate").value = product[prop][i]["company"]["date"];
                document.getElementById("address").value = product[prop][i]["company"]["address"];


                document.getElementById("productId").value = product[prop][i]["id"];
                document.getElementById("productId").readOnly = true;
                document.getElementById("partNumber").value = product[prop][i]["partNumber"];
                document.getElementById("partNumber").readOnly = true;
                document.getElementById("productName").value = product[prop][i]["name"];
                document.getElementById("productWeight").value = product[prop][i]["weight"];
                document.getElementById("description").value = product[prop][i]["description"];
                document.getElementsByName("size").innerHTML = modifySizeButton(productID);
                document.getElementsByName("colors").value = modifyColorButton(productID);

            }

        }
    }
}


/* FUNCTION FOR SAVING MODIFIED PRODUCTS */
function saveButton(id) {
    let newProductId = id;
    message("", "");
    let newProductName = document.getElementById("productName").value;
    let newProductWeight = document.getElementById("productWeight").value;
    let newDescription = document.getElementById("description").value;
    let newCompanyName = document.getElementById("companyName").value;
    let newCompanyDate = document.getElementById("companyDate").value;
    let newAddress = document.getElementById("address").value;
    let newSize = sizeButton();
    let newColors = colorButton();

    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            console.log("newProductId= ", newProductId)
            console.log("product[prop][i][id]= ", product[prop][i]["id"])
            if (product[prop][i]["id"] == newProductId) {
                product[prop][i]["name"] = newProductName;
                product[prop][i]["weight"] = newProductWeight;
                product[prop][i]["description"] = newDescription;
                product[prop][i]["size"] = newSize;
                product[prop][i]["colors"] = newColors;
                product[prop][i]["company"]["companyName"] = newCompanyName;
                product[prop][i]["company"]["date"] = newCompanyDate;
                product[prop][i]["company"]["address"] = newAddress;

                showProducts();
                message("Data Modified successfully", "green");
                document.getElementById("productId").readOnly = false;
                document.getElementById("partNumber").readOnly = false;
                resetFunction();

            }
            break;
        }
    }
}


/* FUNCTION FOR PROPERTY BUTTON */
function propertyButton(prop) {
    let newProductId = prop;
    message("", "");
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            if (product[prop][i]["id"] == newProductId) {
                if (product[prop][i]["weight"] == "") {
                    message("Weight is Not Available for ID " + product[prop][i]["id"], "red")
                }
                else {
                    message("Weight for ID :- " + product[prop][i]["id"] + " is " + product[prop][i]["weight"], "green")
                }
            }
        }
    }
}



/* FUNCTION FOR DELETING PRODUCTS */
function deleteButton(id) {
    message("", "");
    let productId = id;
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            if (product[prop][i]["id"] == productId) {
                product[prop].splice(i, 1);
                showProducts();
                message("Data Deleted successfully", "green");
            }
        }
    }
}



/* FUNCTION FOR MODIFIED SIZE BUTTON PRODUCTS */
function modifySizeButton(prop) {

    // console.log("inside modify size button")
    let productId = prop;
    // console.log("modifySizeButton ,partNumber =  ", partNumber)
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            // console.log("product[prop][i][partNumber]", product[prop][i]["partNumber"])
            if (product[prop][i]["id"] == productId) {
                if (product[prop][i]["size"] === "10") {
                    document.getElementById('radio1').checked = true;
                }
                else if (product[prop][i]["size"] === "20") {
                    document.getElementById('radio2').checked = true;
                }
                else if (product[prop][i]["size"] === "30") {
                    document.getElementById('radio3').checked = true;
                }
                else if (product[prop][i]["size"] === "40") {
                    document.getElementById('radio4').checked = true;
                }
            }
        }
    }
}

/* FUNCTION FOR MODIFIED COLOR BUTTON PRODUCTS */
function modifyColorButton(prop) {
    // console.log("inside modify color button")
    let productId = prop;
    for (let prop in product) {
        for (i = 0; i < product[prop].length; i++) {
            // console.log("product[prop][i][colors]", product[prop][i]["colors"])
            for (j = 0; j < product[prop][i]["colors"].length; j++) {
                if (product[prop][i]["id"] == productId) {

                    if (product[prop][i]["colors"][j] === "Red") {
                        document.getElementById('check1').checked = true;
                    }
                    else if (product[prop][i]["colors"][j] === "Blue") {
                        document.getElementById('check2').checked = true;
                    }
                    else if (product[prop][i]["colors"][j] === "Green") {
                        document.getElementById('check3').checked = true;
                    }
                    else if (product[prop][i]["colors"][j] === "Yellow") {
                        document.getElementById('check4').checked = true;
                    }
                }
            }
        }
    }
}

/* FUNCTION FOR SIZE BUTTON PRODUCTS */
function sizeButton() {
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    if (radio1.checked) {
        return radio1.value;
    }
    else if (radio2.checked) {
        return radio2.value;
    }
    else if (radio3.checked) {
        return radio3.value;
    }
    else if (radio4.checked) {
        return radio4.value;
    }
    else {
        return "";
    }
}

/* FUNCTION FOR COLOR BUTTON PRODUCTS */
function colorButton() {
    let color = []
    let check1 = document.getElementById('check1');
    let check2 = document.getElementById('check2');
    let check3 = document.getElementById('check3');
    let check4 = document.getElementById('check4');
    if (check1.checked) {
        color.push(check1.value);
    }
    if (check2.checked) {
        color.push(check2.value);
    }
    if (check3.checked) {
        color.push(check3.value);
    }
    if (check4.checked) {
        color.push(check4.value);
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
    document.getElementById("companyName").value = "";
    document.getElementById("companyDate").value = "";
    document.getElementById("productWeight").value = "";
    document.getElementById("address").value = "";
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

/* FUNCTION FOR SORTING PRODUCTS BY DATE */
function sortByDateFunction() {
    let companyDates = [];
    for (let key in product) {
        for (let i = 0; i < product[key].length; i++) {
            companyDates.push({
                "id": product[key][i].id,
                "companyDate": product[key][i].company.date
            });
        }
    }
    companyDates.sort(GetSortOrder("companyDate"));

    let sortedProducts = [];
    for (let i = 0; i < companyDates.length; i++) {
        for (let key in product) {
            for (let j = 0; j < product[key].length; j++) {
                if (product[key][j].company.date === companyDates[i].companyDate && product[key][j].id === companyDates[i].id) {
                    // console.log('product[key][j].company.companyDates' , product[key][j].company.companyDate)
                    sortedProducts.push(product[key][j]);
                    // console.log(sortedProducts)
                }
            }
        }
    }
    // console.log(sortedProducts)
    sortedDataShow(sortedProducts);
}


/* FUNCTION FOR SORTING PRODUCTS BY COMPANY NAME */
function sortByNameFunction() {
    let companyNames = [];
    for (let key in product) {
        for (let i = 0; i < product[key].length; i++) {
            companyNames.push({
                "id": product[key][i].id,
                "companyName": product[key][i].company.companyName
            });
        }
    }
    companyNames.sort(GetSortOrder("companyName"));

    let sortedProducts = [];
    for (let i = 0; i < companyNames.length; i++) {
        for (let key in product) {
            for (let j = 0; j < product[key].length; j++) {
                if (product[key][j].company.companyName === companyNames[i].companyName && product[key][j].id === companyNames[i].id) {
                    // console.log('product[key][j].company.companyName' , product[key][j].company.companyName)
                    sortedProducts.push(product[key][j]);
                    // console.log(sortedProducts)
                }
            }
        }
    }
    // console.log(sortedProducts)
    sortedDataShow(sortedProducts);
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

/* SORTED DATA SHOW */
function sortedDataShow(sortedProducts) {
    let mainTable = document.getElementById("mainTable");
    html = "";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Part Number</th>";
    html += "<th>Name</th>";
    html += "<th>Size</th>";
    html += "<th>Color</th>";
    html += "<th>Product Weight</th>";
    html += "<th>Description</th>";
    html += "<th>Company Name</th>";
    html += "<th>Established date</th>";
    html += "<th>Company Address</th>";
    html += "<th>Action Buttons</th>";
    html += "</tr>";

    for (let i = 0; i < sortedProducts.length; i++) {
        html += "<tr>";
        html += "<td>" + sortedProducts[i].id + "</td>";
        html += "<td>" + sortedProducts[i].partNumber + "</td>";
        html += "<td>" + sortedProducts[i].name + "</td>";
        html += "<td>" + sortedProducts[i].size + "</td>";
        html += "<td>" + sortedProducts[i].colors + "</td>";
        html += "<td>" + sortedProducts[i].weight + "</td>";
        html += "<td>" + sortedProducts[i].description + "</td>";

        // for (let j = 0; j < sortedProducts[i]["company"].length; j++) {
        console.log("inside j loop")
        // console.log("sortedProducts[i][company][j]" , sortedProducts[i]["company"][j] )
        html += "<td>" + sortedProducts[i].company.companyName + "</td>";
        html += "<td>" + sortedProducts[i].company.date + "</td>";
        html += "<td>" + sortedProducts[i].company.address + "</td>";
        // }

        html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + sortedProducts[i].id + ")\">Modify</button><button id= 'actionButton' onclick=\"propertyButton(" + sortedProducts[i].id + ")\">Check property</button><button id= 'actionButton' onclick=\"saveButton(" + sortedProducts[i].id + ")\">Save</button><button id= 'actionButton' onclick=\"deleteButton(" + sortedProducts[i].id + ")\">Delete</button></td>";
        html += "</tr>";
    }
    mainTable.innerHTML = html;
}

/* DELETING COMPANY DETAILS  */
function deleteCompanyFunction() {
    message("", "")
    let productId = document.getElementById("productId").value;
    if (productId != "") {
        for (let key in product) {
            for (let i = 0; i < product[key].length; i++) {
                if (product[key][i]["id"] === productId) {
                    delete product[key][i].company;
                    message("Company deails deleted successfully", "green");
                    showProducts();
                    resetFunction();
                }
                else if (product[key][i]["id"] !== productId) {
                    message("ProductId not found in data", "red");
                }
            }
        }
    }
    else {
        message("Enter ProductId to delete Company details", "red");
    }
}

function addWeightFunction() {
    message("", "")
    let productId = document.getElementById("productId").value;
    let newProductWeight = document.getElementById("productWeight").value;
    if (productId != "") {
        for (let prop in product) {
            for (i = 0; i < product[prop].length; i++) {
                if (product[prop][i]["id"] == productId) {
                    product[prop][i]["weight"] = newProductWeight;
                    message("Product weight added successfully", "green");
                    showProducts();
                    resetFunction();
                }
                if (product[prop][i]["id"] != productId) {
                    message("ProductId not found in data", "red");
                }
            }
        }
    }
    else {
        message("Enter ProductId to add Product weight", "red");
    }
}