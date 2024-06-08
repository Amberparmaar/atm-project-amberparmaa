#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 30000;
let myPin = 7171;
console.log(chalk.blueBright.bold `WELLCOME TO AMBER`);
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log(chalk.bgYellow `Your Pin is Correct`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operations",
            message: "Please Select Options",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    // if user select withdraw
    if (operationAnswer.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount",
                type: "Number",
            },
        ]);
        if (amountAns.Amount <= myBalance) {
            let balance = myBalance - amountAns.Amount;
            console.log(chalk.greenBright `The Remaining Balance is ${balance}`);
        }
        else {
            console.log(`You Have Insufficient Balance`);
        }
    }
    // if user select fast cash
    else if (operationAnswer.operations === "Fast Cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "Amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (fastCashAnswer.Amount <= myBalance) {
            let balance2 = myBalance - fastCashAnswer.Amount;
            console.log(chalk.greenBright `The Remaining Balance is ${balance2}`);
        }
        else {
            console.log(chalk.redBright `You Have Insufficient Amount`);
        }
    }
    else if (operationAnswer.operations === "Check Balance") {
        console.log(myBalance);
    }
}
else {
    console.log(chalk.bgGreenBright `Your Pin is Incorrect`);
}
