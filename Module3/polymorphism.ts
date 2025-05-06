{

    class Person{
        getSleep(){
            console.log("sleep for 8 hours");
            
        }
    }

    class Student extends Person{
        getSleep(){
            console.log("sleep for 7 hours");
            
        }
    }
    class Developers extends Person{
        getSleep(){
            console.log("sleep for 6 hours");
            
        }
    }

    const getall = (param: Person)=>{
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developers()

   getall(person1)
   getall(person2)
   getall(person3) // same method but overriding .
    


}