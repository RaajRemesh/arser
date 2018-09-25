import { IActionOptions } from "./i-action-options";

export interface IDefaultActionOptions extends IActionOptions {
    isDefault: true;
}