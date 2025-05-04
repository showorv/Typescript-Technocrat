{
    // type guard is two type ->>> typeof and typein

    // type of

    type easy = string | number;

    const add = (num1: easy , num2: easy): easy => {
        if(typeof num1 === "number" && typeof num2 === "number"){
            return num1 + num2 ;
        }else{
            return num1.toString() + num2.toString();  // in ts number and string cant be add . they will concat
        }
    }

    const result = add(2,"3");
    console.log(result);

    // type in ->> in guard check unique key to define the user or something else

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin"
    }

    type User = NormalUser | AdminUser
    const getUser = ( user: User)=>{
        if("role" in user){
            
            console.log(`name is ${user.name} and role is ${user.role}`);
            
        }else{
            console.log(`name is ${user.name} and normal user`);
            
        }
    }

    const normal: NormalUser = {
        name: "showorv"
    }
    const admin: AdminUser = {
        name: "yousuf",
        role:"admin"
    }

    getUser(admin)


    

    // instance of

    class Parent{
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;

        }

        getSleep( sleeptime: number){
            console.log(`${this.name} sleep for ${sleeptime} hr`);
            
        }
    }

    class Student extends Parent{
        constructor( name: string, age: number, address: string){
            super(name,age,address); // super call the parent class constructor properties 
        }

        getStudent(){
            console.log("i'm a student");
            
        }
    }


    class Teacher extends Parent {
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
            super(name,age,address);
            this.designation = designation;
        }

        getTeacher(){
            console.log("i am a teacher");
            
        }
    }


    const getUsers = (user: Parent)=>{
        if(user instanceof Student){
            return user.getStudent()
        }else if(user instanceof Teacher){
            return user.getTeacher()
        }else{
            return user.getSleep(4)
        }
    }

    const student = new Student ("showrov", 20, "dhaka")
    const teacher = new Teacher ("yousuf", 40, "dhaka","lecturer")

    getUsers(student)


    
}