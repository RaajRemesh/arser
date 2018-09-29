import { ActionOptions } from "./action-options";
import { DefaultActionOptions } from "./default-action-options";

export class ActionConfig {
    /** The action name. Ex: "clone" in "git clone". */
    name: string;

    /** Options for this action. */
    options: DefaultActionOptions | ActionOptions;

    /** Whether this action should serve as the CLI's default action. */
    isDefault: boolean;
}