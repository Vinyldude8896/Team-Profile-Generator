const inquirer = require("inquirer");

function Manager(name, employeeId, email, officeNumber, role) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.officeNumber = officeNumber;
    this.role = role;
}

console.log(Manager);

module.exports = Manager;

