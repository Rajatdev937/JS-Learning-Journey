//1.Mutables - those value can be altered again.

//I.Array ~
let arr=[1,2,3,4,5];
console.log("array before:\n",arr);
arr[0]=10;
arr[2]=30;
console.log("array after:\n",arr);


//II.Objects~
let obj={
    name:'Rajat',
    batch:9,
}
console.log("object before:\n",obj);

obj.name="Negi";
obj.batch=19;

console.log("object after:\n",obj); 


//2.Immutable -  thoses values cant be changed.

//I.varibales- 

var n=1;
var n=2;
console.log(n);

//II.Strings-

var a="Javascript";
var a="java";
console.log(a);
