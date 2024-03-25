/*
9. Remove All Spaces From a String
Given a string str, return a new string that has all spaces removed.
Input: str = "hello world"
Output: "helloworld"
*/

let str = "hello world";
let splitedStr= str.split("");
let newStr=""
for(i=0;i<splitedStr.length;i++){
     if(splitedStr[i]!==" "){
    newStr+=splitedStr[i]

     }
 }
console.log(newStr)