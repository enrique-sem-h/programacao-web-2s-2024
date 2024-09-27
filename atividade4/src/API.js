class Product {
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}

let stock = new Array();

function addProduct(id, name, amount) {
    stock.push(new Product(id, name, amount));
}

function list() {
    listedItems = "";

    if (stock.length == 0) {
        listedItems = "There are no items in stock!";
        return listedItems;
    } else {

        listedItems = "ID\tName\tAmount\n";
        for (i = 0; i < stock.length; i++) {
            listedItems += stock[i].id + "\t" + stock[i].name + "\tx" + stock[i].amount;
            listedItems += "\n";
        }
        return listedItems;
    }
}

function remove(id) {
    for (i = 0; i < stock.length; i++) {
        if (stock[i].id == id) {
            stock.splice(i, 1);
            break;
        }
    }
}

function edit(id, amount) {
    for (i = 0; i < stock.length; i++) {
        if (stock[i].id == id) {
            stock[i].amount = amount;
            break;
        }
    }
}

// addProduct(1, "test", 2);
// console.log(list());

module.exports = {
    Product,
    stock,
    addProduct,
    list,
    remove,
    edit
}