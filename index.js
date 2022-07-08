const inquirer = require('inquirer');
const fs = require('fs');
const generateHTMLPage = require('./utils/generate_HTML.js');
const Manager = require('./lib/Manager.js');
// const Manager = require('./lib/Manager');

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
        // {
        // type: 'input',
        // name: 'role',
        // messaage: "Please enter their role:",
        // validate:  inputUserData = () => {
        //         if (inputUserData) {
        //                 return true;
        //         } else {
        //             console.log("You need to enter a valid response.");
        //                 return false;
        //                 }
        //             }
        //         }
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