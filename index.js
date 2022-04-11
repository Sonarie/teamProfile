const inquirer = require("inquirer");
const fs = require("fs");
const generateInfo = require("./dist/index.html");

inquirer
  .prompt([
    {
      type: "text",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "text",
      name: "id",
      message: "What is your employee id?",
    },
    {
      type: "text",
      name: "email",
      message: "What is your email address?",
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

//module.exports = Manager;
