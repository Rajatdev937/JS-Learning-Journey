/* IN JAVASCRIPT WE DONT NEED TO DELARE THE DATATYPE OF THE VARIBALE UNLIKE OTHER LANGUAGES LIKE C , C++ .
JS  SELFDECIDES THE DATATYPES OF VARIABLE */ 

//Primitive datatypes are those that holds only single values and are generally immutable

//1.string - squenece of character enclosed within ('') or ("")
//ex - 

let a= 'Rajat';
let b = "Negi";
console.log(a,b);  
console.log(typeof a);
//2.Number - contains numeric values (int & float )
//ex - 

let c=10;
let d=11.23;
console.log(c+d);
console.log(typeof c);
console.log(typeof d);

//3.Boolean - contains logical values i.e  (true or false) 
//ex - 

let login=true;
let logout=false;
console.log(login,logout);
console.log(typeof login);
//4.Null - contain intentionally absent values.
//ex- 

let z=null;
console.log(z);
console.log(typeof z);
//5.Undefined - variables declared but not assigned .

let y=undefined;
console.log(y);
console.log(typeof y);

//6.Bigint  - Contains very big integer denoted by  'n' at last of number.

let num=234563234565432345632n;
console.log(num);
console.log(typeof num)

//7.Symbol - used to create unique values.

// const id1=symbol("id");
// const id2=symbol("id");
// console.log(id1==id2);
