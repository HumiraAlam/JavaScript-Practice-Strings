/*
14. Check If a String Is a Valid URL
Given a string str, return true if str is a valid URL, otherwise return false.
Input: str = "http://www.example.com"
Output: true
*/

let urlStr = "http://www.example.com"
let regex= /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

let isValidate=regex.test(urlStr);
console.log(isValidate)