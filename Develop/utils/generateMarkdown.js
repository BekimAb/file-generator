// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none"){
    return `This project is licensed under the ${license} license`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("data from index.js", data)
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 

  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Github](#github)

  *[Email](#email)


  ## Installation

  ${data.installation}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Github

  You can see more of my work at [${data.github}](https://github.com/${data.github})

  ## Email

  You can contact me with any questions at ${data.emailAddress}



`;
}

module.exports = generateMarkdown;
