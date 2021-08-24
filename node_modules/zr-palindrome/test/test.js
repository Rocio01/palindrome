let assert = require("assert");
let Phrase = require("../index");

describe("Phrase", function(){
  describe("#palindrome", function(){
    it("should return false for a non-palindrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });
    it("should return true for a palindrome", function(){
      let plainPalindrome = new Phrase("reconocer");
      assert(plainPalindrome.palindrome());
    });
    it("should return true for a mixed case palindrome", function(){
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    })
    it("should return true for a palindrome with punctuation", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
    it("should return only the letters", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    })
    it("should return the empty string on no match", function(){
      let noLetters = new Phrase("123456.789")
      assert.strictEqual(noLetters.letters(), "")
    })
    it("should return false for an empty string", function(){
      let emptyString = new Phrase("");
      assert(!(emptyString.palindrome()));
    })
  });
 

})