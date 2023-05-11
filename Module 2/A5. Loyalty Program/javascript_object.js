// Task 1: Create a Customer Object
let customer = {
    customer_name: "Johnny Manggo",
    points: 12300,
    cart: [{
                item: "Shampoo",
                quantity: 2,
                price_$: 3
            },
            {
                item: "Soap",
                quantity: 2,
                price_$: 2
            },
            {
                item: "Toothpaste",
                quantity: 1,
                price_$: 3
            }
    ]
}

// Task 2: Greet the Customer and Show Their Points
console.log(`Hi, ${customer.customer_name}! We are happy to see you today.`)
console.log(`Your current points are: ${customer.points}`)


// Task 3: Print the Receipt
let pricePerItem    = 0
let purchasedItem   = ""
let quantityPerItem = 0
let totalPrice      = 0
let totalItem       = customer.points

console.log("Purchased Items:")
for(i in customer.cart){
    pricePerItem   = customer.cart[i].quantity * customer.cart[i].price_$
    purchasedItem  = `${customer.cart[i].quantity} x ${customer.cart[i].item} --- $${pricePerItem}.00`
    totalPrice    += pricePerItem
    quantityPerItem      = customer.cart[i].quantity
    totalItem    += quantityPerItem

    console.log(purchasedItem)
}

console.log(`Total Bill: ${totalPrice}`)
console.log(`New Current Points: ${totalItem}`)