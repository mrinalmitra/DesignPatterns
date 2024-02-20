import {PaymentStrategy} from './interface';

export class CreditCard implements PaymentStrategy{

    pay(amount: number): void {
        console.log(`credit card payment received for ${amount}`)
    }
}