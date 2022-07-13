const Employee = require('./Employee');

// Engineer class which is a child class of Employee 
class Engineer extends Employee {
    constructor(name = '', id, email, github, role) {
     super(name, id, email)
    this.github = github;
    this.role = 'Engineer';
}

getRole() {
    return this.role;
}
getGithub() {
    return this.github;
}
}

module.exports = Engineer;