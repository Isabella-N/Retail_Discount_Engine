// Shirts, Shoes, Plates, Mugs, TV
let products = [{
    name: "Shirt", category: "apparel", price: 35.99, inventort: 50
},{
    name: "Shoes", category: "apparel", price: 44.00, inventort: 100
},{
    name: "Plates", category: "kitchen", price: 15.00, inventort: 130
},{
    name: "Mugs", category: "kitchen", price: 6.99, inventort: 121
},{
    name: "TV", category: "electronics", price: 90.00, inventort: 40
}];

for (let product of products) {
    let discounts = 0;

    switch (product.category) {
        case "apparel":
            discounts = 0.10
            break;
        case "kitchen":
            discounts = 0.05
            break;
        case "electronics":
            discounts = 0.20
            break;
        default:
            discounts = 0;
    }

    let promoPrice = product.price * (product.price* discounts);
    product.promoPrice = promoPrice.toFixed(2)
}

let customerType = ["regular", "student", "senior"]
let customerDiscounts = 0;

if (customerType = "regular") {
    customerDiscounts = 0}
    else if (customerType = "student") {
        customerDiscounts = 0.05}
    else if (customerType = "senior") {
        customerDiscounts = 0.08}
    else {
        customerDiscounts = 0}

