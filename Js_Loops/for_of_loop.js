//FOR...OF LOOP :  for...of loop helps to iterate a loop or statement  over iterable objects like -
// ARRAYS,STRINGS,OBJECTS.

/* 
syntax : 

for(variable of  iterable){
statement//
}

*/
//eg- 

//  1.Array ~ 
let arr=[10,'h',5.5];
for(let element of arr){
  console.log(element);
}

console.log("\n");
// 2.String ~
let str="Rajat";
for(let char of str){
    console.log(char);
}

//3.Object ~
let obj={
    name:"Rajat",
    batch:9,
    cgpa:9.9,
}

for(let struct of obj){
console.log(struct,":",obj[struct]);
}