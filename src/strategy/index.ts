import { PaymentStrategy } from "./interface";

export default class Strategy{
    private mode: PaymentStrategy;
    private amount: number

    constructor(amount: number){
        this.amount = amount
    }

    getMode(): PaymentStrategy{
        return this.mode
    }

    setMode(mode: PaymentStrategy): void{
        this.mode = mode;
    }

    pay():void{
        if(this.mode){
            this.mode.pay(this.amount)
        }else{
            console.log('choose a mode of payment')
        }
    }
}