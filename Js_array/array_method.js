//Different arrays method/Opertion that are avilable :

//1.Adding elements to array using push() command.
//eg-
let arr=[10,30,40,50,60,3.4,"Strike"];
console.log(arr);
arr.push(90);
arr.push("Negi");
console.log(arr);

//2.Deleting last Element array using pop() command.
arr.pop();
console.log(arr);//removes "negi" from end.

//3.Inserting and removing element at 0 index.

//Inserting
arr.unshift(15);
console.log(arr);

//Removing 
arr.shift(15);
console.log(arr);

//4.Slicing Array:

/* 
syntax:
arr.slice(start,end);
*/
const arr2=[10,20,30,40,50,60,70,80];
console.log(arr2.slice(1,3));

//5.trim out the array: 
/* 
syntax: 
arr.splice(start,end);
*/
const arr3=[10,20,30,40,50,60,70,80];
console.log(arr3.splice(1,3));

//6.Merging array:

let array=['a','b','c'];
let array2=[1,2,3,4];
const array3=array.concat(array2); 
console.log(array3);
