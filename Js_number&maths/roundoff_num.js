//FLOAT-NUMBER: we can roundoff a float or a decimal number upto certain places using toFixed() function.
/*
syntax: 
number.toFixed(digit)
*/
//eg- 

console.log(2.343.toFixed(2));

//storing in variable then : 
var num=34.4533;
console.log(num.toFixed(1));

//with zero:

var n=5;
console.log(n.toFixed(2));

//NOTE: the  toFixed function always returns a string.
//eg-
var x=3.453;
var y=x.toFixed(1);
console.log(y,typeof y);
