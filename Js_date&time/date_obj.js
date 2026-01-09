//Date and time - The JavaScript Date object represents a specific moment in time
//Date object using the new Date() constructor, which allows you to specify either the current date and time or a particular date.

let now= new Date();
console.log(now);//gives the utc time


console.log(now.toString());//gives the utc+5:30 (India time)
console.log(now.toISOString());//gives the utc time
console.log(now.toLocaleString());
