
// inporting inquirer and FSS functionality
const inquirer = require('inquirer');
const fs = require('fs');

// creating variables for page generating functions located in other files - see path
const generateHTMLPage = require('./utils/generate_HTML.js');
const generateIntern = require('./utils/generate_intern.js');
const generateEngineer = require('./utils/generate_engineer.js');
const generateFinalHTML = require('./utils/generate_final_HTML.js')

// creating Manager, Intern, Engineer variables for locations of class pages
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

// creating an initial empty array for Manager, Interns and Engineer's for user input
const userInputManager = [];
const userInputIntern = [];
const userInputEngineer = [];


// This function will call to the generate_final_HTML.js and append as the last 
// portion of HTML to be written to the file
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

// This function is to build a new Engineer by promption for user input
// the user input prompts include name, ID, email, github
// then that information is used to create a new Engineer
// which is then sent to generate_engineer.js to generate the card portion of HTML
// for the new engineer

function getNewEngineer() {
    return inquirer.prompt([

        // Prompting for new Engeineer's name and validating user has input something
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

        // Prompting for new Engeineer's Id and validating user has input something
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

        // Prompting for new Engeineer's email and validating user has input something
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

        // Prompting for new Engeineer's GitHub username and validating user has input something
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
    // taking the user input and using that to generate a new Engineer
    .then(({name, id, email, github, role}) =>{
            const inputEngineer = new Engineer(name, id, email, github, role);
            userInputEngineer.push(inputEngineer.name, inputEngineer.id, inputEngineer.email, inputEngineer.github, inputEngineer.role)
            return generateEngineer(inputEngineer);
        })
    // this value is then sent to the apppend to file function
    // which will generate the HTML required to have teh new Engineer's 
    // card displayed on our web page
        .then(employeeData => {
            return appendToFile(employeeData);
        })
    // then we ask if the user want to add a new employee
        .then(inputUserData => {
            getNewEmployee();
        }) 
}

// This function is to build a new Intern by promption for user input
// the user input prompts include name, ID, email, school
// then that information is used to create a new Intern
// which is then sent to generate_intern.js to generate the card portion of HTML
// for the new intern
function getNewIntern() {
    return inquirer.prompt([

    // asking the user to input the new Intern's name
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
        // asking the user to input the new Intern's ID
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
        // asking the user to input the new Intern's email
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
        // asking the user to input the new Intern's school
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
    // taking the user input and using that to generate a new Intern
    .then(({name, id, email, school, role}) =>{
        const inputIntern = new Intern(name, id, email, school, role);
        userInputIntern.push(inputIntern.name, inputIntern.id, inputIntern.email, inputIntern.school, inputIntern.role)
         return generateIntern(inputIntern);
    })
      // this value is then sent to the apppend to file function
    // which will generate the HTML required to have the new Intern's 
    // card displayed on our web page
    .then (employeeData => {
        return appendToFile(employeeData);
    })
    // then we ask if the user want to add a new employee
    .then(inputUserData => {
        getNewEmployee();
    })
}


// This function will happen after the user input's a Team manager
// then will also be called when they have finished adding an employee
// function will be called until user chooses "Finish Building Team"
function getNewEmployee() {

    // this input asks user if they wany to add an Engineer or Intern
    // or if they want to finish building their  team
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'Which type of employee would you like to add to your team?',
            choices: ["Engineer", "Intern", "Finish Building Team"],
        },
    ])

    // then this data is validated to see what they chose for an answer
    .then (data =>{
        const choice = JSON.stringify(data.role);
    // if they chose Engineer we call the getNewEngineer function
            if(choice === '["Engineer"]'){
            getNewEngineer();
    // if they chose Intern we call the getNewIntern function
            } else if(choice === '["Intern"]'){
             getNewIntern();
            } else 
    // if they chose "Finish building team" we will call the appendEndOfHTML function
    // which will build us the end of the HTML file
            {
                appendEndOfHTML();
                return;
            }
    })
}


// this is the starting function to getTeam information 
// this function build's the Team manager and then calls out to getNewEmployee
const getTeamInformation = () => {
return inquirer.prompt([
//asks for the Team Manger's name
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
//asks for the Team Manger's ID
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
//asks for the Team Manger's email
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
//asks for the Team Manager's Office number
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

        // Then these inputs are used to create the new Manager
            .then(({name, id, email, officeNumber, role}) =>{
                const inputManager = new Manager(name, id, email, officeNumber, role);
                userInputManager.push(inputManager.name, inputManager.id, inputManager.email, inputManager.officeNumber, inputManager.role);
        // this information is then sent to generate the initial HTML page
        // with the team Mangers Card
                return generateHTMLPage(inputManager);
             })
        // then we ask to write to file the generated HTML
            .then (employeeData => {
            return writeToFile(employeeData);
            })
    }

// this function is used for the initial setup of the HTML page and the 
// team managers card. It is called after the user inputs the team manager's information
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

// this function append to the inital generated HTML with team manager's information
// it appends the HTML that was generated to create new cards for Ineterns or Engineers
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


// initial call to first function which will ask for the team manager's information
getTeamInformation()

// then the user will be prompted to add a new employee or finish building team
// in the getNewEmployee Function
.then(pageContent =>{
    getNewEmployee();
})

