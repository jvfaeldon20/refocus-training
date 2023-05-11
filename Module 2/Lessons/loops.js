// LOOPS AND ITERATION
//  repeats action again and again until condition is met
target = 100
for(let x = 1; x <= target; x++){
    let numType = ["FIZZ", "BUZZ", "FIZZBUZZ"]
    // divisible by 3
    if(x % 3 == 0){
        // divisible by 3 & 5
        output = numType[0]
        if(x % 5 == 0){
            output = numType[2]
        }
    // divisible by 5
    }else if(x % 5 == 0){
        // divisible by 3 & 5
        output = numType[1]
        if(x % 3 == 0){
            output = numType[2]
        }
    }else{
        output = x
    }         
    console.log(output)
}