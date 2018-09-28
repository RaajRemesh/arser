import { FlagOptions } from "./flag-options";
import { IDecoratorInfo } from "./i-decorator-info";

export class FlagDecoratorInfo implements IDecoratorInfo {
    target: any;

    name: string;

    shortName: string;

    options: FlagOptions;
}