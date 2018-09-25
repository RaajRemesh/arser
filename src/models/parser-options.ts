export enum OperatorStyle {
    /** Windows/DOS-style forward slash. Ex: /? /A */
    forwardSlash,

    /** Unix-style double-dashed long names, and single-dash short: Ex: --help and -h */
    dashDashLongName,

    /** PowerShell-style single-dash long and short names. Ex: -Force and -f */
    dashLongName
}

export class ParserOptions {
    /**
     * Which dash style to use for flags and options.
     */
    operatorStyle: OperatorStyle = OperatorStyle.dashDashLongName;
}