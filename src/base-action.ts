import { ArgV } from "./models";

export class BaseAction {
    
    /**
     * Returns a string describing this action and its options and child actions.
     */
    get helpText(): string {
        throw new Error("Not implemented.");
    }

    parse(current: ArgV, all: ArgV[]): void {
        throw new Error("Not implemented");
    }
}