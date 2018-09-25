export class BaseAction {
    
    /**
     * Returns a string describing this action and its options and child actions.
     */
    helpText(): string {
        throw new Error("Not implemented.");
    }
}