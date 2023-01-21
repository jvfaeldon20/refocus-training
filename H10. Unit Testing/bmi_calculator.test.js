const calculateBMI = require("./bmi_calculator.js");
describe("BMI Calculator", () => {
    test("Checks if a weight of 65 and height of 173 is equal to NORMAL BMI status", () => {
        expect(calculateBMI(65, 173)).toEqual("BMI: 21.7\nSTATUS: Normal")
        expect(calculateBMI(65, 173)).toContain("Normal")
    })

    test("Checks if result is not null", () =>{
        expect(calculateBMI(65, 173).isNull).not.toBeNull()
    })

    test("Check if returned value is falsy", () => {
        expect(calculateBMI(65, 173).isFalsy).toBeFalsy()
    })
})