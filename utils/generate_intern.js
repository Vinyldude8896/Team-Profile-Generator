function generateIntern(data) {
    console.log("data inside function generateIntern is " + data);
    return`  <div class = "card-header col-3 mb-2">
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
                  School:
                      <p class="weather_info">${data.school}</p> 
              </li>
  </ul>
  </div>
  `
  }

  module.exports = generateIntern;