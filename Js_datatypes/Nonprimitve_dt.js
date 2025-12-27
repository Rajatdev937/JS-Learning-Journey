//Non Primitive Datatypes are those which containes more than one values and are generally immutable

//1.Array - elements of  different data type stored in contigious memory location.
//ex - 
let arr=[3,4,6,6,4];
console.log(arr);
console.log(typeof arr);
//or
let arr2=[2,'hi',7.3,true];
console.log(arr2);

//2.Object - its stores the data in key-value pair.{similar to that of structures}
//ex- 
let obj={
    name:"Rajat",
    sapid:590022841,
    batch:9,
    year:2025,
    cgpa:9.9,
    pass:true,
} 
console.log(obj);
console.log(typeof obj);

//3.functions - Resuable block of code.
function greet(){
    console.log("Hello world");
}
greet();
console.log(typeof greet)
//we can store function within a variable.
let f=function greet(){
    console.log("Hello world");
}
console.log(f);

