const Employee = require('./Employee');

// engineer class which is a child class of Employee
class Intern  extends Employee {
    constructor(name, id, email, school, role) {
    super(name, id, email)
    this.school = school;
    this.role = 'Intern';
}
getRole() {
    return this.role;
}
getSchool() {
    return this.school;
}
}

module.exports = Intern;