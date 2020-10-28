# Pig latin Converter #
### Description ###
This script will convert a normal english sentence into Pig Latin.

### Contributors/date ###


### Test ###
| Description | Test | Expectation |
|-------------|------|-------------|
|Word beginning with vowls|Recognize the first character of a word as vowel or not|input=apple then output=appleway|
|Add "way" to the end||"apple" becomes "appleway"|
|Check for consonants|Recognize the first character of a word as consonant or not|"kale" would be recognized|
|Shift consonants|Move consecutive consonants to end of word|"shift" becomes "iftsh"|
|Qu exception|words starting with "qu" should move the "u" with the "q"|"quiet" should becomes "ietqu" but "squeal" should not become "ealsqu"|
Y exception|words starting with "y" shoudl treat "y" as a consonant|"you" should become "ouy"|
