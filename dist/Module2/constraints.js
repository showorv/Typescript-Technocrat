"use strict";
{
    // constraints restricts what types can be passed. these type must be passed.
    const addCourseToStudent = (student) => {
        const course = "web dev";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 23, name: "shpwrv", email: "shwk", devType: "junior" });
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "shpw",
        age: 24,
        address: "dsnsdf"
    };
    const res = getPropertyValue(user, "name");
    console.log(res);
}
