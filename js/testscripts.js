function pigLatin (word) {
  let firstConsonats = []; //defining an array
  let latinWord = ""; // defining a string
  let regEx = /[aeiou]/gi; // regular expression
  let regExQu = /qu/gi;
  let wordArray = word.toLowerCase().split(""); //merges split and lower case

  if (wordArray[0].match(regEx)) {
    return wordArray.join("") + "way";
  }
// char = index
  for (let char = 0; char <= wordArray.length; char++) {
    if (!wordArray[char].match(regEx)) {//each time the for loop runs it checks the array elements (aka: letters) to see if they're vowels. if they're not it pushes them to the end of the word. if they are it skips to the else below.)
      firstConsonats.push(wordArray[char]); //

  } else if 
    (wordArray[char].charAt(0) == "q" && wordArray[char].charAt(1) == "u") {
      (wordArray[char] = wordArray[char].slice(2) + "-quay")
      
  

  } else {
      latinWord =
        wordArray.splice(char).join("") + firstConsonats.join ("") + "ay";
        break;
    }
    }
    return latinWord;
  }


  // else if(words[i].charAt(0) == "q" && words[i].charAt(1) == "u") {
  //   words[i] = words[i].slice(2) + "-quay";
  //     break;