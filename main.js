let Phrase = require("zr-palindrome");
function palindromeTester (event){
  event.preventDefault();
 
  let phrase = new Phrase( event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()){
    palindromeResult.innerHTML = `"<strong> ${phrase.content}" is a palindrome! </strong>`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit", (event) => {   
    palindromeTester(event);
  });
  
});


