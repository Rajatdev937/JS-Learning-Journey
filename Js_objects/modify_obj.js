let  user={
    Name:"Negi",
    Age:18,
    Amount:3400,
    gender:"male",
}

//1.Adding an object:

user.address="Dehradun";
console.log(user);

//2.updating an object:

user.Amount=5000;
console.log(user);

//3.Deleting a property from obj:

/* 
syntax:
delete obj.property;
*/
delete user.Age;
console.log(user);