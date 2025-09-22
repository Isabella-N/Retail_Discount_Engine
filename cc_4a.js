// Shirts, Shoes, Plates, Mugs, TV
let products = [{
    name: "Shirt", category: "apparel", price: 35.99, inventory: 50
},{
    name: "Shoes", category: "apparel", price: 44.00, inventory: 100
},{
    name: "Plates", category: "kitchen", price: 15.00, inventory: 130
},{
    name: "Mugs", category: "kitchen", price: 6.99, inventory: 121
},{
    name: "TV", category: "electronics", price: 90.00, inventory: 40
}];

// Displaying all of the products
console.log(`----------- Products ----------------`)
products.forEach(products => console.log (
    `${products.name} | ${products.category} | $${products.price} | ${products.inventory}`
));

//---------------------------------------------------
for (let product of products) {
    let discounts = 0;

    switch (product.category) {
        case "apparel":
            discounts = 0.15
            break;
        case "kitchen":
            discounts = 0.10
            break;
        case "electronics":
            discounts = 0.20
            break;
        default:
            discounts = 0;
    }

    let promoPrice = product.price - (product.price* discounts);
    product.promoPrice = promoPrice.toFixed(2)
}
console.log(`------------ Promo Price --------------`)
products.forEach(products => console.log (
    `${products.name} | $${products.promoPrice}`
));
// Everything works from here and above

let customers = [
    {id: 1, type: "regular", 
        cart: [{name: "Shirt", quantity: 3}, 
            {name:"TV", quantity: 1}]},
    {id: 2, type: "student", 
        cart: [{name: "Shoes", quantity: 2},
            {name: "Mugs", quantity: 5},
            {name: "Plates", quantity: 10}]},
    {id: 3, type: "senior", 
        cart: [{name: "TV", quantity: 2},
            {name: "Mugs", quantity: 10}]}
]

for (let customer of customers) {
    console.log(`--- Customer ID_${customer.id} (${customer.type})---`);
}

let customerType = ["regular", "student", "senior"];

if (customerType === "regular") {
    customerDiscounts = 0; }
    else if (customerType === "student") {
        customerDiscounts = 0.05; }
    else if (customerType === "senior") {
        customerDiscounts = 0.08; }
    else {
        customerDiscounts = 0; }

// Id, 
let checkOutCart = [{}]