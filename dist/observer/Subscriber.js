"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(this.name + ' received ==> ' + data);
    }
}
exports.Subscriber = Subscriber;
//# sourceMappingURL=Subscriber.js.map