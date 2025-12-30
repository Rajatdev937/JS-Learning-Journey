/*COMPARISION OPERATOR IN JS

Comparison operators are used to compare two values.
They always return a boolean value → true or false.

TYPES of CO :  

==,===,<,>,<=,>=,!=,!==

*/
var a=4;
var b=3;
console.log(a>b);
console.log(a<b);
console.log('\n');
var c=5;
var d=6;
console.log(c<=d);
console.log(c>=d);

console.log("\n");

// == (Double equals to )    vs   === (Triple equals to )

/* 1. The == operator is known as the loose equality operator. 
  it converts the values to the same type before comparing them.*/
//ex- 
let x=50;
let y="50";
console.log(x==y);//only checks the value
console.log(typeof x,"&",typeof y);

/* 2. The === operator is called the strict equality operator. 
It checks for equality without type conversion.
*/
//ex-
let u=50;
let v="50";
console.log(u===v);//datatype arent same
console.log(typeof u ,"&",typeof v);

console.log("\n");





