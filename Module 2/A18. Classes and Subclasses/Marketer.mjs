import { Employee }  from './employee.mjs'

class Marketer extends Employee{
    constructor(){
        super()
    }

    getEmployeeCompany(){
        this.empCompanyName()
    }

    setEmployeeName(name){
        this.empName(name)
    }

    setRole(role){
        this.empJobRole(role)
    }

    setSalary(salary){
        this.empSalary(salary)
    }

    setSpecialty(specialty){
        this.empSpecialty(specialty)
    }
}

let emp = new Marketer()
emp.setEmployeeName('Lisa')
emp.setSalary(1000)
emp.setRole('marketing')
emp.setSpecialty('promoting the company services and products.')
emp.getEmployeeCompany()