//In JS we can perform different actions  on strings 

//1.Uppercase/Lowercase:

let str="HeY tHerE !";
console.log(str.toUpperCase());//returns all character to uppercase
console.log(str.toLowerCase());//returns all character to lowercase

console.log("\n");

//2.Substring(part within strings)  Operations:

//I.Exracting the part of string

/*
syntax: 
str.substring(start,finish)
*/
let str2="Software developer";
console.log(str2.substring(0,8));
console.log(str2.substring(2,6));

//II. Finding Substring.

/*
Syntax:
str.indexof(' ');
*/

let str3="rajat negi";
console.log(str3.indexOf("j"));
console.log(str3.indexOf("taj"));//returns -1 cz the sqeunce isnt correct
console.log(str3.indexOf("Negi"));//returns -1 cz N is capital

//III.last index: returns the index last characters in string in case it repeats multiple times.
/*
syntax:
console.log(lastIndexof(''));
*/ 
let str4='hello world hello';
console.log(str4.lastIndexOf("hello"));

//IV.Finding if a substring exist within a given string. 
/* 
syntax:
console.log(includes())
*/
let str5="college";
console.log(str5.includes('leg'));//returns a bollean value true.
console.log(str5.includes('age'));//returns a bollean value false.

//V. Slicing a string :
/*
syntax:
str.slice(start,end);
*/
//note! -  The end index does'nt counts.
let str6='Web developement';
console.log(str6.slice(0,3));

//IN case if only starting index is provided then from that upto the last index of whole string will be cut off.
console.log(str6.slice(3));//from d to v ;

//Negative index slicing:

console.log(str6.slice(-12));//returns last 12 characters of the string.

//VI. Replacing subtrings in js
/*
syntax: 
str.replace(original,replacement);
*/

let str7="Hello coders";
console.log(str7.replace('o','hi'));
console.log(str7.replaceAll('o','hi'));

//VII.white - space  trimmer: trim() cutoffs the unnecessary white space in a string.

/* 
syntax:
str.trim()
*/
let str8="  ASUS ";
console.log(str8.trim());//cut the unnecessary white spaces.
