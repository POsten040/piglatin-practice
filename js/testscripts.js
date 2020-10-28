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
  inputArray.map(function(whatever){ 
  return whatever.join('way');
  });
  }
};

let vowels = ["a","e","i","o","u"];
let newStr = "";

function pigLatinOutput (str) {
  if (vowels.indexOf(str[0]> -1) {
    newStr = str + "way";
    return newStr;
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

let userInput = "apple";
let vowelRegEx = /[aeiouAEIOU]/;
let matched = userInput.match(vowelRegEx);
if(matched) {
console.log('yep');
}
else
{
console.log('nope');
}



function pigLatin(str) {
  str = str.toLowerCase()
  const vowels =["a", "e", "i", "o", "u"];
  let vowelIndex=0;

  if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexof(char);
        break;
      }
    }
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  
  }
}

function pigLatin (word) {
  let firstConsonats = [];
  let latinWord = "";
  let regEx = /[aeiou]/gi;
  let wordArray = word.toLowerCase().split("");

  if (wordArray[0].match(regEx)) {
    return wordArray
  }
}
