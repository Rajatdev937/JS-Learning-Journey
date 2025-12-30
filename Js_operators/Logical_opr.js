//LOGICAL OPERATORS : Used to perform logical operations on a value and return eiter true or false.            

//1.Logical AND(&&) - checks if both the condition is true. If any of the statement gets false then result will get false.
//ex-

var a=5;
var b=10;
let cond1=a<b;//true
let cond2= a===5;//true
console.log(cond1 && cond2);

var c=5;
var d=10;
let cond3=c!==d;//true
let cond4=c>5;//false
console.log(cond3 && cond4);


console.log("\n");

//2.Logical OR (||) : checks whether at least one of the operands is true. 
//If either is true, the result is true. If both operands are false, the result is false.

//ex- 

var x="10";
var y=10;

let cond5=x==y;//true
let cond6=x===y;//false

console.log(cond5 || cond6);

let cond7= x==Number(x);//False
let cond8= y==String(y);//False

console.log(cond7 || cond8);

console.log("\n");

//3.Logical NOT (!): The logical NOT (!) operator takes truth to falsity and vice versa.
//ex-
console.log(5!=4);
console.log(3!=3);
console.log(!(5<0));
console.log(!(2>=0 || -2<=0));
console.log(!(1==true));
