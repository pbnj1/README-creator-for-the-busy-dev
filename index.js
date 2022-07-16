
// established the node core module first:
const fs = require("fs");

// established connection to inquirer
const inquirer = require("inquirer");

//established connection to markdown
const markDown = require("./generateMarkdown.js");

//established connection to path
const path = require("path");

//function to initialize inquirer prompts 
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },
      {
        type: "input",
        message:
          "Provide a short description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
      },
      {
        type: "list",
        message: "What license do you want to use?",
        choices: ["MIT", "Apache", "GPI", "None"],
        name: "license",
      },
      {
        type: "input",
        message: "List any tests you have written for your application.",
        name: "tests",
      },
      {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contribute",
      },
      {
        type: "input",
        message: "What is your Github link?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])

//function to send write data on a README and send data to markDown
    .then((answers) => {
 
      fs.writeFile("README.md", markDown(answers), (err) =>
        err ? console.log(err) : console.log(`Success!`)
      );

    });
}

// Function call to initialize app
init();


