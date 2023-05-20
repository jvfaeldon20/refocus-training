// JV's clothing store
var isLoggedIn = false
var isOrderConfirmed = false
var clothing_store = {
    shop_name: "JV's Clothing",
    address: "Calamba Laguna",
    code: "JVF2023",
    accounts: [],
    items: [],
    cart_items:[],
    purchased_items:[],
}

function showMessage(msg){
    console.log(msg)
    console.log(`===========================================`) 
}

function Users(){
    function addUser(data={}){
        clothing_store.accounts.push(data)
        showMessage(`${data.firstname} ${data.lastname} created successfully!`)
    }

    function loginUser(inputUser, inputPass){
        clothing_store.accounts.forEach((el, i) => {
            if(el.username == inputUser && el.password == inputPass){
                isLoggedIn = true
                showMessage(`Login success! Hi ${clothing_store.accounts[i].firstname} ${clothing_store.accounts[i].lastname}!`)
            }
        });
    
        if(!isLoggedIn){
           showMessage("Invalid login, please try again!")
        }
    }

    return {
        addUser, loginUser
    }
}

function Store(){
    function addItem(data){
        if(isLoggedIn){
            clothing_store.items.push(data)
            showMessage(`${data.item_name} has been added successfully.\nStocks: ${data.stocks}`)
        }else{
            showMessage(`Create item failed. Please login first!`)
        }
    }

    function addToCart(data){
        if(isLoggedIn){
            let storeItemQty = clothing_store.items[data.item_index].stocks
            let purchasingItemQty = data.quantity
            if(purchasingItemQty <= storeItemQty){
                clothing_store.cart_items.push(data)
                showMessage(`Items added to cart. Proceed to checkout?`)
            }else{
                showMessage(`Sorry, stocks are limited at the moment. Please submit a valid number.\nAvailable stocks: ${storeItemQty}`)
            }
        }else{
            showMessage(`Add item to cart failed. Please login first!`)
        }
    }

    function checkoutOrder(isOrderConfirmed, data){
        if(isLoggedIn){
            let priceItemTotal = 0
            let subTotal = 0

            if(isOrderConfirmed){
                receipt_items = []
                console.log(`Congrats! Purchase item completed. Heres your receipt!`)
                console.log(`----------------`)
                console.log(`PURCHASED ITEMS:`)
                console.log(`----------------`)
                data.forEach((el, i) => {
                    // store item variable declaration
                    item_price    = clothing_store.items[el.item_index].price 
                    item_quantity = clothing_store.items[el.item_index].stocks

                    // current item stocks
                    // console.log(`item quantity: ${item_quantity}`)
                    
                    // deducted item stocks
                    item_quantity -= el.quantity
                    // console.log(`deducted item quantity: ${item_quantity}`)
                    
                    // total price per item
                    priceItemTotal = el.quantity * item_price
                    
                    // sub total
                    subTotal += priceItemTotal
                    
                    // items breakdown
                    console.log(`[ Quantity: ${el.quantity}x] Item: ${clothing_store.items[el.item_index].item_name} ========== P${priceItemTotal}`)
                })
                console.log(`----------------`)
                console.log(`TOTAL: P${subTotal}`)
               
                // removed cart items after purchased
                clothing_store.cart_items[0] = []
            }
        }else{
            showMessage(`Purchase item failed. Please login first!`)
        }
    }

    return {
        addItem,
        addToCart,
        checkoutOrder 
    }
}


var userControl = Users()
var storeControl = Store()

// Adding user
userControl.addUser({
    firstname: "JV",
    lastname: "Faeldon",
    age: 27,
    birthdate: '1996-11-20',
    username: "jvfaeldon",
    password: "jvfa1245"
})

// Loggin user
userControl.loginUser("jvfaeldon", "jvfa1245")

// Adding store items
storeControl.addItem(
    {
        item_name: "Dark Gray Denim M12",
        category: "Jeans",
        price: 2200,
        stocks: 20
    }
)

storeControl.addItem(
    {
        item_name: "Chino Kakki 600",
        category: "Cotton Chinos",
        price: 2500,
        stocks: 15
    }
)

// Adding items to cart
storeControl.addToCart({
    item_index: 0,
    quantity: 3
})

storeControl.addToCart({
    item_index: 1,
    quantity: 2
})

// Unconfirmed cart items - still need some items to add in the card
storeControl.checkoutOrder(false)

// Confirmed cart items - ready for checkout 
storeControl.checkoutOrder(true, clothing_store.cart_items)