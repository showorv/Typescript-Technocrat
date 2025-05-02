{

    const createpromise =(): Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data: string = "something"
            if(data){
              resolve(data)
            }else{
                reject("failed")
            }
        })
    }

    const showdata = async(): Promise<string>=>{
        const data: string = await createpromise()
    //    console.log(data);
    return data
       
    }

    showdata()
}