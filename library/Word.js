var Letter = require("./Letter");

function Word(word) {
    this.letters = word.split("").map(function(char) {
        return new Letter(char);
    });
}

Word.prototype.getSolution = function () {
    return this.letters.map(function(letter) {
        return letter.getSolution();
    }).join("");
};

Word.prototype.toString = function() {
    return this.letters.join(" ");
};

Word.prototype.userInput = function(char) {
    var correctLetter = false;
    this.letters.forEach(function(letter) {
        if (letter.guess(char)) {
            return correctLetter;
        }
    });

    console.log("\n" + this + "\n");
    return correctLetter;
};

Word.prototype.guessedCorrectly = function() {
    return this.letters.every(function(letter) {
        return letter.visible;
    });
};

module.exports = Word;