/*FOR LOOP - For loop repeats the block of code a specific number of times. 
 It contains intialization,condition, and increment & decrement in one line.

 Syntax : 

 for(intialization:condition:inc/dec){
      statement//
 }


 */
//eg- 
for(let i=1 ; i<=3 ; i++){
    console.log("Hello world" , i );   
}
console.log("\n");

//Printing array : 

let arr=[10,20,40,"a","c",6.4];
for( let i=0 ; i<arr.length ;i++){
    console.log(arr[i]);
}