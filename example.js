// TODO: Include packages needed for this application
// Will need fs to write the file and create readme, will need inquirere
//will need path to join the path, will need the generatemarkdown.js file - use require for that

// established the node core module first:
const fs = require('fs');

//established code to read the information from the generateMarkdown.js file
fs.readFile('generateMarkdown.js', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// established connection to inquirer
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [
//     type: "input"
//     name: "github"
//     message: "what is your github username?"
// ];
//the questions should be there in the readme.  build the array with those questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

const questions = [];



// TODO: Create a function to write README file
//use fs that we imported up top to write the file, will want to use path to join the 
//file.  reference activity 13 to help with this. 
function writeToFile(fileName, data) {
    
    //fs.writeFile below:
fs.writeFile('log.txt', process.argv[2], (err) =>
err ? console.error(err) : console.log('Success!')
);
}




// TODO: Create a function to initialize app
//this is where you want to actually use inquirer and prompt to show the questions,
//take in the responses and write the responses to the file
//reference activity 20.  in the init function you will also want to call the write to file function
//so that the answers go to the write to file funciton. 
//inside the write to file function you will want the file name, and to call your generatemarkdown function
//and pass in the response that you got from the questions
function init() {}




// Function call to initialize app
init();

