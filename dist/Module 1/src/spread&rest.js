"use strict";
// spread operator
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var bros1 = ["h", "e"];
var bros2 = ["f", "e"];
bros1.push.apply(bros1, bros2); // return a number of length //["h", "e", "f", "e"] =>>4
var newbro = __spreadArray(__spreadArray([], bros1, true), bros2, true); //["h", "e", "f", "e"]
var obj1 = {
    typescript: "showrov",
    react: "yousuf"
};
var obj2 = {
    javascript: "showrov",
    react: "yousuf"
};
var objectlist = __assign(__assign({}, obj1), obj2);
// rest operator using in function parameter to call dynamically
var greetfrnds = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (firend) {
        console.log("hello ".concat(firend));
    });
};
greetfrnds("showrov", "yousuf");
