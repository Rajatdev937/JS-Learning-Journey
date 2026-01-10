//IN JS we can create our own date and time using the format (yy,mm,dd,hh,mm,ss,ms).
//eg-
let now= new Date(2025,9,20,5,30,33,526);
console.log(now);

console.log("\n");

const ms = Date.now();///returns date in milliseconds.
console.log(ms);
const dates= new Date(1768029178871);//converts milliseconds to normal date format
console.log(dates);
console.log(dates.toLocaleString());

