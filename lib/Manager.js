
const Employee = require("./Employee");

// Manager class which is a child class of Employee

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.role = 'Manager';
}
getRole() {
    return this.role;
}
}
module.exports = Manager;

