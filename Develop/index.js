// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the project."
    },
    {
        type: "input",
        name: "installation",
        message: "Write out steps to install your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Write out the usage of the project"
        
    },
    {
        type: "list",
        name: "license",
        message: "What license is the project under?",
        choices: ["apache 2.0", "gpl", "isc", "mit", "none"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Write out the contribution guidelines"
    },
    {
        type: "input",
        name: "tests",
        message: "write out the test instructions"
    },
    {
        type: "input",
        name: "github",
        message: "write out your github"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "write out your email"
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function start() {
    inquirer.prompt(questions)
    .then((answers)=> {

        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to startialize app
start();
