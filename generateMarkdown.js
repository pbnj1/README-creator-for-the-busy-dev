// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if(license ){
  return `![thier license answer](https://img.shields.io/badge/license-${license}-blue.svg)`;

 }
  //in here we will want a conditional statement to check if there is a license (wether there is a license
  //should be one of the array questions) If license is there - return the license.  If not there return and 
  // empty string. 

  // write a template literal here like this to return it - return `![text to be displayed(the link itself)]`
// use the second link that he slacks out here.....for the badge 
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //in here do the same pattern you used above with the conditional statement
  //this is where you will be returning the license link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //same pattern as above
  
  //return `## License This repository has the ${Licesnse} License`
  //
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  

`;
}
//in the generateMarkdown you will want things like the ## Table of contents, ## description, anything else 
//rendering all the other things here
module.exports = generateMarkdown;
