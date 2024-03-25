/* Capitalize the First Letter of Each Word in a String
Given a string str, return a new string where the first letter of each word is capitalized.

Input: str = "hello world"
Output: "Hello World"
*/
var str = "hello world";

var splited=str.split(' ');
console.log(splited)
var newstr="";
for(i=0;i<splited.length;i++){
    newstr+=splited[i][0].toUpperCase()+splited[i].substring(1)+" "
}
console.log(newstr)
