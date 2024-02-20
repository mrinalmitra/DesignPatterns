"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessManager {
    constructor() {
        this.processes = [];
    }
    static getInstance() {
        if (!ProcessManager.instance) {
            ProcessManager.instance = new ProcessManager();
        }
        return ProcessManager.instance;
    }
    addProcess(process) {
        this.processes.push(process);
    }
    getProcess() {
        return this.processes;
    }
}
exports.default = ProcessManager;
//# sourceMappingURL=processManager.js.map