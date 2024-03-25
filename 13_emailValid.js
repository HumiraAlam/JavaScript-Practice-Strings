/*
13. 
Check If a String Is a Valid Email Address
Given a string str, return true if str is a valid email address, otherwise return false.
Input: str = "example@example.com"
Output: true

*/

let emailStr = "example@example.com";
let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //regex to validate email address

let isValid=regex.test(emailStr);
console.log(isValid)


