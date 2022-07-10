const inquirer = require("inquirer");

class Engineer {
    constructor(name = '', id, email, role, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Engineer';
    this.gitub = github;
}
getName() {
 return this.name;
    
}

getId() {
return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return this.role;
}
getGithub() {
    return this.github;
}
}

module.exports = Engineer;