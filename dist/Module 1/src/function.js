"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// object->>function ->> its called method
const User = {
    firstname: "showrov",
    balance: 0,
    addBalance(balance) {
        return `my balance is ${this.balance + balance}`;
    }
};
// array function
const arr = [2, 3, 4];
const newArr = arr.map((elem) => elem * elem);
