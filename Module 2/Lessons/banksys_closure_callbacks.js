var isLoggedIn = false
var bank = {
    bankName: "Bank of Refocus",
    address: "Philippines",
    bankMoney: 0,
    accounts: [
        {
            firstname: "JV",
            lastname: "Faeldon",
            gender: "Male",
            address: "Laguna",
            balance: 0,
            pin: 1234,
            username: "jvfaeldon",
            password: "jvfa1245"
        },
        {
            firstname: "John",
            lastname: "Doe",
            gender: "Male",
            address: "Manila",
            balance: 0,
            pin: 1234,
            username: "johndoe",
            password: "jdoe2468"
        },
    ]
}

// CLOSURES
function bankAccountControl(){
    function showMessage(msg){
        console.log(msg)
    }
    
    function checkBankBalance(){
        if(isLoggedIn){
            showMessage(`The balance is : P${bank.bankMoney}`)
        }else{
            showMessage("Please login first!")
        }
    }
    
    function depositBankMoney(amount){
        if(isLoggedIn){
            bank.bankMoney += amount
            showMessage(`Deposited: P${amount}`)
        }else{
            showMessage("Please login first!")
        }
    }
    
    function withdrawbankMoney(amount){
        
        let withdrawStatus = "Invalid Withdrawal"
        if(isLoggedIn){
            if(amount <= bank.bankMoney && amount > 0){
                bank.bankMoney -= amount
                withdrawStatus = `Withdrawn: P${amount}`
            }
    
            showMessage(withdrawStatus)
        }else{
            showMessage("Please login first!")
        }
    }
    
    function loginUser(inputUser, inputPass){
        bank.accounts.forEach((element, i) => {
            if(element.username == inputUser && element.password == inputPass){
                isLoggedIn = true
                showMessage(`Hi ${bank.accounts[i].firstname}`)
            }
        });
    
        if(!isLoggedIn){
           showMessage("Invalid login, please try again!")
        }
    }

    return {
        checkBankBalance,
        depositBankMoney,
        withdrawbankMoney,
        loginUser,
        showMessage
    }
}

var bankAccount = bankAccountControl()
bankAccount.loginUser("johndoe", "jdoe2468")


bankAccount.depositBankMoney(2200)
bankAccount.depositBankMoney(500)
bankAccount.checkBankBalance()
bankAccount.withdrawbankMoney(2500)
bankAccount.checkBankBalance()


// CALLBACKS
function addUser(info){
    bank.accounts.push(info)
    console.log(`${info.firstname} ${info.lastname} has been added successfully!`)
}

function removeUser(id){
    isLoggedIn = false
    showMessage(`${bank.accounts[id].firstname} ${bank.accounts[id].lastname} has been removed successfully!`)
    bank.accounts.splice(id, 1)
}

function showMessage(msg){
    console.log(msg)
}

function bankUserAccountControl(callback, data = {}){
    callback(data)
}

bankUserAccountControl(addUser, {
    firstname: "Karen",
    lastname: "Mendoza",
    gender: "Female",
    address: "Taguig",
    balance: 2000,
    pin: 1235,
    username: "kmendoza",
    password: "k54321"
})

bankUserAccountControl(removeUser, 0)
bankAccount.loginUser("jvfaeldon", "jvfa1245")