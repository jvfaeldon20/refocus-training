import { Employee }  from './employee.mjs'

class TeamLead extends Employee{
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

let emp = new TeamLead()
emp.setEmployeeName('Ken')
emp.setSalary(2500)
emp.setRole('team lead')
emp.setSpecialty('giving instructions to other employees.')
emp.getEmployeeCompany()