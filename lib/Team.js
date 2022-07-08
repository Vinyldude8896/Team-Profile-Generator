// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./Manager');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { Console } = require('console');



class Team {
    constructor() {
        this.officeNumber;
        this.manager;
        this.employee;
        this.intern;
        this.engineer;

}

getManagerInformation() {

inquirer.prompt([
        {
          type: 'text',
          name: 'name',
          message: "What is the Team Manager's Name?",
          },
  {
      type: 'text',
      name: 'id',
      message: "What is the Manager's employee ID?"
  },
  {
      type: 'text',
      name: 'email',
      message: "What is the manager's email address?"
  }
])
  .then(({name, id, email}) =>{
      const inputManager = new Manager(name, id, email);
      console.log("The New manager's name is " + inputManager.getName());
      console.log("The New Manager's employee ID is" +i nputManager.getId());
      console.log("The New Manager's email is " + inputManager.getEmail());
  })
}
}



module.exports = Team;