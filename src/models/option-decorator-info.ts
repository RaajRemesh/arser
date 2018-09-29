import { IDecoratorInfo } from "./i-decorator-info";
import { OptionConfig } from "./option-config";

export class OptionDecoratorInfo implements IDecoratorInfo {
    target: any;

    options: { [propKey: string]: OptionConfig[] };
}