import { action, BaseAction, BaseLaunchableAction } from "../../../src";
import { DefaultAction } from "./default-action";

@action
export class AddAction extends BaseLaunchableAction<DefaultAction> {
    get helpText(): string {
        return super.helpText;
    }

    public launch(argm: DefaultAction): void {
        throw new Error("Method not implemented.");
    }
}