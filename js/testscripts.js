Describe: Recognize vowels
Test: The program will recognize vowels
expect: "A sentence" output=recognizing those vowels

const vowelsArray = ["a","e","i","o","u"];
let words = "apple"

function igLatin(input) {
  const
}

//this returns word(way)
const vowelsArray = ["a","e","i","o","u"];
const vowelsRegEx = /[aeiouy]/;
const userInput = "apple";

const inputArray = userInput.split();
function pigLatinOutput (userInput) {
  
  if (userInput.charAt(0).match(vowelsRegEx)) {
  finalArray = inputArray.map(function(element){ 
  return finalArray.join('');
  });

  }
};

const userInput = "apple";
const userInputArray = userInput.split("");
const finalArray = userInputArray.map(function(element) {
  return element + "way";
});
finalArray.join(""); 
// 
//userInput.charAt(0):
//-->"a"




// function igLatin (input) {
//   const words = input.split(" ");
//     for(const i = 0; i < words.length; i++) {
//       if (words[i].charAt(0).match(vowelsArray)){

//       }
//     }
// }


// function wayPush(finalArray) {
//   let index = 0;
//   let finalArray = [];
//   while
//     (index < vowelsArray.length) {
//       finalArray.push(vowelsArray[index]);
//       index ++;
//     }
//   }
// const chars = string.split(""); //[input]
// const finalArray = chars.push("way");
// return finalArray;
// }

// function vowelCheck(input) {
//   input.forEach(function(element) {
//     if (element === vowels)
//     console.log("starts with vowel");
//   }); 
// };

// }


Describe: Word beginning with vowls
Test: for words starting with a vowel, add "way" to the end
Expect :tinput=apple then output=appleway

Describe: Word beginning with consonants
Test: for words beginning with consonants, move all of the first consecutive consonants to the end and add "ay"
Expect: input= bread then output=eadbray

Describe: words with qu in beginning
Test: for words begining with qu move the qu to the end and add async
Expect: input=quest then output=uestquay

Describe: Words beginningwith "y",
Test: word beginning with "y",  treat "y" as a consonant
Expect: input=yes output=esyay