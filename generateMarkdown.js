
function renderLicenseBadge(license) {
  
  if(license!== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }else{
      return "";
    }
  }
  
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === "Apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === "GPI") {
    return `https://gpilab.com/license/`;
  } else {
    return "";
  }
}

function renderLicenseSection(data) {
  
}


function generateMarkdown(data) {

return `  # ${data.title}

${renderLicenseBadge(data.license)}

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
  ${renderLicenseLink(data.license)}


  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contribute}

  ## Github Link
  ${data.github}

  ## Email Me
  ${data.email}`;

}

module.exports = generateMarkdown;




