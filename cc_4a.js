//Step 2// Product List including categories, price, and inventory 
let products = [{ // shirts, Shoes, Plates, Mugs, TV
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

// Displaying all of the products for the console 
console.log(`----------- Products ----------------`)
products.forEach(products => console.log (
    `${products.name} | ${products.category} | $${products.price} each | ${products.inventory} inv.`
));

//-------------------------------------------------------------------//
//Step 3// Creating a for of loop including a switch
for (let product of products) {
    let discounts = 0;

    switch (product.category) {
        case "apparel":
            discounts = 0.15 //15%
            break;
        case "kitchen":
            discounts = 0.10 //10%
            break;
        case "electronics":
            discounts = 0.20 //20%
            break;
        default:
            discounts = 0; //if it doesnt fall into any of the categories its 0%
    }

    let promoPrice = product.price - (product.price* discounts); //a formula used to calculate the price of an item after discounts
    product.promoPrice = promoPrice.toFixed(2) //making sure that the new price is added into the arrary as well as fixed to 2 decimals
}
//Displaying the promo price for all of the products
console.log(`------------ Promo Price --------------`)
products.forEach(products => console.log (
    `${products.name} | $${products.promoPrice}`
));

//Step 5// Create a customer cart loop
console.log(`-------------------------------------------`); // a way to break up the log

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
]; // so far the variable names used is: name, quantity, cart, type, and id

for (let customer of customers) {
    console.log(`--- Customer ID_${customer.id} (${customer.type})---`); //creating a heading for each of the customers carts
 
let subtotal = 0;//important and said to be used from the hints

for (let item of customer.cart) {
    let product = products.find(product => product.name === item.name) //use find to look through the products, then rename them to item

    if (product && product.inventory >= item.quantity) { //making sure that the product exist and that there is enough inventory
        let itemTotal = parseFloat(product.promoPrice) * item.quantity // need to switch promoPrice from string to number by using parsefloat
        subtotal += itemTotal // adding the item total of the cart to the subtotal
        product.inventory -= item.quantity //subtracting the item quantity from the cart to the stock of that item

        //logging the cart into the console plus some extra details for if the inventory is low 
        console.log(`${product.name} | $${product.promoPrice} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
            } else {
                console.log(`!Low Inventory! *${product.name}* | Available: ${product.inventory} | Wanted: ${item.quantity}`);
        }
}

//Listing the subtotal before the customer type discounts are applied
console.log(`Subtotal before discounts: $${subtotal.toFixed(2)}`);

//Step 4// Customer type discounts are created using an if...else statement
if (customer.type === "regular") { //technically I can get rid of this since its the same as else but Id rather list it just in case
    customerDiscounts = 0; }
    else if (customer.type === "student") {  // use customer.type instead of creating a new variable
        customerDiscounts = 0.05; } // 5%
    else if (customer.type === "senior") {
        customerDiscounts = 0.08; } // 8%
    else {
        customerDiscounts = 0; }


let discountAmount = subtotal * customerDiscounts; //calculating the total using the discounts
total = subtotal - discountAmount //the total!!

//displaying the total for every customer id
console.log(`Total after discounts: $${total.toFixed(2)}`);
}



//Updated Stock// Listing out all of the products stock after what was bought by customers
console.log(`----------- Updated Stock ----------------`)
products.forEach(products => console.log (
    `${products.name} | ${products.inventory} inv.`
));

//Step 6// listing out the keys for a product created in Step 2
console.log("------ Keys/Values for a Product ----");
let productKey = products[0];
for (let key in productKey) {
    console.log(`${key}: ${productKey[key]}`);
}

//Step 7// Just listing out all of the products again like I did for Step 2 but now updated with everything that was done above
console.log("------------ All Products After Updates --------");
for (let {name, category, price, promoPrice, inventory } of products) {
    console.log(`${name} | ${category} | Org: $${price.toFixed(2)} | Promo: $${promoPrice} | Inv: ${inventory}`);
}