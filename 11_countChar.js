/*
11.
 Count the Number of Occurrences of a Specific Character in a String
Given a string str and a specific character ch, return the number of times ch occurs in str.
Input: str = "hello", ch = "l"
Output: 2
*/

let str = "hello";
let char= "l";
let count=0;
for(i=0;i<str.length;i++){
    if(str[i]==char){
        count++
    }

}
console.log(count)
