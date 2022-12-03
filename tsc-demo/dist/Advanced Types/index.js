"use strict";
let num = 123456789;
let mySize = 12 /* Sizes.Large */;
console.log(mySize);
let size = 'inch';
console.log(size);
// 6-Nullable Types
function greet(name) {
    console.log(name);
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
/** if the given value is null or undefined we can use Optional Chanining */
// 8- The Nullish Coaelscing Operator
// ?? , it means, if speed is not falsy value then speed is 30
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 29
    }
];
//4
// let user = getUserss();
// console.log(user?.address?.street);
// let x = foo ??  bar();
//5
let value = 'a';
if (typeof value === 'string')
    console.log(value.toUpperCase);
//# sourceMappingURL=index.js.map