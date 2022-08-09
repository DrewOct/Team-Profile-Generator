// OVERALL (MVP): Generate an external HTML file that contains roster of people in engineering team
const path = require("path");
const HTMLGenerator = require("./htmlmarkup.js");

const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const Manager = require("./lib/Manager.js");

// Generate array of questions addressing engineer name, ID, email, and GitHub username
const managerQuestions = [
  {
    type: "input",
    message: "Enter your full name.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter your ID.",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "emailAddress",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your office number",
    name: "officeNumber",
  },
];

// Generate array of questions addressing intern name, ID, email, and school
// Create an array of roles [team manager, engineer, intern]
const employees = [];

// When choosiing a role/employee, I am directed to the appropriate question array
const nameIdentEmailRole = [
  {
    type: "input",
    message: "Enter team member's full name.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter team member's ID.",
    name: "employeeID",
  },
  {
    type: "input",
    message: "What is team member's email address?",
    name: "emailAddress",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
  {
    type: "list",
    message: "What is the team member's role?",
    name: "roleChoice",
    // Provide array of team roles from which to choose
    choices: ["Engineer", "Intern"],
  },
];
const roleQuestions = [
  { type: "input", message: "What is your GitHub username?", name: "GitHub" },
  {
    type: "input",
    message: "What school do you attend?",
    name: "schoolChoice",
  },
];
const roleFunction = (roleChoice) => {
  switch (roleChoice) {
    // case "Team Manager":
    //   return roleQuestions[0];
    case "Engineer":
      return roleQuestions[0];
    case "Intern":
      return roleQuestions[1];
    default:
      return null;
  }
};

// Generate array of questions addressing team manager's name, ID, email, and office number

// Create a function to confirm whether team building is done

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function init() {
  console.log("Welcome to the Team Profile Generator App!");

  inquirer.prompt(managerQuestions).then((data) => {
    let employee = {
      name: data.name,
      id: data.employeeID,
      email: data.emailAddress,
      role: "Team Manager",
      officeNumber: data.officeNumber,
    };

    //let employee = new Manager(data.name, data.employeeID, data.emailAddress, data.officeNumber)

    employees.push(employee);
    console.log(employees);
    program_loop();
  });
}

function program_loop() {
  inquirer
    .prompt({
      type: "list",
      message: "Please select an option.",
      choices: ["Add an employee", "Finish building my team"],
      name: "option",
    })
    .then((data) => {
      if (data.option == "Add an employee") {
        inquirer.prompt(nameIdentEmailRole).then((data) => {
        //   console.log(data.roleChoice);
          let employee = {
            name: data.name,
            id: data.employeeID,
            email: data.emailAddress,
            role: data.roleChoice,
          };
        //   console.log(employee);
          inquirer.prompt(roleFunction(data.roleChoice)).then((data) => {
            switch (employee.role) {
              // case "Team Manager":
              //     employee.officeNumber=data.officeNumber
              case "Engineer":
                employee.GitHub = data.GitHub;
              case "Intern":
                employee.schoolChoice = data.schoolChoice;
              default:
                console.log("Role not specified");
            }
            employees.push(employee);
            // console.log(employees);
            program_loop();
          });
        });
      } else {
        ensureDirectoryExistence("output");
        console.log("Making HTML");
        console.log(employees);
        writeToFile("output/index.html", HTMLGenerator(employees));
      }
    });
}

// Function call to initialize app
function writeToFile(fileName, data) {
  // condition ? do A if true : do B if false
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File Written!")
  );
}

init();

// ensureDirectoryExistence("output");
// console.log("Making HTML");
// console.log(null);
// writeToFile("output/index.html", HTMLGenerator(null));
