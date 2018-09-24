import { IActionOptions } from "./i-action-options";
import { IDefaultActionOptions } from "./i-default-action-options";

export interface IActionConfig {
    name: string;
    options: IDefaultActionOptions | IActionOptions;
    isDefault: boolean;
}