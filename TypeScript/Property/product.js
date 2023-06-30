var Inventory = /** @class */ (function () {
    function Inventory() {
        /* ALL INITIALIZATION */
        this.id = document.getElementById("productId");
        this.partNumber = document.getElementById("partNumber");
        this.productName = document.getElementById("productName");
        this.description = document.getElementById("description");
        this.radio = document.getElementsByName("size");
        this.checkboxes = document.getElementsByName("colors");
        this.mainTable = document.getElementById("mainTable");
        this.saveProductItems = document.getElementById("saveProductItems");
        this.save = document.getElementById("saveProductItems");
        this.addMessage = document.getElementById("addMessage");
        /* One Constant Product */
        this.products = [{
                id: 1,
                partNumber: 101,
                productName: "shivam",
                size: "10",
                color: ["Red"],
                description: "Hello World"
            }];
    }
    /* SHOW PRODUCT DETAILS  */
    Inventory.prototype.showProducts = function () {
        var html = "";
        if (this.products.length >= 1) {
            html += "<tr>";
            html += "<th>ID</th>";
            html += "<th>Part Number</th>";
            html += "<th>Name</th>";
            html += "<th>Size</th>";
            html += "<th>Color</th>";
            html += "<th>Description</th>";
            html += "</tr>";
            for (var i = 0; i < this.products.length; i++) {
                html += "<tr>";
                html += "<td>" + this.products[i].id + "</td>";
                html += "<td>" + this.products[i].partNumber + "</td>";
                html += "<td>" + this.products[i].productName + "</td>";
                html += "<td>" + this.products[i].size + "</td>";
                html += "<td>" + this.products[i].color + "</td>";
                html += "<td>" + this.products[i].description + "</td>";
                html += "</tr>";
            }
            this.mainTable.innerHTML = html;
        }
        return this.products;
    };
    /* ADD BUTTON */
    Inventory.prototype.addPoduct = function () {
        var id = this.id;
        var partNumber = this.partNumber;
        var productName = this.productName;
        var size = this.sizeButton();
        var colors = this.colorsButton();
        var description = this.description;
        var getIdValue = this.products.filter(function (x) { return x.id === parseInt(id.value); });
        var getPartNumberValue = this.products.filter(function (x) { return x.partNumber === parseInt(partNumber.value); });
        // console.log(id.valueAsNumber);
        // console.log(partNumber.valueAsNumber);
        this.formValidation(id, partNumber, productName, size, colors, description);
        if (id.value !== "" && partNumber.value !== "" && productName.value !== "" && size !== "" && colors !== null && description.value !== "") {
            if (parseInt(partNumber.value) > 100 && parseInt(partNumber.value) < 200) {
                if (getIdValue.length > 0) {
                    this.message("Enter unique Product ID ", "red");
                }
                if (getPartNumberValue.length > 0) {
                    this.message("Enter unique Product number ", "red");
                }
                if (getIdValue.length <= 0 && getPartNumberValue.length <= 0) {
                    var addProduct = {
                        id: id.valueAsNumber,
                        partNumber: partNumber.valueAsNumber,
                        productName: productName.value.toLocaleLowerCase(),
                        size: size,
                        color: colors,
                        description: description.value
                    };
                    this.products.push(addProduct);
                    this.showProducts();
                    this.message("Data Added successfully", "green");
                    // console.log("product array", this.products);
                    // console.log("first product", addProduct);
                    this.resetFunction();
                    return addProduct;
                }
            }
            if (parseInt(partNumber.value) < 100 && parseInt(partNumber.value) > 200) {
                this.message("Part Number should be three digit number (ex. 101)", "red");
            }
        }
    };
    /* MODIFY BUTTON */
    Inventory.prototype.showProductToModify = function () {
        var saveProductItems = this.saveProductItems;
        // console.log("inside modify product");
        var id = this.id;
        var productName = this.productName;
        if (id.value !== "") {
            saveProductItems.disabled = false;
            // console.log("inside loop")
            for (var i = 0; i < this.products.length; i++) {
                if (parseInt(id.value) === this.products[i].id) {
                    this.showProductToModifyDatas(i);
                }
            }
        }
        if (productName.value !== "") {
            saveProductItems.disabled = false;
            for (var i = 0; i < this.products.length; i++) {
                if (productName.value.toLocaleLowerCase() === this.products[i].productName) {
                    this.showProductToModifyDatas(i);
                }
            }
        }
        if (id.value === "" && productName.value === "") {
            this.message("Please Enter either Product ID or Product Name to Modify", "red");
        }
    };
    /* SAVE BUTTON */
    Inventory.prototype.saveFunction = function () {
        var productId = this.id;
        var save = this.save;
        var id = this.id;
        var partNumber = this.partNumber;
        var productName = this.productName;
        var size = this.sizeButton();
        var colors = this.colorsButton();
        var description = this.description;
        this.formValidation(id, partNumber, productName, size, colors, description);
        if (id.value !== "" && partNumber.value !== "" && productName.value !== "" && size !== "" && colors !== null && description.value !== "") {
            for (var i = 0; i < this.products.length; i++) {
                if (parseInt(productId.value) === this.products[i].id) {
                    this.products[i].id = id.valueAsNumber;
                    this.products[i].partNumber = partNumber.valueAsNumber;
                    this.products[i].productName = productName.value.toLocaleLowerCase();
                    this.products[i].size = size;
                    this.products[i].color = colors;
                    this.products[i].description = description.value;
                }
            }
            this.showProducts();
            this.message("Data Modified successfully", "green");
            id.readOnly = false;
            partNumber.readOnly = false;
            this.resetFunction();
            save.disabled = true;
            return this.products;
        }
    };
    Inventory.prototype.formValidation = function (id, partNumber, productName, size, colors, description) {
        if (description.value === "") {
            this.message("Please Enter Description", "red");
        }
        if (colors === "") {
            this.message("Please Select Color ", "red");
        }
        if (size === "") {
            this.message("Please Select size", "red");
        }
        if (productName.value === "") {
            this.message("Please Enter Product Name", "red");
        }
        if (partNumber.value === "") {
            this.message("Please Enter Part Number", "red");
        }
        if (id.value === "") {
            this.message("Please Enter Product ID", "red");
        }
    };
    /* DELETE BUTTON */
    Inventory.prototype.deletePoduct = function () {
        var id = this.id;
        var productName = this.productName;
        if (id.value !== "" || productName.value !== "") {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === parseInt(id.value) || this.products[i].productName === productName.value) {
                    this.products.splice(i, 1);
                    this.showProducts();
                    this.message("Data Deleted successfully", "green");
                    this.resetFunction();
                }
                if (this.products[i].id !== parseInt(id.value)) {
                    this.message("Product Id not found", "red");
                }
                if (this.products[i].productName !== productName.value) {
                    this.message("Product Name not found", "red");
                }
            }
        }
        if (id.value === "" && productName.value === "") {
            this.message("Please Enter either Product ID or Product Name to Modify", "red");
            this.resetFunction();
        }
    };
    /* SEARCH BUTTON */
    Inventory.prototype.searchProduct = function () {
        var id = this.id;
        var productName = this.productName;
        var mainTable = this.mainTable;
        var html = "";
        var searchId = this.products.filter(function (product) { return product.id === parseInt(id.value); });
        var searchName = this.products.filter(function (product) { return product.productName === productName.value; });
        if (id.value !== "" || productName.value !== "") {
            if (searchId.length > 0 || searchName.length > 0) {
                this.showSearchedProductItems(html, parseInt(id.value), productName.value);
                this.message("Match Found ", "green");
                this.resetFunction();
            }
            if (id.value !== "" && searchId.length <= 0) {
                this.message("Match not found", "red");
                this.resetFunction();
            }
            if (productName.value !== "" && searchName.length <= 0) {
                this.message("Match not found", "red");
                this.resetFunction();
            }
        }
        if (id.value != "" && productName.value !== "") {
            this.message("Please Enter either Product ID or Product Name to Modify", "red");
            this.resetFunction();
        }
    };
    /* PRINTING SEARCHED PRODUCTS */
    Inventory.prototype.showSearchedProductItems = function (html, id, productName) {
        html += "<tr>";
        html += "<th>ID</th>";
        html += "<th>Part Number</th>";
        html += "<th>Name</th>";
        html += "<th>Size</th>";
        html += "<th>Color</th>";
        html += "<th>Description</th>";
        html += "</tr>";
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id || this.products[i].productName === productName) {
                html += "<tr>";
                html += "<td>" + this.products[i].id + "</td>";
                html += "<td>" + this.products[i].partNumber + "</td>";
                html += "<td>" + this.products[i].productName + "</td>";
                html += "<td>" + this.products[i].size + "</td>";
                html += "<td>" + this.products[i].color + "</td>";
                html += "<td>" + this.products[i].description + "</td>";
                html += "</tr>";
            }
        }
        this.mainTable.innerHTML = html;
    };
    /* SIZE BUTTON */
    Inventory.prototype.sizeButton = function () {
        var size = "";
        var checkboxes = document.getElementsByName("size");
        checkboxes.forEach(function (sizes) {
            if (sizes.checked) {
                size = sizes.value;
            }
        });
        // console.log(size);
        return size;
    };
    /* COLOR BUTTON */
    Inventory.prototype.colorsButton = function () {
        var color = [];
        var checkboxes = document.getElementsByName("colors");
        checkboxes.forEach(function (colors) {
            if (colors.checked) {
                color.push(colors.value);
            }
        });
        // console.log(color);
        return color;
    };
    /* MODIFY SIZE BUTTON */
    Inventory.prototype.displaySizeButton = function () {
        var id = this.id;
        var productName = this.productName;
        for (var i = 0; i < this.products.length; i++) {
            if (parseInt(id.value) === this.products[i].id || productName.value === this.products[i].productName) {
                for (var k in this.radio) {
                    if (this.products[i].size === this.radio[k].value) {
                        this.radio[k].checked = true;
                    }
                }
            }
        }
    };
    /* MODIFY COLOR BUTTON */
    Inventory.prototype.displayColorButton = function () {
        var color = [];
        var id = this.id;
        var productName = this.productName;
        for (var i = 0; i < this.products.length; i++) {
            if (parseInt(id.value) === this.products[i].id || productName.value === this.products[i].productName) {
                for (var j = 0; j < this.products[i].color.length; j++) {
                    for (var k in this.radio) {
                        if (this.products[i].color[j] === this.checkboxes[k].value) {
                            this.checkboxes[k].checked = true;
                        }
                    }
                }
            }
        }
    };
    /* FUNCTION FOR SORTING PRODUCTS BY ID */
    Inventory.prototype.sortBypartNumberFunction = function () {
        this.products.sort(this.GetSortOrder("partNumber"));
        for (var item in this.products) {
            if (this.products[item].partNumber) {
                // console.log(this.products[item].partNumber)
                this.message("Sorted By Part Number", "green");
                this.showProducts();
            }
        }
    };
    /* FUNCTION FOR SORTING PRODUCTS BY NAME */
    Inventory.prototype.sortByNameFunction = function () {
        this.products.sort(this.GetSortOrder("productName"));
        for (var item in this.products) {
            if (this.products[item].productName) {
                // console.log(this.products[item].productName)
                this.message("Sorted By Product Name", "green");
                this.showProducts();
            }
        }
    };
    /* MAIN FUNCTION FOR SORTING */
    Inventory.prototype.GetSortOrder = function (prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    };
    /* RESET FUNCTION FOR INPUTS */
    Inventory.prototype.resetFunction = function () {
        this.id.value = "";
        this.partNumber.value = "";
        this.productName.value = "";
        this.description.value = "";
        for (var i in this.radio) {
            this.radio[i].checked = false;
        }
        for (var i in this.checkboxes) {
            this.checkboxes[i].checked = false;
        }
    };
    /* RESET BUTTON */
    Inventory.prototype.resetFunctionButton = function () {
        this.resetFunction();
        this.addMessage.innerText = "";
    };
    /* MESSAGE FUNTION */
    Inventory.prototype.message = function (showMessage, showColor) {
        var addMessage = this.addMessage;
        addMessage.innerText = showMessage;
        addMessage.style.color = showColor;
        setTimeout(function () {
            addMessage.innerText = "";
        }, 2000);
    };
    Inventory.prototype.showProductToModifyDatas = function (i) {
        var id = this.id;
        id.value = this.products[i].id.toString();
        id.readOnly = true;
        var partNumber = this.partNumber;
        partNumber.value = this.products[i].partNumber.toString();
        partNumber.readOnly = true;
        var productName = this.productName;
        productName.value = this.products[i].productName;
        this.displaySizeButton();
        this.displayColorButton();
        var description = this.description;
        description.value = this.products[i].description;
    };
    return Inventory;
}());
var inventory = new Inventory();
/*  SHOWING ALL PRODUCTS  */
var showProduct = inventory.showProducts();
console.log("Products", inventory.products);
this.saveProductItems.disabled = true;
