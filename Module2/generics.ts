{
    //

    // generic write reuseable and flexible function and classes without losing type safety


    //! generic with type
    // type generic = Array<number>

    //! reusable
    type generic<T> = Array<T>

    // const rollnumber: number[] = [1,2,3,4]

    // const rollnumber: Array<number> = [1,2,3,4]

    // const rollnumber: generic = [1,2,3,4]

    const rollnumber: generic<number> = [1,2,3,4]
    const user: generic<string> = ['w','b']


    // array of object

    type Obj={
        name: string;
        roll: number
    }
    const users:generic<Obj> =[
        {
            name: "showrov",
            roll: 23
        },
        {
            name: "yousuf",
            roll: 23
        },
    ]

    // generic in tuple

    type genericTuple<x,y> = [x,y]
    // const generic: [string, string] = ['x','y']

    const generic: genericTuple<string,string> = ['x','x']



     //! generic with interface

     interface Developer<T, X=null> {
        name: string;
        computer:{
            name:string;
            model:string;
            release: number
        },
        smartWatch: T; // reuseable
        bike?: X // if not then default null
     }

type Watch = {
    name: string;
    model: string
}
     const poordev: Developer<Watch> = {
        name:"shw",
        computer:{
            name: "ausus",
            model:"23-ret",
            release:2010
        },
        smartWatch:{
            name:"samsung",
            model:"xy"
        }
     }
    //

}