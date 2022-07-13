
// Employee class with constructor and functions
class Employee {
    constructor(name = '', id, email, officeNumber, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
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
}
module.exports = Employee;