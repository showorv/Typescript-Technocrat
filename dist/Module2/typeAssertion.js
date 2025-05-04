"use strict";
{
    //
    let anything;
    anything = "hello";
    anything; // here we declared string and for as ts belived us
    // for function
    const kgtogm = (value) => {
        if (typeof value === "string") {
            const convert = parseFloat(value) * 1000;
            return `convert string to number and return string ${convert}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgtogm(1000); // we declare the return type
    const result2 = kgtogm("100");
    console.log(result1, result2);
    //
}
