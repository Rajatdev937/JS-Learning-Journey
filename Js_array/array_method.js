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

//7.Nesting of array:

const array4=[array,array2];//array inside another array
console.log(array4);


//8.spread operator  helps to spread individual array element. 

const array5=[...array,...array2];//mixed diff arrays into one.
console.log(array5);

//9.Changing array to strings.

const anime=["goku","jinwoo","aizen","Yawach","Itachi"];
console.log(anime.toString());

//10.Searching Array:

//I.Finding the  index :

const alpha=['u','v','x','y','z','u'];
console.log(alpha.indexOf('u'));//returns index
console.log(alpha.indexOf('a'));//element doesnt exist so returns -1

//II.Returning the last occuring index of an element :

console.log(alpha.lastIndexOf('u'));

//III.checking if an element exist within an array.

console.log(alpha.includes("x"));//returns true if exist
console.log(alpha.includes("z"));//returns false if doesnt exists


//11.Sorting an Array :

let cars=['porsche','BMW','Lambo','Sierra','supra','Range Rover','Defender','Hector'];

//I.Ascending order :

console.log(cars.sort());//sort the elements by ascending order

//II.Desending oder :

console.log(cars.reverse());//sort the elements in decending order

/*Note:JavaScript internally:
Converts elements to strings
Compares them character by character
Uses their Unicode value to decide order */

//eg- 
let array8=[102,"rajat",true,20,4.5];
console.log(array8.sort());