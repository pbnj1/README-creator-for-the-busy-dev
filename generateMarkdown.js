//created an exports command so that index.js is able to use this form

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  
  if (data.license === "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (data.license === "Apache") {
    return `![Apache](https://img.shields.io/badge/license-Apache-blue.svg)`;
  } else if (data.license === "GPI") {
    return `![Apache](https://img.shields.io/badge/license-GPI-blue.svg)`;
  } else {
    return "";
  }
 
  //in here we will want a conditional statement to check if there is a license (wether there is a license
  //should be one of the array questions) If license is there - return the license.  If not there return and
  // empty string.

  // write a template literal here like this to return it - return `![text to be displayed(the link itself)]`
  // use the second link that he slacks out here.....for the badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return `![MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (data.license === "Apache") {
    return `![Apache](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (data.license === "GPI") {
    return `![GPI](https://gpilab.com/license/)`;
  } else {
    return "";
  }

 
  //in here do the same pattern you used above with the conditional statement
  //this is where you will be returning the license link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  
  //same pattern as above
  //return `## License This repository has the ${Licesnse} License`
  //
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // let answers = JSON.stringify(data)
  console.log("hello", data)

  return `
  ${renderLicenseBadge(data)}

  ## Project Title: 
  ${data.project}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#install)
  3. [License](#license)
  4. [Tests](#tests)
  5. [Contributing](#contributing)
  5. [Github](#github)
  6. [Email](#email)


  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## License
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contribute}

  ## Github Link
  ("${data.github}")

  ## Email Me
  ("${data.email}")

  `;

 
}


//in the generateMarkdown you will want things like the ## Table of contents, ## description, anything else
//rendering all the other things here
module.exports = generateMarkdown;
// module.exports = renderLicenseBadge
// module.exports = renderLicenseLink
// module.exports = renderLicenseSection
