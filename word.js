var Letter = require("./letter");


var Word = function(string){

    this.array = string.split("");

    this.trueArray = [];

    this.letterArrayMaker = function(){
      var array = this.array;
        for(i=0; i<array.length; i++){
            var newLetter = new Letter(array[i]);
            // console.log("hi");
            this.trueArray.push(newLetter);
            
        };
    };

    this.word = function(){
        return this.array.join("");
    };

    this.check = function(x){
        if((this.array.indexOf(x)) > -1){
            console.log("correct");
            return true;
        }else{
            console.log("incorrect");
            return false;
        };
        
    };
    
};



module.exports = Word;
