#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while(condition)
    {let addTask =await inquirer.prompt([
    {
        type: "input",
        name: "todo",
        message: "What do you want to add in your todo?"
    },
    {
        type: "confirm",
        name: "addMore",
        message: "Do you want to add more?",
        default: "false",
    }
])
todos.push(addTask.todo);
condition = addTask.addMore;
console.log(todos);
};

