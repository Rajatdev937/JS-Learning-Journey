//Generating number randomly from 0-9 : 
/*
for this multiply the random number by 10 to get single value decimal place and now 
floor the decimal number to greates int for single digit.
*/ 
console.log(Math.floor(Math.random()*10));

//For generating upto 0-10 : 
/*
just  add one to first part
*/ 
console.log(Math.floor(Math.random()*10)+1);

//DICE ROLL GAME :
console.log("roll the dice: ");
console.log(Math.floor(Math.random()*6)+1);

//FORMULA FOR RANDOM INT VALUE ~ 

//Console.log(Math.floor(Math.random()*totalnumberofoutcome)+SHIFTS);
//or
//Console.log(Math.floor(Math.random()*max-min+1)+min);

//eg- random values bw 11-15
console.log(Math.floor(Math.random()*(25-15+1))+15);

//GENERARTING 4 DIGIT OTP(1000-9999):

console.log(Math.floor(Math.random()*(9999-1000+1))+1111);