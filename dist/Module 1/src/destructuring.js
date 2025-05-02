"use strict";
// destructuring
// object
var details = {
    id: 34,
    user: {
        firstName: "showrov",
        middleName: "yousuf"
    },
    contactNo: 12345
};
var contactNo = details.contactNo, middleName = details.user.middleName; // middleName: midname =>> name alias
// array
var myfriends = ['h', 'b', 'j', 'w', 'k'];
var bestfriend = myfriends[2], rest = myfriends.slice(3); // ,->h ,->b, bestfriend -> j, rest-> w,k
