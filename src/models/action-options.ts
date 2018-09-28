export class ActionOptions {
    /** Whether to use this action as the default action. */
    isDefault?: boolean = false;

    /** The help text for this action. */
    helpText?: string = "";

    /** Specifies the group to which this action belongs, at the current level. For helptext display purposes. */
    // group: string; // TODO someday
}