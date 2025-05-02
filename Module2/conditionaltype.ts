{
    type a = null;
    type b = undefined;

    type x = a extends null ? true : false

    type y = a extends number ? true : b extends undefined ? true : false


    type Sheikh = {
        bike: string;
        car: string
    }


    type checkVehicle<T> = T extends keyof Sheikh ? true : false

    type hasPlace = checkVehicle<"bike">
}