/*Count the Number of Vowels in a Given String
Given a string str, return the number of vowels in the string.

Input: str = "Hello World"
Output: 3*/

var str="Hello World";
var vowels=["a","e","i","o","u"];
count=0;

for(i=0;i<str.length;i++){
    for(j=0; j<vowels.length;j++){
        if(str[i]==vowels[j]){
            count++;
            
        }
    }
}
console.log(count);

