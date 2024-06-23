#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 4500;
const myPin = 3399;
console.log();
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log();
    console.log("Dear Customer,");
    console.log("              Welcome to Our Bank!");
    console.log();
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Fast Cash", "Cash Withdrawal", "Balance Inquiry"],
        },
    ]);
    if (operationAnswer.operation === "Cash Withdrawal") {
        console.log();
        let cashAnswer = await inquirer.prompt([
            {
                name: "cashAmount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        if (cashAnswer.cashAmount > 4500) {
            console.log();
            console.log("Inefficient Balance");
        }
        else {
            myBalance -= cashAnswer.cashAmount;
            console.log();
            console.log("Your Remaining Balace is: " + myBalance);
        }
    }
    if (operationAnswer.operation === "Fast Cash") {
        console.log();
        let fastAnswer = await inquirer.prompt([
            {
                name: "fastAmount",
                message: "Please Select Amount",
                type: "list",
                choices: ["500", "1000", "2000", "5000"],
            },
        ]);
        if (fastAnswer.fastAmount > 4500) {
            console.log("Inefficient Balance");
        }
        else {
            myBalance -= fastAnswer.fastAmount;
            console.log();
            console.log("Your Remaining Balance is: " + myBalance);
        }
    }
    if (operationAnswer.operation === "Balance Inquiry") {
        console.log();
        console.log("Your Balance is: " + myBalance);
    }
}
else {
    console.log();
    console.log("        !*< Moye Moye >*!        ");
}
console.log();
console.log("           Thank You          ");
console.log("              For             ");
console.log("  Utilizing Our Banking Service");
