{

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor ( id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // public addDeposit(amount:number){
        //     this._balance = this._balance + amount; // call with function. but same jinish set er maddhome declare kora jay ja return korbe property hishebe.function na
        // }

        // public getBalance(){
        //     return this._balance; // same with get
        // }

        // setter

        set addDeposit(amount:number){
            this._balance = this._balance + amount
        }
        //getter

        get balance (){
            return this._balance;
        }
    }

    const deposit = new BankAccount (112,"mr.showrov", 20)
    // deposit.addDeposit(20)
    deposit.addDeposit = 20; // like property but work as function
    // const newbalance = deposit.getBalance()
    const newbalance = deposit.balance;
    console.log(newbalance);
    
}