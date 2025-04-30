
// spread operator

const bros1: string[] = ["h","e"]
const bros2: string[] = ["f","e"]

bros1.push(...bros2) // return a number of length //["h", "e", "f", "e"] =>>4

const newbro: string[] = [...bros1, ...bros2]  //["h", "e", "f", "e"]

const obj1 = {
    typescript: "showrov",
    react:"yousuf"
}
const obj2 = {
    javascript: "showrov",
    react:"yousuf"
}
const objectlist = {
    ...obj1,
    ...obj2
}


// rest operator using in function parameter to call dynamically

const greetfrnds = (...friends: string[])=>{
    friends.forEach((firend:string)=>{
        console.log(
            `hello ${firend}`
        );
        
    })
}
greetfrnds("showrov", "yousuf")

