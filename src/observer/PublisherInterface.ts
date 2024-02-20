import { SubscriberInterface } from "./SubscriberInterface";

export interface PublisherInterface{
    addSubscriber(subscriber: SubscriberInterface): void;
    removeSubscriber(subscriber: SubscriberInterface): void;
    notifySubscribers(): void;
}