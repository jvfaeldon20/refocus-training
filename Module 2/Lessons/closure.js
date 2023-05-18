function bank(name){
    console.log(name)
    let balance = 0
    function deposit(amount){
        let a = 500
        balance += amount

        console.log("You add money: " + amount)
    }

    function checkbalance(){
        console.log("The balance is now: " + balance)
    }

    return {
        dep: deposit,
        check: checkbalance
    }
}

var bnk = bank("jv-faeldon")
bnk.dep(500)
bnk.dep(800)
bnk.check()