"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const dev_1 = require("./dev");
const tester_1 = require("./tester");
class Factory {
    create(name, type) {
        switch (type) {
            case 1:
                return new dev_1.Developer(name);
            case 2:
                return new tester_1.Tester(name);
            default:
                throw new Error("Invalid type");
        }
    }
}
exports.Factory = Factory;
//# sourceMappingURL=index.js.map