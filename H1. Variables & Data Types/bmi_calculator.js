function calculateBMI(weight, height){
    // calculates the BMI
    let bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

    // check BMI status
    if(bmi < 18.5){
        bmiStatus = `STATUS: Underweight`;
    }

    else if( bmi >= 18.5 && bmi <= 24.9 ){
        bmiStatus = `STATUS: Normal`;
    }

    else if( bmi >= 25 && bmi <= 29.9 ){
        bmiStatus = `STATUS: Overweight`;
    }

    else{
        bmiStatus = `STATUS: Obese`
    }

    return `BMI: ${bmi}\n${bmiStatus}`
}

// input weight in kgs, height in cm
// console.log(calculateBMI(65, 173))


// UNIT TESTING 
function canCalculateBMI(weight, height){
    if(!weight || !height){
        isValid = "INVALID"
    }else{
        if(Number.isInteger(height) && Number.isInteger(weight)){
            isValid = "VALID"
        }else{
            isValid = "INVALID"
        }
    }

    console.log(`A Weight: ${weight} and Height: ${height} is ${isValid} for BMI Calculation!`)

}

// This tests check if payloads are VALID or not for BMI Calculations
canCalculateBMI(65, 173)            // VALID:   Correct
canCalculateBMI(null, 173)          // INVALID: Correct
canCalculateBMI(null, "")           // INVALID: Correct
canCalculateBMI("str1", "str2")     // INVALID: Correct
canCalculateBMI("1", 5)             // INVALID: Correct
canCalculateBMI(50, 145)            // VALID:   Correct
