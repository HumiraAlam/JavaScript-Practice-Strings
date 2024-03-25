/*
20.

Determine If a String Is a Pangram (Contains Every Letter of the Alphabet)
Given a string str, return true if str is a pangram (contains every letter of the alphabet), otherwise return false.
Input: str = "The quick brown fox jumps over the lazy dog"
Output: true


*/

let str= "The quick brown fox jumps over the lay dog"
let alphabets= "abcdefghijklmnopqrstuvwxyz";
let newStr= str.toLocaleLowerCase();

let isPamgram=true;
for(i=0;i<alphabets.length;i++){
    if(!newStr.includes(alphabets[i])){
        isPamgram=false;
    }
        
}
console.log(isPamgram)