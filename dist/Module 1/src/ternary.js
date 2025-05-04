"use strict";
{ // ternary, optional chainning, nullish coalescing
    const age = 8;
    // if(age >=18){
    //     console.log("adult");
    // }else{
    //     console.log("non");
    // }
    // ternary
    const isAdult = age >= 18 ? "adult" : "non";
    console.log(isAdult);
    // nullish use for null and undefine
    const isAuth = undefined;
    const result1 = isAuth !== null && isAuth !== void 0 ? isAuth : 'guest';
    const result2 = isAuth ? isAuth : "guest";
    console.log({ result1 }, { result2 });
    // never, unknown, nullable type
    // nullable
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("no");
        }
    };
    searchName(null);
    // unknown type like typeof
    const hello = (value) => {
        if (typeof value === "number") {
            const convertspeed = (value * 1000) / 3600;
            console.log(convertspeed);
        }
        if (typeof value === "string") {
            const [values, unit] = value.split(" "); // {1000}, {kmhr}
            const convertspeed = (parseFloat(values) * 1000) / 3600; // parsefloat cause 1000 were in object, so convert to number
            console.log(convertspeed);
        }
    };
    hello("1000kmhr");
}
