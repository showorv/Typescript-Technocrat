//object

type Student = {
    firstName: string;
    middleName?: string;
    contactNo?: number
}

const student1: Student = {
    firstName: "showrov",
    contactNo: 123455
}
const student2: Student = {
    firstName: "showrov",
    middleName: "hello"
}


type Username = string
type IsAdmin = boolean

const username: Username = "hel"
const isAdmins: IsAdmin= true


// in function

type Add = (num1: number, num2: number)=> number

const adde: Add = (num1,num2)=> num1+num2
