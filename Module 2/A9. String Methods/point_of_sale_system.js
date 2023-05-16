// Task 1: Define the Store Inventory Array
const store_inventory = [
    {
        item: "Shampoo",
        quantity: 1,
        price_$: 3
    },
    {
        item: "Soap",
        quantity: 0,
        price_$: 2
    },
    {
        item: "Toothpaste",
        quantity: 2,
        price_$: 3
    }
]


// Task 2: Define the Delivered Items Array
const new_deliveries =[
    {
        item: "Shampoo",
        quantity: 5,
        price_$: 4,
        inventory_index: 0
    },
    {
        item: "Soap",
        quantity: 10,
        price_$: 2,
        inventory_index: 1
    },
    {
        item: "Toothpaste",
        quantity: 10,
        price_$: 3,
        inventory_index: 2
    }
]


// Task 3: Create a Function to Process Each Delivery Item
function processDeliveries(items_obj){

    // Task 4: Process All Delivered Items
    items_obj.forEach((element, index) => {
        store_inventory[index].quantity += items_obj[index].quantity
        store_inventory[index].price_$ = items_obj[index].price_$
    });
    
    // console.log(`Delivered items have been added to the inventory.`)
    // console.log(`New inventory summary:`)
    // console.log(store_inventory)
}

// processDeliveries(new_deliveries)


// Task 5: Generate a report summary
function productSummary(items_obj){
    let item_id  = "" 
    let stocks   = 0
    let price    = 0
    let message  = ""
    let report_summary = []
    
    items_obj.map((element, index) => {
        // variable initialization
        stocks       =  store_inventory[index].quantity
        price        =  store_inventory[index].price_$
        let remarks  = "good"
        
        // updating the value
        item_id  =  element.item.slice(0,3).toLowerCase()
        stocks  +=  element.quantity
        price    =  element.price_$
        
        // preparing the output
        message  = `ItemID: ${item_id} | ${element.item} | stocks_left: ${stocks} | Remarks: `
        remarks  =  stocks < 10 ? "item stock to low" : remarks
        
        report_summary.push(message.concat(remarks))
    });

    console.log(report_summary)
}

productSummary(new_deliveries)