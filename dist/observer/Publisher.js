"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor() {
        this.subscribers = [];
        this.message = '';
    }
    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }
    removeSubscriber(subscriber) {
        this.subscribers = this.subscribers.filter((s) => s !== subscriber);
    }
    notifySubscribers() {
        this.subscribers.forEach(sub => {
            sub.update(this.message);
        });
    }
    setMessage(msg) {
        this.message = msg;
        this.notifySubscribers();
    }
}
exports.Publisher = Publisher;
//# sourceMappingURL=Publisher.js.map