import { IParserOptions } from "./i-parser-options";
import { BaseDefaultAction } from "./base-default-action";

export class Parser<T extends BaseDefaultAction> {
    constructor(
        protected TClass: { new(): T },
        protected options?: IParserOptions
    ) {
        
    }

    parse(args: string[]): T {
        throw new Error("Not implemented, yet.");
    }
}