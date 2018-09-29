import { action, BaseDefaultAction, option, flag } from "../../../src";
import { AddAction } from "./add-action";
import { FinagleAction } from "./finagle-action";
import { LaughAction } from "./laugh-action";

@action
export class DefaultAction extends BaseDefaultAction {
    @action("add", "Add to the collection", { launch: () => {} })
    add: AddAction = new AddAction();

    @action("finagle", "Finagle with a tool", { launch: () => {} })
    finagle: FinagleAction = new FinagleAction();

    @action("laugh", "")
    laugh: LaughAction = new LaughAction();

    @flag("force", "f", "Try not to imbibe and use the force, Luke.")
    force: boolean = false;
}