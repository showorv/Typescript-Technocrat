{

    // static use for not change the memory. it define properties method belong to the class itself not instance of the class

    class Counter{
        static count:number = 0;

        static increment (){ 
            return Counter.count = Counter.count+ 1;
        }

        decrement(){
            return Counter.count = Counter.count- 1;
        }
    }
  // if method is static then call with class not instance
   console.log( Counter.increment());
   console.log( Counter.increment());
  // if method not static thenn call with instance
    const instance = new Counter()
    console.log(  instance.decrement());
   
}