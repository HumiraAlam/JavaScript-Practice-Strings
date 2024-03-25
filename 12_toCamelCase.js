/*Convert a String to camelCase
Given a string str, return a new string where spaces are replaced by camel case.
Input: str = "hello world"
Output: "helloWorld"
*/

var str = "hello world";
var splitedStr= str.split(" ");
var newStr="";
for(i=0;i<splitedStr.length;i++){
    newStr+= splitedStr[i][0].toUpperCase()+splitedStr[i].substring(1);
}
console.log(newStr);