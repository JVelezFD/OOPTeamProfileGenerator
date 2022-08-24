const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const tester = require('./lib/Tester')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');



//Questions for inquirer

const questions = [
    {
        name: "name",
        message: "What is employee's name?"
    },
    {
        name: "id",
        message: "What is employee's id"
    },
    {
        name: "email",
        message: "What is employee's email?"
    },
    {
        type: "list",
        message: "What is employee's role?",
        choices: [
            "manager",
            "engineer",
            "intern",
            "tester"
        ],
    },
];