import { Process } from "./process"

export default class ProcessManager{

    private static instance: ProcessManager
    private processes: Process[] = []

    private constructor(){

    }

    static getInstance(): ProcessManager{
        if(!ProcessManager.instance){
            ProcessManager.instance = new ProcessManager()
        }
        return ProcessManager.instance
    }

    addProcess(process: Process): void{
        this.processes.push(process)
    }

    getProcess():Process[]{
        return this.processes
    }

}