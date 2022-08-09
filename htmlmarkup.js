// generate header with MyTeam
// Generate blocks with each team member listed with relevant details from questions
function employee_container(employee) {
  console.log(employee);
      // adding icons to team member panels

  return `
  <div class="employee m-5 card bg-light">
  <div class="card-header">
  ${html_heading(employee.name, 2)}
    ${employee_role(employee)}
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.id}</li>
    <li class="list-group-item">${employee.email}</li>
    <li class="list-group-item">${employee_roleChoice(employee)}</li>
  </ul>
    </div>
    </div>
    `;
}

function employee_roleChoice(employee) {
    let text=""
    switch(employee.role){
        case "Team Manager":
        text="Office Number: " + employee.officeNumber
        break
        case "Engineer":
        text="GitHub username: " + employee.GitHub
        break
        case "Intern":
        text="School Choice: " + employee.schoolChoice
        default: break
    }
    return text
}

function employee_role(employee) {
    let icon=""
    switch(employee.role) {
        case "Team Manager":
        icon='<i class="bi bi-cup-hot"></i>'
        break
        case "Engineer":
        icon='<i class="bi bi-broadcast"></i>'
        break
        case "Intern":
        icon='<i class="bi bi-mortarboard-fill"></i>'
        default: break

    }
    return `
    ${html_heading(icon + " " + employee.role, 3)}
    `
}

function employees_gen(data){
    let render = "";
    data.forEach(employee => {render += employee_container(employee)})
    return render;
}

function html_heading(text, level, className) {
    console.log("heading->" + text);
    if (isNaN(level)) level = 1;
    else if (level < 1) level = 1;
    else if (level > 6) level = 6;
    return `
      <h${level} class="${className}">
      ${text}
      </h${level}>
      `;
  }

function html_body(data) {
  console.log("body->" + data);
  return `
    <body>
    <div class="bg-primary py-5">
    ${html_heading("My Team", 1, "text-center")}
    </div>
    <div class="container">
    <div class="d-flex justify-content-center flex-wrap">
    ${employees_gen(data)}
    </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    `;
}

function html_head(title) {
    return `
    <head>
    <title>
    ${title}
    </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <style>
    .employee {
      width: 275px;
    }
  </style>
    </head>`
    ;
}

function generateHTML(data) {
    console.log("html->" + data);
    return `
      <html>
      ${html_head("My Team")}
      ${html_body(data)}
      </html>
      `;
  }

  function HelloWorld(){
    console.log("hellow world!")
  }

module.exports = generateHTML;
