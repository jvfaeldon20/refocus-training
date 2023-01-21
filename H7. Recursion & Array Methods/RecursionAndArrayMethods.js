// TASK 1:  Find the most used item on the array
// const arr = [ "Web Developer", 
//               "Refocus", 
//               "Web Developer", 
//               "Web Developer", 
//               "Refocus", 
//               "Awesome"
//             ];

// const uniqueElement = arr.reduce((prev, current) => {
//     prev[current] = prev[current] || 0
//     prev[current] += 1
//     return prev
// }, {})

// console.log(uniqueElement)


// TASK 2: Reverse the array of invoices
let invoiceList    = [ "Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005",]

// 1. Append new data to current invoice and return the new lists
function insertToBottom(insertData, reverseList){
    for(i in insertData){
        invoiceList.push(insertData[i])
    }

    console.log(invoiceList.join(" "))
    reverseList(invoiceList)
}

// 2. Reverse the order of invoice and return the new lists
function reverseList(invoiceData){
    reversedData = invoiceData.reverse()
    console.log(reversedData.join(" "))
}


let newInvoiceData = ["Invoice 004", "Invoice 003", "Invoice 002", "Invoice 001"]
insertToBottom(newInvoiceData, reverseList)