// TODO: Include packages needed for this application
// Will need fs to write the file and create readme, will need inquirere
//will need path to join the path, will need the generatemarkdown.js file - use require for that

// established the node core module first:
const fs = require("fs");

// established connection to inquirer
const inquirer = require("inquirer");

//established connection to markdown
const markDown = require("./generateMarkdown.js");


//established connection to path
const path = require("path");

// TODO: Create a function to initialize app
//this is where you want to actually use inquirer and prompt to show the questions,
//take in the responses and write the responses to the file
//reference activity 20.  in the init function you will also want to call the write to file function
//so that the answers go to the write to file funciton.
//inside the write to file function you will want the file name, and to call your generatemarkdown function
//and pass in the response that you got from the questions
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "project",
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
        name: "install",
      },
      {
        type: "checkbox",
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
        message: "What is your Github link",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email link",
        name: "email",
      },
    ])

    //TODO build the array with those questions
    // const questions = [];
    //.then response with a function that will write the readme file.
    //Per TA we will need a path to join the file?
    .then((answers) => {
      // console.log(answers);
      fs.writeFile("README.md", markDown(answers), (err) =>
        err ? console.log(err) : console.log(`Success!`)
      );
    //   markDown(answers);
    //   console.log(answers);
    });
}

// Function call to initialize app
init();

///this part was behind the readme file section.  JSON.stringify(answers, null, `t`)
