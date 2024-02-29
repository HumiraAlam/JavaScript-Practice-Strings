/*Convert a String to camelCase
Given a string str, return a new string where spaces are replaced by camel case.
Input: str = "hello world"
Output: "helloWorld"
*/

var str = "hello world";
var spaceIndex= str.indexOf(" ");
var letterAfterSpace= str[spaceIndex+1];
console.log(letterAfterSpace);
//console.log(newStr);