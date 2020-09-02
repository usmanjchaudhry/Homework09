// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require('./utils/generateMarkdown');
const axios= require("axios");

const questions = [
   {
       type: "input",
       name: "title",
       message: "What is the name of the Project title?"

     
   } ,
   {
    type: "input",
    name: "description",
    message: "Provide a description for your project."

  
} ,
{
    type: "input",
    name: "content",
    message: "Provide a table of contents for your project."

  
} ,
{
    type: "input",
    name: "install",
    message: "Provide how to install for your project. "

  
} ,
{
    type: "input",
    name: "usage",
    message: "Provide how to use the project. "

  
} ,
{
    type: "input",
    name: "license",
    message: "Provide the licensing terms for this project. "

  
} , 
{
    type: "input",
    name: "contribute",
    message: "How did you contribute bro. "

  
} ,
{
    type: "input",
    name: "tests",
    message: "Wassup with these tests fool "

  
} ,
{
    type: "input",
    name: "questions",
    message: "Questions... You got any ? "

  
} ,
   {
    type:"input",
    message: "Enter your GitHub username:",
    name: "username"
   },
   {
    type: "input",
    name: "repo",
    message: "What is your repo link?"
},
  
];

inquirer.prompt(questions).then(function(data) {
    const queryUrl = `https://api.github.com/users/${data.username}`;


axios.get(queryUrl).then(function(res)  {
    const repoInfo = {
      
        profile: res.data.html_url,
        name: res.data.name
    };
// function to write README file
fs.writeFile("README.md",generate(data,repoInfo),function(err){
    if(err){
        throw err;
    };
    console.log("New README")
});
});
});

// function to initialize program
function init() {

}

// function call to initialize program
init();

