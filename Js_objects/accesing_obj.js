//In Js we can iterate over object using :

//1.For loop -

let obj={
bike:"gt",
cc:650,
bhp:46.7,
type:"cafe racer",
};

for(let keys in obj){
console.log(keys);//prints only keys
}

console.log("\n");
//prints both keys and values
for(let keys in obj){
    console.log(keys, obj[keys]);   
}

console.log("\n");
//we can access values of obj and print them together :

let {bike,type}=obj;
console.log(bike,type);
