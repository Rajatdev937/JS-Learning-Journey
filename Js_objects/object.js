//IN JS userects are the dynamic data structure that stores the related data in a key-value pair called property
//where each  key uniquely determines its value.

let user={
    name:"rajat",
    class:19,
    sap_id:22841,
    email_id:"007negirajat@gmail.com",
};
console.log(user);

console.log("\n");

//to access the particular key:
console.log(user.name);
console.log(user.sap_id);
console.log(user.email_id);

//to print keys and values seprately
console.log(Object.keys(user));
console.log(Object.values(user));


