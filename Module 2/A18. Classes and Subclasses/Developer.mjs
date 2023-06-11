import { Employee }  from './employee.mjs'

class Developer extends Employee{
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

let emp = new Developer()
emp.setEmployeeName('JV')
emp.setSalary(2000)
emp.setRole('web developer')
emp.setSpecialty('frontend development')
emp.getEmployeeCompany()