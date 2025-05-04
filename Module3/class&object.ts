
{

    // class is a blueprint of an object

    class Animal {
        // properties

         name: string;
         age: string;

            // can use parameter properties in constructor for that no need to specify properties and this. in constructor. use public or private
         constructor(name:string, age:string){
            this.name = name;
            this.age = age
         }

         //methods/function to call the properties

         profile(){
            console.log(`${this.name} animal age is ${this.age}`);
            
         }
    }

    // object is an instance of class

    const cat = new Animal("persian", "2")
    cat.profile() // call the method by object
}