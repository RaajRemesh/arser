import { IDefaultAction } from "./i-default-action";

export interface IParser<T extends IDefaultAction> {
    parse(args: string[]): T;
    assertConfigurationValid(): IParser<T>;
}