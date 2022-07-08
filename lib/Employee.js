const { get } = require("http");
const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, role){

    // this.name = getName();
    // this.id = getId();
    // this.email = getEmail();
    // this.role = getRole();

    }

    getName() {
     
        inquirer.
        prompt(
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"

        })
        .then (({name}) => {
           return this.name = name;
        })
    }
    
    getId() {
        inquirer.
        prompt(
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?"

        })
        .then (({id}) => {
            this.id = new Employee(id);
        })
    }

    getEmail() {
        inquirer.
        prompt(
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"

        })
        .then (({email}) => {
            this.email = new Employee(email);
        })
    }

    getRole() {
        inquirer.
        prompt(
        {
            type: 'input',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']

        })
        .then (({role}) => {
            this.role = new Employee(role);
        })
    }
}

function createNewEmployee() {
    let employee1 = new Employee
    console.log(employee1);
}

createNewEmployee()

module.exports = Employee