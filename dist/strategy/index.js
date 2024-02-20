"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Strategy {
    constructor(amount) {
        this.amount = amount;
    }
    getMode() {
        return this.mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    pay() {
        if (this.mode) {
            this.mode.pay(this.amount);
        }
        else {
            console.log('choose a mode of payment');
        }
    }
}
exports.default = Strategy;
//# sourceMappingURL=index.js.map