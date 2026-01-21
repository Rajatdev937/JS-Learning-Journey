//Nesting of array mean when one is array is exist another array.

let array=[10,20,30,40];
let array2=[3,4,5,6];
const array3=[array,array2];//array inside another array
console.log(array3);

//spread operator helps to spread individual array element. 

const array4=[...array,...array2];//mixed diff arrays into one.
console.log(array4);

//Inter-nested arrays :
let arr=[55,72,[3,5,9,[7,8]],23,42];

//Accessing elements of nested array:
console.log(arr[2]);
console.log(arr[2][2]);//7
console.log(arr[2][3][0]);//7

//Flatting a nested array :
/* 
syntax:
arr.flat(layer);
*/
//eg-
let arr3=[4,8,[1,5,8,[9,10,[33,42]],54],21,6]
console.log(arr3.flat());//clears only one layer
console.log(arr3.flat(2));//clears two layer
//If nesting is unknown:
console.log(arr3.flat(Infinity));//clears all