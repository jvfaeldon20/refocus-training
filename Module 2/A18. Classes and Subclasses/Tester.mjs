import { Employee }  from './employee.mjs'

class Tester extends Employee{
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

let emp = new Tester()
emp.setEmployeeName('Mark')
emp.setSalary(2000)
emp.setRole('tester')
emp.setSpecialty('validating if the code quality passes or not.')
emp.getEmployeeCompany()