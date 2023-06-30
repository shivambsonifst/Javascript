interface Product {
    id: number;
    partNumber: number;
    productName: string;
    size: string;
    color: string[] | string;
    description: string;
}

class Inventory {

    /* ALL INITIALIZATION */
    id = document.getElementById("productId") as HTMLInputElement;
    partNumber = document.getElementById("partNumber") as HTMLInputElement;
    productName = document.getElementById("productName") as HTMLInputElement;
    description = document.getElementById("description") as HTMLInputElement;
    radio = document.getElementsByName("size") as NodeListOf<HTMLInputElement>;
    checkboxes = document.getElementsByName("colors") as NodeListOf<HTMLInputElement>;
    mainTable: HTMLTableElement = document.getElementById("mainTable") as HTMLTableElement;
    saveProductItems = document.getElementById("saveProductItems") as HTMLButtonElement;
    save = document.getElementById("saveProductItems") as HTMLButtonElement;
    addMessage = document.getElementById("addMessage") as HTMLHeadElement;


    /* One Constant Product */
    products: Product[] = [{
        id: 1,
        partNumber: 101,
        productName: "shivam",
        size: "10",
        color: ["Red"],
        description: "Hello World"
    }];

    /* SHOW PRODUCT DETAILS  */
    showProducts() {

        let html = "" as string;
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
    }

