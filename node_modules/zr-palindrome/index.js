 module.exports = Phrase;


String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

function Phrase(content){
  this.content = content;

  this.letters = function letters(){
   const lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join("");
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  
  this.palindrome = function palindrome(){
    if(this.letters()){
      return this.processedContent() === (this.processedContent()).reverse();
    } else {
      return false;
    }
  } 
}



 