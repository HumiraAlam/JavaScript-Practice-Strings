/*
10. Remove All Special Characters From a String
Given a string str, return a new string that has all special characters removed.
Input: str = "hello!@#world"
Output: "helloworld"
*/

let str = "hello!@#world";
let newStr="";
let regex= /[^a-zA-Z0-9]/g; // regular expression matches any character that is not alphanumeric.

newStr= str.replace(regex, '');

console.log(newStr)