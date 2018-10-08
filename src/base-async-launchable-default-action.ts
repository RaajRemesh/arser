import { BaseAction } from "./base-action";
import { option } from "./decorators";

export class BaseAsyncLaunchableDefaultAction extends BaseAction {
    
    @option("help", "h")
    public help: boolean = false;

    /**
     * Asynchronously launches an application from the default actions.
     */
    async launchAsync(): Promise<{}> {
        throw new Error("Not implemented.");
    }
}