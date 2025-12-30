//To convert one datatype to another : 

let a="10";
console.log(typeof a);
let b=Number(a);
console.log(b);

console.log("\n");

let c=10;
let d=String(c);
console.log(c);
 
//Bool Conversion
let t=true;
let f=false;
console.log(Number(t));//true to 1
console.log(Number(f));//falss to 0
console.log("\n");

//Null & Undefined conversion
console.log(Number(null));//converts null to 0
console.log(Number(undefined));//gives NAN

console.log("\n");

//Conversion to Bool
console.log(Boolean("hello"));//true for a string
console.log(Boolean(""));//return false for empty string
console.log(Boolean(null));
console.log(Boolean(undefined));


