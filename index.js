const inquirer = require('inquirer');
const fs = require('fs');
const generateHTMLPage = require('./utils/generate_HTML.js');
const generateIntern = require('./utils/generate_HTML.js');
const generateEngineer = require('./utils/generate_HTML.js');
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager');


function getNewEngineer() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            Message: "What is the employee's name?",
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
            type: 'text',
            name: 'id',
            Message: "What is the their employee ID number?",
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
            type: 'text',
            name: 'email',
            Message: "What is the their email?",
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
            type: 'text',
            name: 'github',
            Message: "What is their GitHub username?",
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
            const inputEngineer = new Intern(name, id, email, github, role);
            console.log("The New Intern's name is " + inputEngineer.getName());
            console.log("The New Intern's employee ID is" + inputEngineer.getId());
            console.log("The New Intern's email is " + inputEngineer.getEmail());
            console.log("The New Intern's GitHub unsername is " + inputEngineer.getGithub());
            console.log("The Manager's Role is " + inputEngineer.getRole());
            return inputEngineer;
        })
        .then(inputUserData =>{
            console.log(inputUserData);
            return generateEngineer(inputUserData);
        })
}


function getNewIntern() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            Message: "What is the employee's name?",
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
            type: 'text',
            name: 'id',
            Message: "What is the their employee ID number?",
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
            type: 'text',
            name: 'email',
            Message: "What is the their email?",
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
            type: 'text',
            name: 'school',
            Message: "What school are they attending?",
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
            if(data.role === "Engineer"){
            getNewEngineer();
            } else if(data.role === "Intern"){
             getNewIntern();
            } else {
                return;
            }
    })
}

const getTeamInformation = () => {
return inquirer.prompt([
        {
        type: 'text',
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
                return inputManager;
            })
            .then(inputUserData =>{
                console.log(inputUserData);
                return generateHTMLPage(inputUserData);
            })
            // .then(inputUserData => {
            //     getNewEmployee();
            // })
                
        
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

getTeamInformation()
.then(pageContent =>{
    return writeToFile(pageContent);
})





// const Team = require('./lib/Team');
// const generateHTMLPage = require('./utils/generate_HTML');

// new Team().getManagerInformation()
// .then (({inputManager}) =>{
//     console.log(inputManager);
//   return generateHTMLPage(inputManager);
// })
// .then(pageContent =>{
//      return writeToFile(pageContent);
// })


// const writeToFile = fileContent => {
//     return new Promise ((resolve, reject) =>  {
//         fs.writeFile('./dist/index.html', fileContent, err => {
//             if(err) {
//                 reject(err);
//                 return;
//             }

//             resolve ({
//                 ok:true,
//                 message: 'Written to file'
//             });
//         });
//     });
// }

