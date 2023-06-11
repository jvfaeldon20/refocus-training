import { Employee }  from './employee.mjs'

export class HumanResource extends Employee{
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

let emp = new HumanResource()
emp.setEmployeeName('Karen')
emp.setSalary(1000)
emp.setRole('HR')
emp.setSpecialty('hiring employees')
emp.getEmployeeCompany()