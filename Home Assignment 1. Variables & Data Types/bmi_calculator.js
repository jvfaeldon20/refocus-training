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
console.log(calculateBMI(65, 173))