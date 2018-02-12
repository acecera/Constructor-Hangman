var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');

var wordArray = ['Brazil', 'Netherlands', 'Argentina', 'France', 'Belgium', 'England', 
'Peru', 'Italy', 'Spain', 'Germany', 'Poland'];
var randomWordIndex = Math.floor(Math.random() * wordArray.length);
var randomWord = wordArray[randomWordIndex];

function hangman(randomWord, guessedLetter, guessesLeft, display, currentWord, startGame) {
    this.randomWord = randomWord;
    this.guessedLetters = [];
    this.guessesLeft = 10;
    this.display = 0;
    this.currentWord = null;
    this.startGame = function () {
        if (this.guessedLetter.length > 0) {
            this.guessedLetter = [];
        }
        inquirer.prompt([{
            name: 'play',
            type: 'confirm',
            message: 'Ready to play?'
        }]).then(function(response) {
            if (response.play) {
                this.newGame();
            } else {
                console.log("Maybe next time!");
            }
        })
    };

    this.newGame = function() {
        if (this.guessesLeft === 10) {
            console.log('Start!');
            console.log("_ _ _ _ _ _ _ _ _ _ _");
            var randomNumber = Math.floor(Math.random() * this.randomWord.length);
            this.currentWord = new Word (this.randomWord[randomNumber]);
            this.currentWord.getLetters();
            console.log(this.currentWord.letterAppear());
            this.promptUser = function() {
                inquirer.prompt([
                    {
                        name: "chooseLetter",
                        type: "input", 
                        message: "Choose a letter",
                        validate: function(letterCheck) {
                            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                            return regEx.test(letterCheck);
                        }
                    }
                ]).then(function(getLetters) {
                   var guessedAlready = false;
                   for (var i = 0; i < this.guessedLetters.length; i++) {
                       if(guessedLetters === this.guessedLetter[i])
                       return;
                   }
                })
            }
        }
    }
}