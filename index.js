var Word = require("./word.js");
var inquirer = require("inquirer");


var secretWord = new Word("apple");
// console.log(secretWord);

secretWord.letterArrayMaker();

function renderSecretWord(){

    var renderArray = [];

    for(var i = 0; i<secretWord.trueArray.length; i++){
        renderArray.push(secretWord.trueArray[i].toString());
    };

    console.log(renderArray.join(" "));
}

// renderSecretWord();

// console.log(secretWord.trueArray[0].toString());
// console.log(secretWord.trueArray.toString().join(""));




function ask(){

    renderSecretWord();

    inquirer
     .prompt([
        {
        type: "input",
        message: "Guess a letter",
        name: "userGuess"
        },
    ])
    .then(function(inquirerResponse) {

        if (secretWord.check(inquirerResponse.userGuess)) {
            console.log("YOU ARE RIGHT")

                for(var i=0; i<secretWord.array.length; i++){

                    secretWord.trueArray[i].checkLetter(inquirerResponse.userGuess);

                }

            // var index = secretWord.array.indexOf(inquirerResponse.userGuess);
            // secretWord.trueArray[index].checkLetter(inquirerResponse.userGuess);
            ask();
        }
        else {
            console.log("YOU ARE WRONG");
            ask();
        }
    });
}

ask();

