export class Employee{
    constructor(name, salary){
        this.companyName = "MHA"
        this.name = name
        this.salary = salary
    }

    empCompanyName(){
        console.log(`I work at ${this.companyName}.`)
    }

    empName(name=""){
        this.name = name
        console.log(`Hi, my name is ${this.name}!`)
    }

    empSalary(salary=0){
        this.salary = salary
        console.log(`${this.name}'s salary is: P${this.salary}`)
    }

    empSpecialty(specialty=""){
        this.specialty = specialty
        console.log(`I am a web developer specializing in ${this.specialty}`)
    }

}