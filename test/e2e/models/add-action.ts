import { action, BaseAction } from "../../../src";

@action
export class AddAction extends BaseAction {

    helpText(): string {
        return super.helpText();
    }
}