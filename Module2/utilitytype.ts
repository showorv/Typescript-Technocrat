{
    // utility type transform or manipulate other type easily

    // pick utility create new types with specific key k from T

    type obj = {
        name:string;
        age:number;
        address?: string
    }

    type pick = Pick<obj, "name"|"age">

    //Omit utility create new types exclude specific key

    type omit = Omit<obj,"address">

    //Required utility makes all property required
    type required = Required<obj>

    // Partial makes all property partial

    type partial = Partial<obj>

    // readonly 

    type readonly= Readonly<obj>


    // Record create a type 

    type recordobj = Record<string,string>
    const record1 = {
        a:"aa",
        n:"bb"
    }

    // for empty
    type emptyobj = Record<string,unknown>
    const emptyobj2 = {
        a:"vvv",
        n:23
    }
}