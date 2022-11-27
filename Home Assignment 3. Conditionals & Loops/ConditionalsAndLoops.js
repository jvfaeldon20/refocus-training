// Task 1: Pulse Oxymeter Reading
function pulseOxymeterReading(pulseOximeter, pulseRatePerMin){

// OBSERVATION READINGS
const OR1 = "Normal reading."
const OR2 = "Acceptable to continue home monitoring."
const OR3 = "Seek advice from health professionals."
const OR4 = "Seek urgent medical advice."
let oxygenReading = ""
let pulseRateBPMReading = ""

    // OXYGEN SATURATION READING
    if(pulseOximeter >= 96){
        oxygenReading = OR1
    }else if(pulseOximeter == 95){
        oxygenReading = OR2
    }else if(pulseOximeter > 92 && pulseOximeter <= 94){
        oxygenReading = OR3
    }else{
        oxygenReading = OR4
    }

    // PULSE RATE BPM READING
    if(pulseRatePerMin > 39 && pulseRatePerMin < 101){
        pulseRateBPMReading = OR1
    }else if(pulseRatePerMin > 100 && pulseRatePerMin < 110){
        pulseRateBPMReading = OR2
    }else if(pulseRatePerMin > 109 && pulseRatePerMin < 131){
        pulseRateBPMReading = OR3
    }else if(pulseRatePerMin >= 131){
        pulseRateBPMReading = OR4
    }else{
        pulseRateBPMReading = "Invalid reading. Please try again!"
    }

    console.log(`Oxygen Saturation: ${pulseOximeter}%\nObservation: ${oxygenReading}\n\nPulse rate per minute: ${pulseRatePerMin}\nObservation: ${pulseRateBPMReading}`)
}

pulseOxymeterReading(95, 60)