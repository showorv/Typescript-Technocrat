// destructuring

// object

const details = {
    id: 34,
    user:{
        firstName: "showrov",
        middleName: "yousuf"
    },
    contactNo: 12345
}


const {contactNo, user:{middleName}} = details  // middleName: midname =>> name alias



// array

const myfriends = ['h','b','j','w','k']

const [,,bestfriend, ...rest ] = myfriends // ,->h ,->b, bestfriend -> j, rest-> w,k