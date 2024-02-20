"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Factory Pattern
// let f = new Factory();
// let emp = [];
// emp.push(f.create('dev',1))
// emp.push(f.create('tester',2))
// console.log(emp)
//==================================================
//SingleTon
/*
const processManager1 = ProcessManager.getInstance();
const processManager2 = ProcessManager.getInstance();

console.log(processManager1 === processManager2); // true (both references point to the same instance)

const process1 = new Process('Process 1','running');
const process2 = new Process('Process 2','stopped');

processManager1.addProcess(process1);
processManager2.addProcess(process2);

console.log(processManager1.getProcess()); // [{ id: 1, name: 'Process 1' }]
console.log(processManager2.getProcess());
*/
//==================================================
//Strategy Pattern
// const startegy = new Strategy(100)
// const credit = new CreditCard()
// const cash = new Cash();
// startegy.setMode(credit);
// startegy.pay();
// startegy.setMode(cash);
// startegy.pay();
//# sourceMappingURL=index.js.map