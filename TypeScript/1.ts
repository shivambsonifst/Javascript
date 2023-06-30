interface Product {
    id: number;
    partNumber: number;
    productName: string;
    size: string;
    color: string[] | string;
    description: string;
}

class Inventory {
    public products: Product[] = [{
        id: 1,
        partNumber: 101,
        productName: "Shivam",
        size: "10",
        color: ["Red"],
        description: "Hello World"
    }];

    showProducts() {
        let mainTable: HTMLTableElement = document.getElementById("mainTable") as HTMLTableElement;
            // let rowHeading: HTMLTableRowElement = mainTable.insertRow(0) as HTMLTableRowElement;
            // let data1 = rowHeading.insertCell(0);
            // data1.innerHTML = "Description";
            // data1.style.fontWeight = "bold";
            // let data2 = rowHeading.insertCell(0);
            // data2.innerHTML = "Color";
            // data2.style.fontWeight = "bold";
            // let data3 = rowHeading.insertCell(0);
            // data3.innerHTML = "Size";
            // data3.style.fontWeight = "bold";
            // let data4 = rowHeading.insertCell(0);
            // data4.innerHTML = "Name";
            // data4.style.fontWeight = "bold";
            // let data5 = rowHeading.insertCell(0);
            // data5.innerHTML = "Part Number";
            // data5.style.fontWeight = "bold";
            // let data6 = rowHeading.insertCell(0);
            // data6.innerHTML = "ID";
            // data6.style.fontWeight = "bold";
            // for (var i = 0; i < this.products.length; i++) {
            //     let rowData: HTMLTableRowElement = mainTable.insertRow(-1) as HTMLTableRowElement;
            //     let id = rowData.insertCell(-1);
            //     id.innerHTML = this.products[i].id.toString();
            //     let partNumber = rowData.insertCell(-1);
            //     partNumber.innerHTML = this.products[i].partNumber.toString();
            //     let productName = rowData.insertCell(-1);
            //     productName.innerHTML = this.products[i].productName;
            //     let size = rowData.insertCell(-1);
            //     size.innerHTML = this.products[i].size;
            //     let color = rowData.insertCell(-1);
            //     color.innerHTML = this.products[i].color.toString();
            //     let description = rowData.insertCell(-1);
            //     description.innerHTML = this.products[i].description;
            // }

            let html = "" as string;
            if (this.products.length >= 1) {
                html += "<tr>";
                html += "<th>ID</th>";
                html += "<th>Part Number</th>";
                html += "<th>Name</th>";
                html += "<th>Size</th>";
                html += "<th>Color</th>";
                html += "<th>Description</th>";
                html += "<th>Action Buttons</th>";
                html += "</tr>";
                for (var i = 0; i < this.products.length; i++) {
                    html += "<tr>";
                    html += "<td>" + this.products[i].id + "</td>";
                    html += "<td>" + this.products[i].partNumber + "</td>";
                    html += "<td>" + this.products[i].productName + "</td>";
                    html += "<td>" + this.products[i].size + "</td>";
                    html += "<td>" + this.products[i].color + "</td>";
                    html += "<td>" + this.products[i].description + "</td>";
                    html += "<td><button id= 'actionButton' onclick=\"modifyButton(" + i + ")\">Modify</button><button id= 'actionButton' onclick=\"deleteButton(" + i + ")\">Delete</button><button id= 'actionButton' onclick=\"saveButton(" + i + ")\">Save</button></td>";
                    html += "</tr>";
                }
                mainTable.innerHTML = html;
            }
        return this.products;
    }

    addPoduct() {
        let mainTable: HTMLTableElement = document.getElementById("mainTable") as HTMLTableElement;
        mainTable.innerHTML = ""
        const id = document.getElementById("productId") as HTMLInputElement;
        const partNumber = document.getElementById("partNumber") as HTMLInputElement;
        const productName = document.getElementById("productName") as HTMLInputElement;
        const size = this.sizeButton();
        const colors = this.colorsButton();
        const description = document.getElementById("description") as HTMLInputElement;
        console.log(id.valueAsNumber);
        console.log(partNumber.valueAsNumber);
        
        const addProduct: Product = {
            id: id.valueAsNumber,
            partNumber: partNumber.valueAsNumber,
            productName: productName.value,
            size: size,
            color: colors,
            description: description.value
        }
        this.products.push(addProduct);
        this.showProducts();
        console.log("product array", this.products);
        console.log("first product", addProduct);
        return addProduct;
    }

    sizeButton() {
        let radio1 = document.getElementById('radio1') as HTMLInputElement;
        let radio2 = document.getElementById('radio2') as HTMLInputElement;
        let radio3 = document.getElementById('radio3') as HTMLInputElement;
        let radio4 = document.getElementById('radio4') as HTMLInputElement;
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
    colorsButton() {
            let color: string[] = []
            let check1 = document.getElementById('check1') as HTMLInputElement;
            let check2 = document.getElementById('check2') as HTMLInputElement;
            let check3 = document.getElementById('check3') as HTMLInputElement;
            let check4 = document.getElementById('check4') as HTMLInputElement;
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
}
    const inventory = new Inventory();


    /*  Getting all products  */
let showProduct = inventory.showProducts();
console.log("initial show",showProduct);

/* adding new products */
const addPoduct = document.getElementById("addProductItems") as HTMLButtonElement;
addPoduct.addEventListener("click", (e: Event) => inventory.addPoduct() );






