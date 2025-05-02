{
    // constraints restricts what types can be passed. these type must be passed.
    
    const addCourseToStudent = <T extends {id:number; name:string;email:string }>(student: T )=>{
        const course = "web dev";

        return {
             ...student,
            course}
        
    }

   
    const student1= addCourseToStudent({id:23, name:"shpwrv",email:"shwk", devType:"junior"})



    // generic constraints using key of

    type Vehicle = {
        bike: string;
        ship: string
    }

   type owner= "bike" | "ship" ; //manually

   type Owner2 = keyof Vehicle; 


   const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{
     return obj[key]
   }

   const user = {
    name:"shpw",
    age: 24,
    address: "dsnsdf"
   }

   const res = getPropertyValue(user, "name")
   console.log(res);
   
    
    
}