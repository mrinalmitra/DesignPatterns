import { Factory } from "./factory";
import { Publisher } from "./observer/Publisher";
import { Subscriber } from "./observer/Subscriber";
import { Process } from "./singleton/process";
import ProcessManager from "./singleton/processManager";
import Strategy from "./strategy";
import { Cash } from "./strategy/Cash";
import { CreditCard } from "./strategy/CreditCard";

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

//==================================================

//Observer Pattern

let p = new Publisher();

let s1 = new Subscriber('Sub1')
let s2 = new Subscriber('Sub2')

p.addSubscriber(s1);
p.addSubscriber(s2);

p.setMessage('New News')