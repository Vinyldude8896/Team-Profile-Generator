// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./Manager');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');




function Team() {

        this.officeNumber;
        this.manager;
        this.employee;
        this.intern;
        this.engineer;

}

Team.prototype.getManagerInformation = function() {

return inquirer
    .prompt({
    type: 'text',
    name: 'name',
                message: "What is the Team Manager's Name?",
                // validate: () => {
                //     if (inputUserData) {
                //         return true;
                //     } else {
                //     console.log("You need to enter a valid response.");
                //         return false;
                //     }
                // }
            },
                {
                    type: 'input',
                    name: 'employeeId',
                    messaage: `Please enter ${this.name}'s employee ID number:`,
                    // validate:  inputUserData = () => {
                    //     if (inputUserData) {
                    //         return true;
                    //     } else {
                    //     console.log("You need to enter a valid response.");
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'email',
                    messaage: `Please enter ${this.name}'s email address:`,
                    // validate:  inputUserData = () => {
                    //     if (inputUserData) {
                    //         return true;
                    //     } else {
                    //     console.log("You need to enter a valid response.");
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    messaage: `Please enter ${this.name}'s office number:`,
                    // validate:  inputUserData = () => {
                    //     if (inputUserData) {
                    //         return true;
                    //     } else {
                    //     console.log("You need to enter a valid response.");
                    //         return false;
                    //     }
                    // }
                },
                {
                    type: 'input',
                    name: 'role',
                    messaage: `Please enter ${this.name}'s role:`,
                    // validate:  inputUserData = () => {
                    //     if (inputUserData) {
                    //         return true;
                    //     } else {
                    //     console.log("You need to enter a valid response.");
                    //         return false;
                    //     }
                    // }
                })
            

            

            .then (({name, employeeId, email, officeNumber, role }) => {
                this.manager = new Manager(name, employeeId, email, officeNumber, role);
                console.log(Manager);
            });
}


module.exports = Team;