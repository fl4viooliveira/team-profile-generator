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
    const manager = new Manager(
      resp.name,
      resp.id,
      resp.email,
      resp.officeNumber
    );
    team.push(manager);

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
    ])
    .then((resp) => {
      const engineer = new Engineer(
        resp.name,
        resp.id,
        resp.email,
        resp.github
      );
      // add new engineer to employees array
      team.push(engineer);

      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Add the name of the Intern:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Intern name!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Add the Intern ID:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Intern ID!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Add the Intern Email:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Intern Email!";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "school",
        message: "Add the Intern School name:\n >> ",
        validate(answer) {
          if (answer === "") {
            return "You must add the Schoo name!";
          }
          return true;
        },
      },
    ])
    .then((resp) => {
      const intern = new Intern(resp.name, resp.id, resp.email, resp.school);
      // add new intern to employees array
      team.push(intern);
      promptForNextEmployee();
    });
};

const buildPage = () => {
  console.log(team);
};
