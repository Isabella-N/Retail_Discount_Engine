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
    `${products.name} | ${products.category} | $${products.price} each | ${products.inventory} inv.`
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
console.log(`-------------------------------------------`);

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
];

for (let customer of customers) {
    console.log(`--- Customer ID_${customer.id} (${customer.type})---`);
 
let subtotal = 0;

for (let item of customer.cart) {
    let product = products.find(product => product.name === item.name)

    if (product && product.inventory >= item.quantity) {
        let itemTotal = parseFloat(product.promoPrice) * item.quantity
        subtotal += itemTotal // adding the item total of the cart to the subtotal
        product.inventory -= item.quantity //subtracting the item quantity from the cart to the stock of that item

        //logging the cart into the console plus some extra details for if the inventory is low 
        console.log(`${product.name} | $${product.promoPrice} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
            } else {
                console.log(`!Low Inventory! *${product.name}* | Available: ${product.inventory} | Wanted: ${item.quantity}`);
        }
}

console.log(`Subtotal before discounts: $${subtotal.toFixed(2)}`);


if (customer.type === "regular") {
    customerDiscounts = 0; }
    else if (customer.type === "student") {
        customerDiscounts = 0.05; }
    else if (customer.type === "senior") {
        customerDiscounts = 0.08; }
    else {
        customerDiscounts = 0; }


let discountAmount = subtotal * customerDiscounts;
total = subtotal - discountAmount

console.log(`Total after discounts: $${total.toFixed(2)}`);
}



//Updated Stock
console.log(`----------- Updated Stock ----------------`)
products.forEach(products => console.log (
    `${products.name} | ${products.inventory} inv.`
));

console.log("------ Keys/Values for a Product ----");
let productKey = products[0];
for (let key in productKey) {
    console.log(`${key}: ${productKey[key]}`);
}

console.log("------------ All Products After Updates --------");
for (let {name, category, price, promoPrice, inventory } of products) {
    console.log(`${name} | ${category} | Org: $${price.toFixed(2)} | Promo: $${promoPrice} | Inv: ${inventory}`);
}