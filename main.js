function findLongestWord(text) {

   var words = text.split(" ");

   var longestWord = "";

   for (var word of words) {
      if(word.length > longestWord.length) {
         longestWord = word;
      }
   }

   return longestWord;
}

var longestSentence = "Javascript is the best programming language";

console.log(findLongestWord(longestSentence));