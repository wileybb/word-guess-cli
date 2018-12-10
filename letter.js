var Letter = function(x){

    this.char = x;

    this.guessed = false;

    this.toString = function(){
        if(this.guessed){
            var reveal = this.char;
            return reveal;
        }else{
            var reveal = "_";
            return reveal;
        };
    };
    
    this.checkLetter = function(z){
        if(z == this.char){
            this.guessed = true;
            console.log("CORRECT!")
        }
    }
}



module.exports = Letter;
