/*Check If a String Contains Only Digits

Given a string str, return true if str contains only digits, otherwise return false.
    Input: str = "12345"
    Output: true
*/

var str = "12345";

const onlyContainsNumbers = (str) => /^\d+$/.test(str);
console.log(onlyContainsNumbers("1h345")); // true
