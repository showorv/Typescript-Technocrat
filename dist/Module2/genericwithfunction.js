"use strict";
{
    // function with generic
    // Array of function
    const funcwitharr = (param) => {
        return [param];
    };
    const funcwitharrGeneric = (param) => {
        return [param];
    };
    const result1 = funcwitharr("Ban");
    const result2 = funcwitharrGeneric("ban");
    const result3 = funcwitharrGeneric({ name: "showorv", roll: 12 });
    // console.log(result3);
    // function with tuple
    const funcwithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res4 = funcwithTuple("hello", 234);
    // console.log(res4);
    const addCourseToStudent = (student) => {
        const course = "web dev";
        return Object.assign(Object.assign({}, student), { course });
    };
    const res5 = addCourseToStudent({ name: "shpwrv", devType: "junior" });
    console.log(res5);
}
