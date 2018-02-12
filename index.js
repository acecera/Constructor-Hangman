var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');
var prompt = require('prompt');

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
        }]).then(function(answers) {
            if (answers.play) {
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
                       return guessedAlready = true;
                   } if (guessedLetters === false) {
                       console.log("Wrong Letter!");
                       this.guessedLetters.push();
                       this.guessesLeft--;
                       this.display++;
                       console.log("Guesses Left: " + guessesLeft);
                       console.log(this.display);
                       console.log(this.currentWord.showWord());
                       console.log("Letters Guessed: " + this.guessedLetters);
                   } else {
                       console.log("You guessed correct!");
                   } if (this.currentWord.wordGuessed() === true) {
                       console.log(this.currentWord.showWord());
                       console.log("You win!");
                   } else {
                       console.log("Guesses Left: " + guessesLeft);
                       console.log(this.currentWord.showWord());
                       console.log("Letters Guessed: " + this.guessedLetters);
                   }  
                   if (this.guessesLeft > 0 && this.currentWord.wordGuessed === false) {
                       this.promptUser();
                   } else if (this.guessesLeft === 0) {
                       console.log("Game Over!");
                       console.log("The word you were guessing was: " + this.currentWord.randomWord);
                   } else {
                       console.log("You've guessed that letter already.");
                       this.promptUser();
                   }
                });
            }
        }
    }
}

this.startGame();