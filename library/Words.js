var Letter = require("./letter.js");

function Word (value) {
    this.value = value;
    this.letters = [];
    this.guessesMade = "";
    for (var i = 0; i < this.value.length; i++) {
        this.letters.push(new Letter.letter(this.value[i]));
    }
};    

word.prototype.findLetter = function(letter) {
    var lowerCaseLetter = letter.toLowerCase();
    if (this.guessesMade.indexOf(lowerCaseLetter) != -1) {
        return "You've guessed that letter already!";
    }
    this.guessesMade += lowerCaseLetter;
    for (var i = 0; i < this.letters.length; i++) {
        if(this.letter[i].value.toLowerCase() == lowerCaseLetter) {
           this.letters[i].show = true;
        }
    }
};

word.prototype.toString = function(){
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].printInfo();
    }
    return output;
}

module.exports = Word;