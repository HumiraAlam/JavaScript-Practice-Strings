/*
Determine If a String Is a Palindrome
Given a string str, return true if str is a palindrome, otherwise return false.

Input: str = "racecar"
Output: true
*/

var str="racecar";
var newstr=""
var i;
for(i=str.length-1;i>=0;i--){
    newstr+=str[i];  

}
//console.log(newstr);
if(newstr===str){
    console.log("True")
}else{
    console.log("False")
}
/*other way to reverse
newstr= str.split("").reverse().join("")
console.log(newstr)
*/


