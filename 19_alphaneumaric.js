/*
Check If a String Contains Only Alphanumeric Characters
Given a string str, return true if str contains only alphanumeric characters, otherwise return false.
Input: str = "123abc"
Output: true
to check alphanumeric: /^[A-Za-z]+$/
*/

let str=  "123abc@";

let regex= /^[a-zA-Z0-9]+$/   // regular expression matches a string that consists entirely of alphanumeric characters..
let isAlphanumeric= regex.test(str)

/*another method below
 let isAlphanumeric = str.match(regex)!==null
*/

console.log(isAlphanumeric);

