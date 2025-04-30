{
    // union and intersection types

    // union type like or operator.

    type Developer = "fakibaz" | "junior"

    const newDev : Developer = "junior"


    // in object

    type Details = {
        name: string,
        gender: "male" | "female"
    }

    const details1: Details = {
        name:"shwo",
        gender: "female"
    }



    // intersection type like and operator

    type Frontend = {
        skills: string[]
        designation1: "Fronted"
    }
    type Backend = {
        skills: string[]
        designation2: "backend"
    }

    type Fullstack = Frontend & Backend

    const developer: Fullstack = {
        skills: ["nodes", "html"],
        designation1: "Fronted",
        designation2: "backend"
    }

    //
}