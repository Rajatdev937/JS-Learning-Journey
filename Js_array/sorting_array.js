//Sorting an Array :

//1. DEFAULT SORTING - 

// Note:JavaScript internally:
// Converts elements to strings
// Compares them character by character
// Uses their Unicode value to decide order 

let cars=['porsche','BMW','Lambo','Sierra','supra','Range Rover','Defender','Hector'];

//I.Ascending order :

console.log(cars.sort());//sort the elements by ascending order

//II.Desending oder :

console.log(cars.reverse());//sort the elements in decending order

//eg- 
let array8=[102,"rajat",true,20,4.5];//converts to string first ['102','rajat','true','20','4.5']
console.log(array8.sort());    

//2. COUSTOM SORTING -we can sort the array having numbers by using a comparsion function.

/* 
syntax-
arr.sort((a,b)=> a-b);
*/
//eg-
let num=[10,30,22,5,8,103,3,19];
console.log(num.sort((a,b)=> a-b));
