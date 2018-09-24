import { ParserOptions } from "./i-parser-options";
import { BaseDefaultAction } from "./base-default-action";

export class Parser<T extends BaseDefaultAction> {
    /**
     * Prepares an argv parser according to a provided format and parsing options.
     * @param TClass A subclass of BaseDefaultAction.
     * @param options Any parsing options.
     */
    constructor(
        protected TClass: { new(): T },
        protected options?: ParserOptions
    ) {
        
    }

    /**
     * Takes an array of commandline arguments and parses it into an action tree, T.
     * @param args A process.argv-like string array.
     */
    parse(args: string[]): T {
        throw new Error("Not implemented, yet.");
    }

    /**
     * Throws an exception if errors are discovered in the user action configuration.
     * This can include duplicate flags, missing required options, etc. Call this
     * at run-time or design-time (in your tests).
     */
    assertConfigurationValid(): Parser<T> {
        throw new Error("Not implemented, yet.");
        return this;
    }
}