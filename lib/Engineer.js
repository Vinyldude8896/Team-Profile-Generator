const inquirer = require("inquirer");

class Engineer {
    constructor(name = '', id, email, github, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = 'Engineer';
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