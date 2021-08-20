 module.exports = Phrase;


String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

function Phrase(content){
  this.content = content;
  
  this.letters = function letters(){
   let lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join("");
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  
  this.palindrome = function palindrome(){
     return this.processedContent() === (this.processedContent()).reverse();
  } 
}



 