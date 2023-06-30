const product = [];
const searchProduct = [];
let html = "";
console.log(product);
showDatas();

/* Display items in array */
function showDatas() {
    let tableData = document.getElementById("mainTable");
    let dataMessage = document.getElementById("dataMessage");
    html = "";
    if (product.length >= 1) {
        html += "<tr>";
        html += "<td>ID</td>";
        html += "<td>Product Number</td>";
        html += "</tr>";
        for (var i = 0; i < product.length; i++) {
            html += "<tr>";
            html += "<td>" + (i + 1) + "</td>";
            html += "<td>" + product[i] + "</td>";
            html += "</tr>";
        }
        tableData.innerHTML = html;
    }
    else {
        dataMessage.innerText = "No Data Found Enter some data";
        dataMessage.style.color = "red";
    }

}

/* Adding items in array */
function addProductName() {
    let dataMessage = document.getElementById("dataMessage");
    let productName = document.getElementById("productName").value;
    let tableData = document.getElementById("mainTable");
    let text = product.includes(productName.toLowerCase()); // comparing search in array
    console.log("match wala match" + text)
    if (productName != "") {
        dataMessage.innerText = "";
        if (text === false) {
            product.push(productName.toLowerCase());
            console.log(product)
            dataMessage.innerText = "Data Added successfully";
            dataMessage.style.color = "green";
            showDatas();
        }
        else {
            dataMessage.innerText = "Data already exists";
            dataMessage.style.color = "red";
            showDatas();
        }
    }

    else {
        dataMessage.innerText = "Please Enter some data";
        dataMessage.style.color = "red";
        showDatas();
    }
}

/* Searching items in array */
function searchProductName() {
    let searchProduct = document.getElementById("searchProduct").value;
    let tableData = document.getElementById("mainTable");
    let searchMessage = document.getElementById("searchMessage");
    html = "";
    if (searchProduct != "") {
        let text = product.includes(searchProduct.toLowerCase()); // comparing search in array
        console.log("match wala match" + text)
        if (text === true) {
            for (let i = 0; i < product.length; i++) {

                console.log("matched");
                html = "";
                html += "<tr>";
                html += "<td>ID</td>";
                html += "<td>Product Number</td>";
                html += "</tr>";
                for (let i = 0; i < product.length; i++) {
                    if (product[i] === searchProduct.toLowerCase()) {
                        searchMessage.innerText = "";
                        html += "<tr>";
                        html += "<td>" + (i + 1) + "</td>";
                        html += "<td>" + product[i] + "</td>";
                        html += "</tr>";
                    }
                }
                tableData.innerHTML = html;
            }
        }
        else if (text === false) {
            console.log("not matched")
            searchMessage.innerText = "No matched Data Found";
            searchMessage.style.color = "red";
            showDatas();

        }

    }
    else {
        searchMessage.innerText = "Please Enter some data";
        searchMessage.style.color = "red";
        showDatas();

    }
}

/* Removing items in array */
function removeProductName() {
    let removeProduct = document.getElementById("removeProduct").value;
    console.log(removeProduct)
    let tableData = document.getElementById("mainTable");
    let removeMessage = document.getElementById("removeMessage");
    removeMessage.innerText = "";
    if (removeProduct != "") {
        for (let i = 0; i < product.length; i++) {
            if (product[i] === removeProduct.toLowerCase()) {
                tableData.innerHTML = "";
                removeMessage.innerText = "Data deleted successfully";
                removeMessage.style.color = "green";
                product.splice(i, 1);
                showDatas();
            }
            else {
                removeMessage.innerText = "No match found";
                removeMessage.style.color = "red";
                showDatas();

            }

        }
    }
    else {
        tableData.innerHTML = "";
        removeMessage.innerText = "Please Enter some data";
        removeMessage.style.color = "red";
        showDatas();

    }
}

/* Modifying items in array */

function modifyProductName() {
    let modifyProduct1 = document.getElementById("modifyProduct1").value;
    let modifyProduct2 = document.getElementById("modifyProduct2").value;
    console.log(modifyProduct1)
    console.log(modifyProduct2)
    let tableData = document.getElementById("mainTable");
    let modifyMessage = document.getElementById("modifyMessage");
    let text = product.includes(modifyProduct2.toLowerCase()); // comparing search in array
    console.log("match wala match" + text)
    modifyMessage.innerText = "";
    if (modifyProduct1 != "" && modifyProduct2 != "") {
        for (let i = 0; i < product.length; i++) {
            if (product[i] === modifyProduct1.toLowerCase()) {
                console.log("inside equal loop")
                if (text === false) {
                    console.log("inside data doesnt exists")
                    modifyMessage.innerText ="";
                    tableData.innerHTML = "";
                    modifyMessage.innerText = "Data Modified successfully";
                    modifyMessage.style.color = "green";
                    product.splice(i, 1, modifyProduct2.toLowerCase());
                    showDatas();
                }
                else if(text === true) {
                    console.log("inside data exists")
                    modifyMessage.innerText = "Data already exists";
                    modifyMessage.style.color = "red";
                    showDatas();
                }
                break;
            }
            else {
                modifyMessage.innerText = "No match found";
                modifyMessage.style.color = "red";
                showDatas();

            }


        }
    }
    else {
        modifyMessage.innerText = "Please Enter some data";
        modifyMessage.style.color = "red";
        showDatas();

    }
}