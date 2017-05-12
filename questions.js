var inquirer = require("inquirer");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var score = 0;
var BasicCard1 = new BasicCard("(1) question: who was the 1st president of the US?");
var BasicCard2 = new BasicCard("(2) question: who was the 2nd president of the US?");
var BasicCard3 = new BasicCard("(3) question: who was the 3rd president of the US?");
var BasicCard4 = new BasicCard("(4) question: who was the 4th president of the US?");



function askQuestion() {
    inquirer.prompt([{
                type: "input",
                message: BasicCard1.front,
                name: "name"
            },

            {
                type: "input",
                message: BasicCard2.front,
                name: "name1"
            }, {
                type: "input",
                message: BasicCard3.front,
                name: "name2"
            }, {
                type: "input",
                message: BasicCard4.front,
                name: "name3"
            }, {

                

        ]).then(function(user) {

                if (JSON.stringify(user.name1.toUpperCase()) === JSON.stringify(BasicCard1.back)) {
                    console.log("(1) question:Right!");
                    score++;
                } else {
                    console.log("(1) question:wrong,the right answer is: " + BasicCard1.back);
                }
                if (JSON.stringify(user.name2.toUpperCase()) === JSON.stringify(BasicCard2.back)) {
                    console.log("(2) question:Right!");
                    score++;
                } else {
                    console.log("(2) question:wrong,the right answer is: " + BasicCard2.back)
                }
                if (JSON.stringify(user.name3.toUpperCase()) === JSON.stringify(BasicCard3.back)) {
                    console.log("(3) question:Right!");
                    score++;
                } else {
                    console.log("(3) question:wrong,the right answer is: " + BasicCard3.back)
                }
                if (JSON.stringify(user.name4.toUpperCase()) === JSON.stringify(BasicCard4.back)) {
                    console.log("(4) question:Right!");
                    score++;
                } else {
                    console.log("(4) question:wrong,the right answer is: " + BasicCard4.back)




                    console.log("your score is: " + score);
                    inquirer.prompt([{
                        type: "confirm",
                        message: "Play game again:",
                        name: "confirm",
                        default: true
                    }]).then(function(user) {
                        if (user.confirm) {
                            askQuestion();
                            score = 0;
                        } else {
                            process.exit;
                        }
                    });
                }
            }

            askQuestion();