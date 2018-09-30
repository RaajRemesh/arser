import { ParserOptions } from "./models/parser-options";
import { IDefaultAction } from "./i-default-action";
import { IParser } from "./i-parser";

export class Parser<T extends IDefaultAction> implements IParser<T> {
    /**
     * Prepares an argv parser according to a provided format and parsing options.
     * @param TClass A subclass of BaseDefaultAction.
     * @param options Any parsing options.
     */
    constructor(
        protected instanceOrTClass: T | { new(...args: any[]): T },
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
    assertConfigurationValid(): IParser<T> {
        throw new Error("Not implemented, yet.");
        return this;
    }
}