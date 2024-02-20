import { PublisherInterface } from "./PublisherInterface";
import { SubscriberInterface } from "./SubscriberInterface";

export class Publisher implements PublisherInterface{
    private subscribers: SubscriberInterface[] =[]
    private message: string=''

    addSubscriber(subscriber: SubscriberInterface): void {
        this.subscribers.push(subscriber)
    }
    removeSubscriber(subscriber: SubscriberInterface): void {
        this.subscribers = this.subscribers.filter((s)=>s!==subscriber)
    }
    notifySubscribers(): void {
        this.subscribers.forEach(sub=>{
            sub.update(this.message)
        })
    }

    setMessage(msg: string): void{
        this.message = msg;
        this.notifySubscribers()
    }

}