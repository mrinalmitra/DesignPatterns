import { Developer } from "./dev";
import { Tester } from "./tester";

export class Factory {
    create(name: string, type: number): any {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            default:
                throw new Error("Invalid type");
        }
    }
}