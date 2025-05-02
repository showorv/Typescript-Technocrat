"use strict";
{ // ternary, optional chainning, nullish coalescing
    var age = 8;
    // if(age >=18){
    //     console.log("adult");
    // }else{
    //     console.log("non");
    // }
    // ternary
    var isAdult = age >= 18 ? "adult" : "non";
    console.log(isAdult);
    // nullish use for null and undefine
    var isAuth = undefined;
    var result1 = isAuth !== null && isAuth !== void 0 ? isAuth : 'guest';
    var result2 = isAuth ? isAuth : "guest";
    console.log({ result1: result1 }, { result2: result2 });
    // never, unknown, nullable type
    // nullable
    var searchName = function (value) {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("no");
        }
    };
    searchName(null);
    // unknown type like typeof
    var hello = function (value) {
        if (typeof value === "number") {
            var convertspeed = (value * 1000) / 3600;
            console.log(convertspeed);
        }
        if (typeof value === "string") {
            var _a = value.split(" "), values = _a[0], unit = _a[1]; // {1000}, {kmhr}
            var convertspeed = (parseFloat(values) * 1000) / 3600; // parsefloat cause 1000 were in object, so convert to number
            console.log(convertspeed);
        }
    };
    hello("1000kmhr");
}
