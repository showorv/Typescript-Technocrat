{

    // A class can inherit from another class using extends

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
    }

    const student = new Student ("showrov", 20, "dhaka")
    student.getSleep(4)

    class Teacher extends Parent {
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
            super(name,age,address);
            this.designation = designation;
        }

        getClass(classTime: number){
            console.log(`${this.name} take class for ${classTime} hr`);
        }
    }
    
    const teacher = new Teacher ("yousuf", 40, "dhaka","lecturer")
    teacher.getSleep(4)
    teacher.getClass(2)




}