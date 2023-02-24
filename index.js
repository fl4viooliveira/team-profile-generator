const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Add the name of the team Manager:\n >> ",
      validate(answer) {
        if (answer === "") {
          return "You must add the team Manager name!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "id",
      message: "Add the Manager ID:\n >> ",
      validate(answer) {
        if (answer === "") {
          return "You must add the Manager ID!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: "Add the Manager Email:\n >> ",
      validate(answer) {
        if (answer === "") {
          return "You must add the Manager Email!";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Add the Office Number:\n >> ",
      validate(answer) {
        if (answer === "") {
          return "You must add the Office Number!";
        }
        return true;
      },
    },
  ])
  .then((resp) => {
    // console.log(resp);
    const manager = new Manager(
      resp.name,
      resp.id,
      resp.email,
      resp.officeNumber
    );
    team.push(manager)
    // console.log(manager);
    promptForNextEmployee();
  });

const promptForNextEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Which position do you want for your team?",
        choices: ["Engineer", "Intern", "The team doesn't need anyone else."],
        filter(val) {
          return val.toLowerCase();
        },
      },
    ])
    .then((resp) => {
      if (resp.employee === "engineer") {
        promptForEngineer();
      } else if (resp.employee === "intern") {
        promptForIntern();
      } else {
        buildPage();
      }

      // if engineer
      //    promptForEngineer
      // else if intern
      //    promptForIntern
      // else
      //    use the functionality from page-template to generate the team
    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Add the name of the Engineer:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Engineer name!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Add the Engineer ID:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Engineer ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Add the Engineer Email:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Engineer Email!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "github",
        message: "Add the GitHub Engineer name:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the GitHub Engineer name!";
          }
          return true;
        },
      },

      //engineer questions
    ])
    .then((resp) => {
      // add new engineer to employees array
    const engineer = new Engineer(
      resp.name,
      resp.id,
      resp.email,
      resp.github
    );
    team.push(engineer)

      promptForNextEmployee()
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        //intern questions
      },
    ])
    .then((response) => {
      // add new intern to employees array
      // promptForNextEmployee
    });
};


const buildPage = () => {
console.log(team)

};
