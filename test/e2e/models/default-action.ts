import { command, BaseDefaultAction, flag } from "../../../src";
import { AddAction } from "./add-action";
import { FinagleAction } from "./finagle-action";
import { LaughAction } from "./laugh-action";

@command()
export class DefaultAction extends BaseDefaultAction {
    add = AddAction;
    finagle = FinagleAction;
    laugh = LaughAction;

    @flag("version", "v")
    version: boolean = false;
}