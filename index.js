const inquirer = require("inquirer");
const fs = require("fs");
const generateInfo = require("./src/generateInfo");

inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your employee's job role?",
      choices: ["Employee", "Manager", "Engineer", "Intern"],
    },
    {
      type: "text",
      name: "id",
      message: "What is the employee's id?",
    },
    {
      type: "text",
      name: "email",
      message: "What is the email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the Manager's office number?",
      when: (answers) => answers.role === "Manager",
    },
    {
      type: "input",
      name: "github",
      message: "What is the Engineer's github username?",
      when: (answers) => answers.role === "Engineer",
    },
    {
      type: "input",
      name: "school",
      message: "What school does the Intern go to?",
      when: (answers) => answers.role === "Intern",
    },
  ])
  .then((answers) => {
    fs.writeFile("./index.html", generateInfo(answers), function () {
      console.log("file Written");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something went wrong, file not generated.");
    }
  });
