import { BaseAsyncLaunchableDefaultAction } from "./base-async-launchable-default-action";

export abstract class BaseAsyncLaunchableAction<T extends BaseAsyncLaunchableDefaultAction> {
    
    public abstract launchAsync(argm: T): Promise<{}>;
}