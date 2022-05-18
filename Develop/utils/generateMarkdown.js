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

  ## Installation

  ${data.installation}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
