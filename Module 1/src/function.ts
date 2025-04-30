// normal function

function add (num1: number, num2: number): number {
    return num1+num2
}

add (2,3)

// arrow function

const addArrow = (num1: number, num2: number): number => num1+num2


// object->>function ->> its called method

const User = {
    firstname: "showrov",
    balance: 0,
    addBalance( balance: number): string {
        return `my balance is ${this.balance+balance}`
    }
}

// array function

const arr: number[] = [2,3,4]
const newArr:number[] = arr.map((elem:number):number => elem*elem)