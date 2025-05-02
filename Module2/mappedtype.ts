{
// mapped types like map in js. work as looping.
    type  AreaNum = {
        height: number;
        width: number;
    }

    type AreaString = {
        [key in keyof AreaNum] : string
    }

    // look up type

    type height = AreaNum["height"]

    type AreaStringGeneric<T>={
        [key in keyof T]: T[key] // here key looping T["height"] then T["width"]
    }

    const area: AreaStringGeneric<{height: number; width:number}> ={
        height:100,
        width:100
    }
}