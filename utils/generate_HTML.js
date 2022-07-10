const intern = require('../lib/Intern.js')

// function generateEngineer(data) {
//   return`  <div class = "card-header col-3 mb-2">
//   <div class="">
//     <h2 class="card-header">
//       ${data.name}
//       </br>
//       <span class='iconify'>
//         <ion-icon name="shield-half-outline"></ion-icon>     
//     <p class ="sub-header">${data.role}</p>
//     </span>
//     </h2>
// <ul class="list-group list-group-flush m-3"> 
//     <span class='iconify'>
//     </span>
//     <li class="d-flex list-header">
//         ID: 
//             <p class=""> ${data.id}</p> 
//         </li>
//         <li class="d-flex list-header">
//             email:
//                 <p class="">
//                 <a href="mailto:${data.email}">${data.email}</a></p> 
//             </li>
//             <li class="d-flex list-header">
//                 School:
//                     <p class="weather_info">${data.github}</p> 
//             </li>
// </ul>
// </div>
// `
// }

const generateIntern = require("./generate_intern");

// function generateIntern(data) {
//   return`  <div class = "card-header col-3 mb-2">
//   <div class="">
//     <h2 class="card-header">
//       ${data.name}
//       </br>
//       <span class='iconify'>
//         <ion-icon name="shield-half-outline"></ion-icon>     
//     <p class ="sub-header">${data.role}</p>
//     </span>
//     </h2>
// <ul class="list-group list-group-flush m-3"> 
//     <span class='iconify'>
//     </span>
//     <li class="d-flex list-header">
//         ID: 
//             <p class=""> ${data.id}</p> 
//         </li>
//         <li class="d-flex list-header">
//             email:
//                 <p class="">
//                 <a href="mailto:${data.email}">${data.email}</a></p> 
//             </li>
//             <li class="d-flex list-header">
//                 School:
//                     <p class="weather_info">${data.school}</p> 
//             </li>
// </ul>
// </div>
// `
// }

function generateHTMLPage (data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="style.css" />
    
        <!-- Header titlebar-->
        <title>Team Summary Page</title>
      </head>
      <body>
         <!--main header column  -->
    <div class="col-12 align-items-center border-primary mt-1 mb-2 ">
      <div class="row">
          <header class="col-12 mt-2 mb-1 mr-5 ">
              <h1 id="main-header" class="text-center text-primary linear mt-1 pt-3"> My Team</h1>
          </header>
          </div>
      </div>
        <main>
          <main class="col-12 d-flex flex-column">
            <div class="m-1 mr-5 row justify-content-around">
              <div class = "card-header col-3 mb-2">
                <div class="">
                  <h2 class="card-header">
                    ${data.name}
                    </br>
                    <span class='iconify'>
                      <ion-icon name="shield-half-outline"></ion-icon>     
                  <p class ="sub-header">${data.role}</p>
                  </span>
                  </h2>
              <ul class="list-group list-group-flush m-3"> 
                  <span class='iconify'>
                  </span>
                  <li class="d-flex list-header">
                      ID: 
                          <p class=""> ${data.id}</p> 
                      </li>
                      <li class="d-flex list-header">
                          email:
                              <p class="">
                              <a href="mailto:${data.email}">${data.email}</a></p> 
                          </li>
                          <li class="d-flex list-header">
                              Office Number:
                                  <p class="">${data.officeNumber}</p> 
                          </li>
              </ul>
              </div>
          </div>
        </main>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="index.js"></script>
      </body>
    </html>
`
}




module.exports = generateHTMLPage;

// module.exports = generateEngineer;