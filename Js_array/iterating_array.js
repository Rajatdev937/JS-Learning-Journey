//In JS  we can iterate over a array using -

//1.for loop :

let arr=[2,4,5,6,7,"hi",true];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("\n");

//2.for..of loop :

for(elements of arr){
    console.log(elements);   
}