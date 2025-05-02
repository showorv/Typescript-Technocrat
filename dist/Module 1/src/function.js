"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// object->>function ->> its called method
var User = {
    firstname: "showrov",
    balance: 0,
    addBalance: function (balance) {
        return "my balance is ".concat(this.balance + balance);
    }
};
// array function
var arr = [2, 3, 4];
var newArr = arr.map(function (elem) { return elem * elem; });
