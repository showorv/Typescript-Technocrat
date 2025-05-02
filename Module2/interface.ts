{
    // interface is like type alias but interface only in object

    // object ->> object,array,function


    type User1 ={
        name: string;
        roll: number
    }

    interface User2 {
        name: string;
        roll: number
    }

    // to add in type use intersection
    type user1withrole = User1 & {role: string}

    // to add in interface use extends
    interface user2withrole extends User2 {
        role: string
    }

    // can convert type into interface using extends

    interface typetointerface extends User1{
        role: string
    }


    const user1: user1withrole = {
        name: "shpwrpv",
        roll: 1234,
        role: "student"
    }
    const user12: user2withrole = {
        name: "shpwrpv",
        roll: 1234,
        role: "studnemt"
    }



    //declare inteface in array

   type Roll1 = number[]

   interface Roll2 {
    [index: number] : number
   }
   interface Roll3 {
    [index: number] : string
   }

   const roll1: Roll1 = [1,23,4]

   const roll2: Roll2 = [1,2,3,4]

   const roll3: Roll3= ['a','n']


   // function

   type Add1 = (num1: number, num2: number) => number

   interface Add2{
    (num1: number, num2:number) :number
   }

   const add: Add2 = (num1,num2) => num1+num2;
    //

}