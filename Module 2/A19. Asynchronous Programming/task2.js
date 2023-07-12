const items = require('./api.json')

const checkStocks = (seconds, callback, itemid) => {
    const ms = seconds * 1000
    return new Promise((resolve, reject) => {
        console.log("Checking product status..")
        setTimeout(() => {
            const index = items.findIndex((item) => item.itemID === itemid);
            const itemData = items[index];
            if(index <= -1){
                reject(console.log(new Error("Item ID not found!")))
            }else{
              if(itemData.quantity <= 2){
                resolve(console.log("It needs restocking as soon as possible."))
                callback(itemid)
              }else{
                resolve(console.log(`The item you chose is ${itemData.itemName}`))
                resolve(console.log(`It has ${itemData.quantity}, no need for restocking at the moment`))
              }
            }
        }, ms)
    })
}
  
const restock = (index) => {
    [index] = items
    index.quantity += 5
    console.log("Item has been restocked.");
}


const mainAction = async() => {
    await checkStocks(2, restock, 3);
    await checkStocks(3, restock, 4);
    await checkStocks(1, restock, 22);
    console.log("Checking completed")
}

mainAction()