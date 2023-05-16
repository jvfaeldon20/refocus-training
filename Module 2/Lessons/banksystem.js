/*
    Object can have an array property
    Arrays can have an element of object
*/ 

// Bank System
/*
    Object
        Bank Name - String
        Address - String
        Bank money - number
        Accounts - array of objects
            firstname - string
            lastname - string
            gender - string
            address - string
            balance - number
            pin - number
            username - string
            password - string
*/ 
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
    ],
    showMessage: function(msg){
        console.log(msg)
    },
    checkBankBalance: function(){
        if(isLoggedIn){
            this.showMessage(`The balance is : P${this.bankMoney}`)
        }else{
            this.showMessage("Please login first!")
        }
    },
    depositBankMoney: function(amount){
        if(isLoggedIn){
            this.bankMoney += amount
            this.showMessage(`Deposited: P${amount}`)
        }else{
            this.showMessage("Please login first!")
        }
    },
    withdrawbankMoney: function(amount){
        
        let withdrawStatus = "Invalid Withdrawal"
        if(isLoggedIn){
            if(amount <= bank.bankMoney && amount > 0){
                this.bankMoney -= amount
                withdrawStatus = `Withdrawn: P${amount}`
            }

            this.showMessage(withdrawStatus)
        }else{
            this.showMessage("Please login first!")
        }
    },
    loginUser: function(inputUser, inputPass){
        bank.accounts.forEach((element, i) => {
            if(element.username == inputUser && element.password == inputPass){
                isLoggedIn = true
                this.showMessage(`Hi ${bank.accounts[i].firstname}`)
            }
        });

        if(!isLoggedIn){
           this.showMessage("Invalid login, please try again!")
        }
    },
    addUser: function(info){
        this.accounts.push(info)
        console.log(`${info.firstname} ${info.lastname} has been added successfully!`)
    },
    removeUser: function(id){
        isLoggedIn = false
        this.showMessage(`${bank.accounts[id].firstname} ${bank.accounts[id].lastname} has been removed successfully!`)
        this.accounts.splice(id, 1)
    }
}

// bank.loginUser("johndoe", "jdoe2468")
// bank.depositBankMoney(2200)
// bank.depositBankMoney(500)
// bank.checkBankBalance()
// bank.withdrawbankMoney(2500)
// bank.checkBankBalance()
// bank.addUser({
//     firstname: "Karen",
//     lastname: "Mendoza",
//     gender: "Female",
//     address: "Taguig",
//     balance: 2000,
//     pin: 1235,
//     username: "kmendoza",
//     password: "k54321"
// })

bank.removeUser(0)
bank.loginUser("jvfaeldon", "jvfa1245")

