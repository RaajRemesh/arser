export class ArgV {
    part: string = "";

    isConsumed: boolean = false;

    position: number = -1;

    /** Whether it appears to be a standard operator: /--?([a-zA-Z_][a-zA-Z_0-9-]*)/ */
    isOperator: boolean = false; 
}