    /* ADD BUTTON */
    addPoduct() {
        const id = this.id
        const partNumber = this.partNumber;
        const productName = this.productName;
        const size = this.sizeButton();
        const colors = this.colorsButton();
        const description = this.description;
        let getIdValue = this.products.filter(x => x.id === parseInt(id.value));
        let getPartNumberValue = this.products.filter(x => x.partNumber === parseInt(partNumber.value));

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
                    const addProduct: Product = {
                        id: id.valueAsNumber,
                        partNumber: partNumber.valueAsNumber,
                        productName: productName.value.toLocaleLowerCase(),
                        size: size,
                        color: colors,
                        description: description.value
                    }
                    this.products.push(addProduct);
                    this.showProducts();
                    this.message("Data Added successfully", "green");
                    this.resetFunction();
                    return addProduct;
                }
            }
            if (parseInt(partNumber.value) < 100 && parseInt(partNumber.value) > 200) {
                this.message("Part Number should be three digit number (ex. 101)", "red");
            }
        }
    }

    /* MODIFY BUTTON */
    showProductToModify() {
        let saveProductItems = this.saveProductItems;
        let id = this.id;
        let productName = this.productName;
        if (id.value !== "") {
            saveProductItems.disabled = false;
            for (let i = 0; i < this.products.length; i++) {
                if (parseInt(id.value) === this.products[i].id) {
                    this.showProductToModifyDatas(i);
                }
            }
        }
        if (productName.value !== "") {
            saveProductItems.disabled = false;
            for (let i = 0; i < this.products.length; i++) {
                if (productName.value.toLocaleLowerCase() === this.products[i].productName) {
                    this.showProductToModifyDatas(i);
                }
            }
        }
        if (id.value === "" && productName.value === "") {
            this.message("Please Enter either Product ID or Product Name to Modify", "red");
        }
    }

    /* SAVE BUTTON */
    saveFunction() {
        let productId = this.id;
        let save = this.save;
        let id = this.id
        let partNumber = this.partNumber;
        let productName = this.productName;
        let size = this.sizeButton();
        let colors = this.colorsButton();
        let description = this.description;

        this.formValidation(id, partNumber, productName, size, colors, description);

        if (id.value !== "" && partNumber.value !== "" && productName.value !== "" && size !== "" && colors !== null && description.value !== "") {
            for (let i = 0; i < this.products.length; i++) {
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
    }


    formValidation(id, partNumber, productName, size, colors, description) {
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
    }


    /* DELETE BUTTON */
    deletePoduct() {
        const id = this.id;
        const productName = this.productName;
        if (id.value !== "" || productName.value !== "") {
            for (let i = 0; i < this.products.length; i++) {
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
    }


    /* SEARCH BUTTON */
    searchProduct() {
        const id = this.id;
        const productName = this.productName;
        let mainTable = this.mainTable;
        let html = "" as string;
        let searchId = this.products.filter(product => product.id === parseInt(id.value));
        let searchName = this.products.filter(product => product.productName === productName.value);
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
    }


    /* PRINTING SEARCHED PRODUCTS */
    showSearchedProductItems(html: string, id: number, productName: string) {
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
    }


    /* SIZE BUTTON */
    sizeButton() {
        let size: string = "";
        let checkboxes = document.getElementsByName("size") as NodeListOf<HTMLInputElement>;
        checkboxes.forEach((sizes) => {
            if (sizes.checked) {
                size = sizes.value;
            }
        })
        return size;
    }

    /* COLOR BUTTON */
    colorsButton() {
        let color: string[] = [];
        let checkboxes = document.getElementsByName("colors") as NodeListOf<HTMLInputElement>;
        checkboxes.forEach((colors) => {
            if (colors.checked) {
                color.push(colors.value);
            }
        })
        return color;
    }


    /* MODIFY SIZE BUTTON */
    displaySizeButton() {
        let id = this.id;
        let productName = this.productName;
        for (let i = 0; i < this.products.length; i++) {
            if (parseInt(id.value) === this.products[i].id || productName.value === this.products[i].productName) {
                for (let k in this.radio) {
                    if (this.products[i].size === this.radio[k].value) {
                        this.radio[k].checked = true;
                    }
                }
            }
        }
    }


    /* MODIFY COLOR BUTTON */
    displayColorButton() {
        let color: string[] = [];
        let id = this.id
        let productName = this.productName;
        for (let i = 0; i < this.products.length; i++) {
            if (parseInt(id.value) === this.products[i].id || productName.value === this.products[i].productName) {
                for (let j = 0; j < this.products[i].color.length; j++) {
                    for (let k in this.radio) {
                        if (this.products[i].color[j] === this.checkboxes[k].value) {
                            this.checkboxes[k].checked = true;
                        }
                    }
                }
            }
        }
    }


    /* FUNCTION FOR SORTING PRODUCTS BY ID */
    sortBypartNumberFunction() {
        this.products.sort(this.GetSortOrder("partNumber"));
        for (let item in this.products) {
            if (this.products[item].partNumber) {
                this.message("Sorted By Part Number", "green");
                this.showProducts();
            }
        }
    }


    /* FUNCTION FOR SORTING PRODUCTS BY NAME */
    sortByNameFunction() {
        this.products.sort(this.GetSortOrder("productName"));
        for (let item in this.products) {
            if (this.products[item].productName) {
                this.message("Sorted By Product Name", "green");
                this.showProducts();
            }
        }
    }


    /* MAIN FUNCTION FOR SORTING */
    GetSortOrder(prop: string | number) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }

    /* RESET FUNCTION FOR INPUTS */
    resetFunction() {
        this.id.value = "";
        this.partNumber.value = "";
        this.productName.value = "";
        this.description.value = "";
        for (let i in this.radio) {
            this.radio[i].checked = false;
        }
        for (let i in this.checkboxes) {
            this.checkboxes[i].checked = false;
        }
    }

    /* RESET BUTTON */
    resetFunctionButton() {
        this.resetFunction();
        this.addMessage.innerText = "";
    }

    /* MESSAGE FUNTION */
    message(showMessage: string, showColor: string) {
        let addMessage = this.addMessage;
        addMessage.innerText = showMessage;
        addMessage.style.color = showColor;
        setTimeout(function () {
            addMessage.innerText = "";
        }, 2000);
    }

    showProductToModifyDatas(i: number) {
        const id = this.id;
        id.value = this.products[i].id.toString();
        id.readOnly = true;
        const partNumber = this.partNumber;
        partNumber.value = this.products[i].partNumber.toString();
        partNumber.readOnly = true;
        const productName = this.productName
        productName.value = this.products[i].productName;

        this.displaySizeButton();
        this.displayColorButton();
        const description = this.description;
        description.value = this.products[i].description;
    }
}


const inventory = new Inventory();

/*  SHOWING ALL PRODUCTS  */
let showProduct = inventory.showProducts();
console.log("Products", inventory.products);
this.saveProductItems.disabled = true;