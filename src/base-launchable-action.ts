import { BaseAction } from "./base-action";
import { BaseLaunchableDefaultAction } from "./base-launchable-default-action";

export abstract class BaseLaunchableAction<T extends BaseLaunchableDefaultAction> extends BaseAction {
    
    public abstract launch(argm: T): void;
}