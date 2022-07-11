const inquirer = require('inquirer');
const fs = require('fs');
const generateHTMLPage = require('./utils/generate_HTML.js');
const generateIntern = require('./utils/generate_intern.js');
const generateEngineer = require('./utils/generate_engineer.js');
const generateFinalHTML = require('./utils/generate_final_HTML.js')
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const userInputManager = [];
const userInputIntern = [];
const userInputEngineer = [];

// const Manager = require('./lib/Manager');

const appendEndOfHTML = function () {
    return new Promise ((resolve, reject) =>  {
        fs.appendFile('./dist/index.html', generateFinalHTML(), err => {
            if(err) {
                reject(err);
                return;
            }

            resolve ({
                ok:true,
                message: 'Written to file'
            });
        });
    });
}

function getNewEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the their employee ID number?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the their email?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
    ])
    .then(({name, id, email, github, role}) =>{
            const inputEngineer = new Engineer(name, id, email, github, role);
            console.log("The New Engineer's name is " + inputEngineer.getName());
            console.log("The New Engineer's employee ID is" + inputEngineer.getId());
            console.log("The New Engineer's email is " + inputEngineer.getEmail());
            console.log("The New Engineer's GitHub unsername is " + inputEngineer.getGithub());
            console.log("The New Engineer's Role is " + inputEngineer.getRole());
            userInputEngineer.push(inputEngineer.name, inputEngineer.id, inputEngineer.email, inputEngineer.github, inputEngineer.role)
            console.log(userInputEngineer);
            return generateEngineer(inputEngineer);
        })
        .then(employeeData => {
            return appendToFile(employeeData);
        })
        .then(inputUserData => {
            getNewEmployee();
        }) 
}


function getNewIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the their employee ID number?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the their email?',
            validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                console.log("You need to enter a valid response.");
                    return false;
                }
            }
        },
        {
        type: 'input',
        name: 'school',
        message: 'What school are they attending?',
        validate:  inputUserData = () => {
                if (inputUserData) {
                        return true;
                } else {
                    console.log("You need to enter a valid response.");
                        return false;
                        }
                 }
         },
    ])
    .then(({name, id, email, school, role}) =>{
        const inputIntern = new Intern(name, id, email, school, role);
        console.log("The New Intern's name is " + inputIntern.getName());
        console.log("The New Intern's employee ID is" + inputIntern.getId());
        console.log("The New Intern's email is " + inputIntern.getEmail());
        console.log("The New Intern's school is " + inputIntern.getSchool());
        console.log("The New Intern's Role is " + inputIntern.getRole());
        userInputIntern.push(inputIntern.name, inputIntern.id, inputIntern.email, inputIntern.school, inputIntern.role)
        console.log("Generating HTML with this data" + userInputIntern);
         return generateIntern(inputIntern);
    })
    .then (employeeData => {
        return appendToFile(employeeData);
    })
    .then(inputUserData => {
        getNewEmployee();
    })
}

function getNewEmployee() {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'Which type of employee would you like to add to your team?',
            choices: ["Engineer", "Intern", "Finish Building Team"],
        },
    ])
    .then (data =>{
        const choice = JSON.stringify(data.role);
        console.log ("Data retrieved from choices is " + choice);
            if(choice === '["Engineer"]'){
                console.log ("Value is engineer");
            getNewEngineer();
            } else if(choice === '["Intern"]'){
                console.log ("value is Intern");
             getNewIntern();
            } else {
                console.log("does not equal either");
                appendEndOfHTML();
                return;
            }
    })
}

const getTeamInformation = () => {
return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the Team Manager Name?',
        validate: inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                    console.log("You need to enter a valid response.");
                        return false;
                    }
                }
                },
        {
        type: 'input',
        name: 'id',
        message: 'Please enter their employee ID number:',
        validate:  inputUserData = () => {
                if (inputUserData) {
                    return true;
                } else {
                    console.log("You need to enter a valid response.");
                return false;
                        }
                    }
                },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter their email address:',
        validate:  inputUserData = () => {
                if (inputUserData) {
                        return true;
                } else {
                    console.log("You need to enter a valid response.");
                        return false;
                        }
                    }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter their office number:',
        validate:  inputUserData = () => {
                if (inputUserData) {
                        return true;
                } else {
                    console.log("You need to enter a valid response.");
                        return false;
                        }
                 }
         },
            ])
            .then(({name, id, email, officeNumber, role}) =>{
                const inputManager = new Manager(name, id, email, officeNumber, role);
                console.log("The New manager's name is " + inputManager.getName());
                console.log("The New Manager's employee ID is" +inputManager.getId());
                console.log("The New Manager's email is " + inputManager.getEmail());
                console.log("The Manager's Office Number is " + inputManager.officeNumber);
                console.log("The Manager's Role is " + inputManager.getRole());
                userInputManager.push(inputManager.name, inputManager.id, inputManager.email, inputManager.officeNumber, inputManager.role);
                console.log("The New manager's name is " + userInputManager[0]);
                console.log("The New Manager's employee ID is" + userInputManager[1]);
                console.log("The New Manager's email is " + userInputManager[2]);
                console.log("The Manager's Office Number is " + userInputManager[3]);
                console.log("The Manager's Role is " + userInputManager[4]);
                return generateHTMLPage(inputManager);
             })
            .then (employeeData => {
            return writeToFile(employeeData);
            })
    }


const writeToFile = fileContent => {
    return new Promise ((resolve, reject) =>  {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve ({
                ok:true,
                message: 'Written to file'
            });
        });
    });
}


const appendToFile = fileContent => {
    return new Promise ((resolve, reject) =>  {
        fs.appendFile('./dist/index.html', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve ({
                ok:true,
                message: 'Written to file'
            });
        });
    });
}

getTeamInformation()

.then(pageContent =>{
    getNewEmployee();
})
// .then (data =>{
//     generateFinalHTML(data);
// })
// .then (data => {
//     appendToFile(data);
// })
