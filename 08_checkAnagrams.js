/*
Check If Two Strings Are Anagrams
Given two strings str1 and str2, return true if str1 is an anagram of str2, otherwise return false.
Input: str1 = "listen", str2 = "silent"
Output: true
*/

let str1 = "listen";
let str2 = "silentz";

let result= true;

for(i=0;i<str2.length;i++){
    if(!str1.includes(str2[i])){
        result=false;
    }
       
}

console.log(result)
