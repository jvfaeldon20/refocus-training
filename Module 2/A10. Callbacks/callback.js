// Task 1: Compute the discount
var discounted_amount = 0
function discount(percentage=0, amount=0){
    discounted_amount = amount - (amount * (percentage / 100))    
    return discounted_amount
}


// Task 2: Check the age
function age_checker(age){
    return age >= 10 ? true: false 
}


// Task 3: Calculate the total bill
function calculate(customer_group=[], discount_func={}){
    const group_count = customer_group.length
    let sub_total = group_count * 299
    
    if(group_count < 6){
        console.log(`Sorry, No Discount. Bill: ${sub_total}`)
    }else{
        const all_aged_10_and_above = false
        let discount_percentage = 0
        let grand_total
        
        if(customer_group.every(age_checker)){
            discount_percentage = 15
        }else{
            discount_percentage = 10
        }
        
        grand_total = discount(discount_percentage, sub_total)
        console.log(`${discount_percentage}% discount. Bill: ${grand_total}`)
    }
    


}


// represents the age
const customer_group1 = [8, 12, 11, 11, 18, 24, 5, 10]
const customer_group2 = [10, 11, 11, 13, 19, 14]
const customer_group3 = [12, 12, 14]


calculate(customer_group1)
calculate(customer_group2)
calculate(customer_group3)