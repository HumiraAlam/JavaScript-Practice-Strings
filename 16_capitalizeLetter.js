/*
16. 
Capitalize the First Letter of Each Sentence in a String
Given a string str, return a new string where the first letter of each sentence is capitalized.
Input: str = "hello. world."
Output: "Hello. World."
*/

let str= "hello. world.";

let splitedStr= str.split(". ");
let newStr="";
for(i=0;i<splitedStr.length;i++){
    newStr+=splitedStr[i][0].toUpperCase()+splitedStr[i].substring(1)+" "
}
console.log(newStr)
