//FOR..IN LOOP : The for-in loop iterates over the enumerable keys of an object.
/* 
syntax: 
for(variable in iterable){
statement//
}
*/
//eg- 
let bike={
   name:"Geurilla",
   cc:450,
   bhp:39.47,
}
for(let obj in bike){
    console.log(obj,":",bike[obj]);
    
}