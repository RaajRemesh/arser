import { IDecoratorInfo } from "./i-decorator-info";
import { ActionConfig } from "./action-config";

export class ActionDecoratorInfo implements IDecoratorInfo {
    target: any;

    actions: ActionConfig[] = [];
}