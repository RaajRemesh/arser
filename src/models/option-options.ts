export class OptionOptions {
    /** A value to use to validate the option argument. */
    valid?: RegExp | ((raw: string) => boolean) | string[];

    /** A method to parse the raw value from the commandline string. */
    parse?: (raw?: string) => any;
    
    /** Whether or not this option is required. */
    required?: boolean = false;

    /** Help text to display for this option. */
    helpText?: string = "";

    isFlag?: boolean = false;
}