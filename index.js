const manager = require('./lib/manager.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const tester = require('./lib/tester.js')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');

//need a place to put the new employee created
let newEmployee =[]

//Questions for inquirer

const emplQuestions = async () => {
    const emplAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a name.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a  email address.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter an ID number.");
          }
          return true;
        },
      },  
      {
        type: "list",
        message: "What is your new role on the team?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },     
      {
        type: "input",
        message: "What is your office phone number?",
        name: "officeNumber",
        when: ({ role }) => role == "Manager",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter your office number.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
        when: ({ role }) => role == "Engineer",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a your github username.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
        when: ({ role }) => role == "Intern",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter your school name.");
          }
          return true;
        },
      },
    ]);
    if (emplAns.role === "Manager") {
      let newManager = new manager(
        emplAns.name,
        emplAns.id,
        emplAns.email,
        emplAns.officeNumber
      );
      newEmployee.push(newManager);
    } else if (emplAns.role === "Engineer") {
      let newEngineer = new engineer(
        emplAns.name,
        emplAns.id,
        emplAns.email,
        emplAns.github
      );
      newEmployee.push(newEngineer);
    } else {
      let newIntern = new intern(
        emplAns.name,
        emplAns.id,
        emplAns.email,
        emplAns.school
      );
      newEmployee.push(newIntern);
    }
  };
  
//allow the output creation or add additional employees and start the inquisitor 
  async function startQuestions() {
    await emplQuestions();
  
    const nextStage = await inquirer.prompt([
      {
        name: "newEmployee",
        type: "list",
        choices: ["Add new employee", "Create team"],
        message: "What would you like to do?",
      },
    ]);
  
    if (nextStage.newEmployee === "Add new employee") {
      return startQuestions();
    } else {
      return makeTeam();
    }
  }
  
  // create the new team profile and add to the dist file location
  function makeTeam() {
    fs.writeFileSync("./dist/teamprofile.html", createTeam(newEmployee), "utf-8");
    console.log("Your team profile created!");
  }
  
  // // Function call to initialize the app
  startQuestions();