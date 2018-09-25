import { IActionOptions } from "./i-action-options";
import { IDefaultActionOptions } from "./i-default-action-options";

export interface IActionConfig {
    /** The action name. Ex: "clone" in "git clone". */
    name: string;

    /** Options for this action. */
    options: IDefaultActionOptions | IActionOptions;

    /** Whether this action should serve as the CLI's default action. */
    isDefault: boolean;
}