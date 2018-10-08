import { BaseAction } from "./base-action";
import { IDefaultAction } from "./i-default-action";
import { option } from "./decorators";

export class BaseLaunchableDefaultAction extends BaseAction implements IDefaultAction {
    
    @option("help", "h")
    public help: boolean = false;

    /**
     * Launches an application from the default actions.
     */
    launch(): void {
        throw new Error("Not implemented.");
    }
}