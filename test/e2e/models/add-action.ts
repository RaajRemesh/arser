import { action, BaseAction } from "../../../src";

@action("add")
export class AddAction extends BaseAction {

    helpText(): string {
        return ""
    }
}