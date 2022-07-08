
const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
}
}

// class Employee {
//     constructor(name, id, email){

//     this.name = name;
//     this.id = id;
//     this.email = email;

//     }

//     getName() {
     
//         inquirer.
//         prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the employee's name?"

//         }
//     ])
//         .then (({name}) => {
//            return this.name = name;
//         })
//     }
    
//     getId() {
//         inquirer.
//         prompt([
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the employee's id?"

//         }
//     ])
//         .then (({id}) => {
//             return this.id = id;
//         })
//     }

//     getEmail() {
//         inquirer.
//         prompt([
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the employee's email?"

//         }
//     ])
//         .then (({email}) => {
//             return this.email = email;
//         })
//     }

//     getRole() {
//         inquirer.
//         prompt(
//         {
//             type: 'input',
//             name: 'role',
//             message: "What is the employee's role?",
//             choices: ['Engineer', 'Intern', 'Manager']

//         })
//         .then (({role}) => {
//             return this.role = role;
//         })
//     }
// }

// const employee1 = new Employee('Jacob Jones', '01354', 'jacobjones@yahoo.com');


module.exports = Employee;