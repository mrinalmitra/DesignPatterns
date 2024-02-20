import {PaymentStrategy} from './interface';

export class Cash implements PaymentStrategy{

    pay(amount: number): void {
        console.log(`Cash payment received for ${amount}`)
    }
}