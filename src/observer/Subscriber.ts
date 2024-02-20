import { SubscriberInterface } from "./SubscriberInterface";

export class Subscriber implements SubscriberInterface{
    name: string
    constructor(name: string){
        this.name=name
    }
    update(data: any): void {
        console.log(this.name +' received ==> '+ data)
    }
    
}