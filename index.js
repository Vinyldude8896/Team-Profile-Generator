const Team = require('./lib/Team');

new Team().getManagerInformation();




// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateHTMLPage = require('./utils/generate_HTML.js');
// const Manager = require('./lib/Manager.js');
// // const Manager = require('./lib/Manager');

// const getTeamInformation = () => {




// return inquirer.prompt([
//         {
//         type: 'text',
//         name: 'name',
//                     message: "What is the Team Manager's Name?",
//                     validate: () => {
//                         if (inputUserData) {
//                             return true;
//                         } else {
//                         console.log("You need to enter a valid response.");
//                             return false;
//                         }
//                     }
//                 },
//                     {
//                         type: 'input',
//                         name: 'employeeId',
//                         messaage: "Please enter thier employee ID number:",
//                         validate:  inputUserData = () => {
//                             if (inputUserData) {
//                                 return true;
//                             } else {
//                             console.log("You need to enter a valid response.");
//                                 return false;
//                             }
//                         }
//                     },
//                     {
//                         type: 'input',
//                         name: 'email',
//                         messaage: "Please enter their email address:",
//                         validate:  inputUserData = () => {
//                             if (inputUserData) {
//                                 return true;
//                             } else {
//                             console.log("You need to enter a valid response.");
//                                 return false;
//                             }
//                         }
//                     },
//                     {
//                         type: 'input',
//                         name: 'officeNumber',
//                         messaage: "Please enter their office number:",
//                         validate:  inputUserData = () => {
//                             if (inputUserData) {
//                                 return true;
//                             } else {
//                             console.log("You need to enter a valid response.");
//                                 return false;
//                             }
//                         }
//                     },
//                     {
//                         type: 'input',
//                         name: 'role',
//                         messaage: "Please enter their role:",
//                         validate:  inputUserData = () => {
//                             if (inputUserData) {
//                                 return true;
//                             } else {
//                             console.log("You need to enter a valid response.");
//                                 return false;
//                             }
//                         }
//                     }
//                 ])
//                 // .then(({name, employeeId, email, officeNumber, role}) =>{
//                 //     new Manager(name, employeeId, email, officeNumber, role);
//                 // })
//     }


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

// getTeamInformation()
//     .then(inputUserData =>{
//         console.log(inputUserData);
//         return generateHTMLPage(inputUserData);
//     })
//     .then(pageContent =>{
//         return writeToFile(pageContent);
    
//     })
