import { Employee }  from './employee.mjs'

class ProductOwner extends Employee{
    constructor(){
        super()
        this.projects = []
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

    setNewProject(project){
        this.projects.push(project)
    }

    getProjects(){
        console.log('Project plans: ' + this.projects)
    }
}

let emp = new ProductOwner()
emp.setEmployeeName('Alvin')
emp.setSalary(4000)
emp.setRole('product owner')
emp.setSpecialty('creating new projects.')
emp.setNewProject(' Hybrid Livechat System')
emp.setNewProject(' GISAUTO Admin Portal')
emp.setNewProject(' 321 Jira Case Autofollow-up')
emp.getProjects()
emp.getEmployeeCompany()