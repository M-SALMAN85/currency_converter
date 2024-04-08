#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red `\n\t Welcome To  "G.I.P" = Currency Converted Program\n`);
let rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
let user_answer = await inquirer.prompt([
    {
        message: "Select One Option to convert Currency from:",
        type: "list",
        name: "currency",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        message: "Select One Option to convert Currency into:",
        type: "list",
        name: "currency_convert",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        message: "Please Put Currency Convert Amount:",
        type: "input",
        name: "amount",
    }
]);
let from_amount = rate[user_answer.currency];
let to_amount = rate[user_answer.currency_convert];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted_amount = ${chalk.green(converted_amount.toFixed(2))}`);
