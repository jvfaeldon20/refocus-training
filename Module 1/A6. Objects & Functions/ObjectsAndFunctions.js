// TASK 1: Create a bank account
let bankAccount = {
    bankAccountID: Math.random().toString(16).slice(2),
    accountNumber: 11821301658,
    credentials: [{ 
        username: "jvfaeldon",
        password: "pass123",
        pin: 123456 
    }],
    balance: 2000,
    createdAt: new Date().toLocaleDateString('en-US')

}


// TASK 2: Create a user account
let userAccount = {
    bankAccount: bankAccount,
    debitCard: 374245455400126, 
    fName: "John",
    lName: "Doe",
    birthDate: "11/20/1996",
    address: "Calamba Laguna"
}


// TASK 3: Add functionality to the system
function verifyUser(inputUser, inputPass){
    isVerified = false
    if(bankAccount.credentials[0].username ==  inputUser && bankAccount.credentials[0].password == inputPass){
       isVerified = true
    }

    let response = {
        isVerified: isVerified,
        username:inputUser
    }

    return response
}

function getBankAccountDetails(accessUser){
    getBankDetails = `INVALID LOGIN: "${accessUser.username}" does not exists in our system. Please try again. Thank you.`
    if(accessUser.isVerified){
        getBankDetails = 
        `BANK DETAILS\n------------\nBank account ID: ${bankAccount.bankAccountID}\nAccount number: ${bankAccount.accountNumber}\nBalance: ${bankAccount.balance}\n`
    }

    console.log(getBankDetails)
}

function withdrawMoney(accessUser, withdrawAmount){
    withdrawMessage = `INVALID LOGIN: "${accessUser.username}" does not exists in our system. Please try again. Thank you.\n`
    
    if(accessUser.isVerified){
        isAllowed = withdrawAmount > bankAccount.balance ? false:true
        withdrawMessage = `TRANSACTION INCOMPLETE: The requested amount exceeded the current balance. Please try again. Thank you!\n`
        if(isAllowed){
            currentBalance = bankAccount.balance
            bankAccount.balance -= withdrawAmount
            withdrawMessage = `TRANSACTION COMPLETED:\n------------\nCurrent balance: P${currentBalance}\nWithdrawal amount: P${withdrawAmount}\nRemaining balance: P${bankAccount.balance}\n`
        }
    }

    console.log(withdrawMessage)
}

function depositMoney(accountNumber, depositAmount){
    depositMessage = `TRANSACTION INCOMPLETE: Account number ${accountNumber} does not exist\n`
    if(bankAccount.accountNumber == accountNumber){
        currentBalance = bankAccount.balance
        bankAccount.balance += depositAmount
        depositMessage = `TRANSACTION COMPLETED:\n------------\nCurrent balance: P${currentBalance}\nDeposit amount: P${depositAmount}\nNew balance: P${bankAccount.balance}\n`
    }
    console.log(depositMessage)
}

// 1. Getting bank details
getBankAccountDetails(verifyUser("jvfaeldon", "pass123"))


// 2. Withdrawal process using an exceeding withdrawal amount and a valid amount
let withdrawAmount1 = 3000 // invalid withdrawal amount
let withdrawAmount2 = 1000 // valid witdrawal amount

withdrawMoney(verifyUser("jvfaeldon", "pass123"), withdrawAmount1)
withdrawMoney(verifyUser("jvfaeldon", "pass123"), withdrawAmount2)


// 3. Deposit money using the account number
let accountNumber1 = 11821301658 // valid account number
let accountNumber2 = 11111111111 // invalid account number
depositMoney(accountNumber1, 10500)
depositMoney(accountNumber1, 500)
depositMoney(accountNumber2, 10500)