/*Remove Duplicate Characters From a String
Given a string str, return a new string that has all duplicate characters removed.
Input: str = "hello"
Output: "helo"
*/

let str="hello";
let newStr=new Set(str);
var mystr= [...newStr].join('')
//another method below
// var mystr = Array.from(newStr).join('')
console.log(mystr)