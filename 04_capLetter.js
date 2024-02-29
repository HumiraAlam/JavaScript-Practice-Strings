/* Capitalize the First Letter of Each Word in a String
Given a string str, return a new string where the first letter of each word is capitalized.

Input: str = "hello world"
Output: "Hello World"
*/
var str = "hello world";
var spaceIndex=str.indexOf(" ");
var letterAferSpace= str[spaceIndex+1];



var newStr= letterAferSpace.toUpperCase();

console.log(newStr);