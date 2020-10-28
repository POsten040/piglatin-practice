Describe: Recognize vowels
Test: The program will recognize vowels
expect: "A sentence" output=recognizing those vowels

const vowels = ["a","e","i","o","u"];
const string = "$(#input).val();"
const stringArray = string.split(); //[input]
const finalArray = stringArray.push("way");


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