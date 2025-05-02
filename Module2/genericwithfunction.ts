{
    // function with generic

    // Array of function

    const  funcwitharr = (param: string): string[]=>{
        return [param];
    }

    const funcwitharrGeneric = <T>(param: T):T[] =>{
        return [param]
    }

    const result1 = funcwitharr("Ban")
    const result2 = funcwitharrGeneric<string>("ban")
    // console.log(result1,result2);

type User = {
    name: string;
    roll: number
}
    const result3 = funcwitharrGeneric<User>({name:"showorv", roll:12})
    // console.log(result3);


    // function with tuple

    const funcwithTuple = <X,Y>(param1: X, param2: Y): [X,Y]=>{
        return [param1,param2];
    }

    const res4 = funcwithTuple<string,number>("hello", 234)
    // console.log(res4);


    const addCourseToStudent = <T>(student: T):T=>{
        const course = "web dev";
        return { ...student,
            course}
        
    }

    type Student = {
        name:string;
        devType: string
    }

    const res5 = addCourseToStudent<Student>({name:"shpwrv",devType:"junior"})
    console.log(res5);
    
    
}