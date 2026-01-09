//IN JS  new keyword in  is used to create objects from constructor functions.
//eg- 
let x = new Number(10);
console.log(typeof x); 
console.log(x);

///COMPARING OBJ VS NUMBER:
let a = 10;
let b = new Number(10);
console.log(a===b); // num != obj

// new can cause bugs, memory overhead, comparison issues, and is unnecessary for primitives due to auto-boxing.

