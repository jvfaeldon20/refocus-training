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
            password: 1245
        },
        {
            firstname: "John",
            lastname: "Doe",
            gender: "Male",
            address: "Manila",
            balance: 0,
            pin: 1234,
            username: "jvfaeldon",
            password: 1245
        },
    ]
}

console.log(bank)