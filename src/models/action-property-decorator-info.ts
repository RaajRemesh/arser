import { IDecoratorInfo } from "./i-decorator-info";
import { ActionConfig } from "./action-config";

export class ActionPropertyDecoratorInfo implements IDecoratorInfo {
    target: any;

    actions: { [propKey: string]: ActionConfig[] } = {};
}