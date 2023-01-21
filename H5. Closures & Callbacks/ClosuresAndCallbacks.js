// TASK 1:Design a bank application [CLOSURE METHOD]
// function createBankAccount(name){
//     let balance = 0
//     function checkBalance(){
//         console.log(`Hi ${name}, Your current balance is P${balance}`)
//     }
    
//     function depositMoney(depositAmount){
//         balance += depositAmount
//         console.log(`Your new balance is now: P${balance}`)
//     }

//     function withdrawMoney(withdrawAmount){
//         isAllowed = withdrawAmount > balance ? false:true

//         withdrawMessage = `Sorry, the requested amount exceeded the current balance. Please try again. Thank you!`
//         if(isAllowed){
//             balance -= withdrawAmount
//             withdrawMessage = `Transaction completed. You have successfully withdraw P${withdrawAmount}. Thank you!`
//         }
//         console.log(withdrawMessage)
//     }
    
//     return {checkBalance, depositMoney, withdrawMoney}

// }
// const refocusBank = createBankAccount("JV")
// refocusBank.checkBalance()             // 1. check current balance
// refocusBank.depositMoney(1000)         // 2. deposit initial amount of P1000
// refocusBank.depositMoney(1000)         // 3. deposit 2nd amount 
// refocusBank.withdrawMoney(2001)        // 4. attempt to withdraw greater amount than existing balance
// refocusBank.checkBalance()             // 5. recheck balance
// refocusBank.withdrawMoney(1500)        // 6. withdraw a valid amount
// refocusBank.checkBalance()             // 7. confirmation if successful withdrawals will deduct the existing balance  


// TASK 2:Try another way [CALLBACK METHOD]
let balance = 0 
function createBankAccount(name){
    console.log(`Hi ${name}, Congratulations! You may now start banking. `)
}

function checkBalance(balance){
    console.log(`Your current balance is P${balance}`)
}

function depositMoney(depositAmount, newBalance){
    balance += depositAmount
    console.log(`Transaction completed. You have successfully deposit P${depositAmount}!`)
    newBalance(balance)
}

function withdrawMoney(withdrawAmount, balance, newBalance){
    isAllowed = withdrawAmount > balance ? false:true

    withdrawMessage = `Sorry, the requested amount exceeded the current balance. Please try again. Thank you!`
    if(isAllowed){
        balance -= withdrawAmount
        withdrawMessage = `Transaction completed. You have successfully withdraw P${withdrawAmount}. Thank you!`
    }

    console.log(withdrawMessage)
    newBalance(balance)
}

createBankAccount("JV")
checkBalance(balance)                        // 1. check current balance
depositMoney(1000, checkBalance)             // 2. deposit initial amount of P1000 and check balance
depositMoney(2000, checkBalance)             // 3. deposit 2nd amount 
withdrawMoney(3001, balance, checkBalance)   // 4. attempt to withdraw greater amount than existing balance
withdrawMoney(1500, balance, checkBalance)   // 6. withdraw a valid amount