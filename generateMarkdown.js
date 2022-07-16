
//function to render the license badge.
function renderLicenseBadge(license) {
  
  if(license!== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }else{
      return "";
    }
  }
  
//function to render a link about the license they chose.
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `Some additional information about your license can be found here: https://choosealicense.com/licenses/mit/`;
  } else if (license === "Apache") {
    return `Some additional information about your license can be found here: https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GPI") {
    return `Some additional information about your license can be found here: https://gpilab.com/license/`;
  } else {
    return "";
  }
}

//function to to render the inquirer prompt answers onto the README
function generateMarkdown(data) {

return `  # ${data.title}

${renderLicenseBadge(data.license)}
 
## Link to a video walkthrough of this application:
${"https://drive.google.com/file/d/1dNwhTu0DgEB9BMUl51htZgECV_jt3dPx/view?usp=sharing"}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Tests](#tests)
  5. [Contributing](#contributing)
  5. [Github](#github)
  6. [Email](#email)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${renderLicenseLink(data.license)}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contribute}

  ## Github 
  ${data.github}

  ## Email
  ${data.email}`;

}

//exports the generateMarkdown sheet to index.js
module.exports = generateMarkdown;




