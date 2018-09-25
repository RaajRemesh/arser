import { OptionOptions } from "../models/option-options";

/**
 * Defines an option for the current action class. For global options
 * @param name The option name. Ex: "help" in "git --help"
 * @param short The short form of the option. Ex: "h" in "git -h".
 * @param opts Options for this option.
 */
export declare function option(name: string, short?: string, opts?: OptionOptions): PropertyDecorator;