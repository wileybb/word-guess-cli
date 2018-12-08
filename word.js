var Letter = require("./letter");


var Word = function(string){

    this.array = string.split("");

    // this.trueArray = [];

    // this.letterArrayMaker = function(){
    //     for(i=0; i<this.array.length; i++){
    //         var newLetter = new Letter(this.array[i]);
            
    //         this.trueArray.push(newLetter);
    //     };
    // };

    this.word = function(){
        return this.array.join("");
    };

    this.check = function(x){
        if((word.array.indexOf(x)) > -1){
            console.log("correct");
        }else{
            console.log("incorrect");
        };
        
    };
    
};

var word = new Word("peace");

console.log(word.trueArray);

// console.log(word.word());  


// var letter = new Letter("r");
// letter.checkLetter("r");
// console.log(letter+"this is this");

module.exports = Word;
