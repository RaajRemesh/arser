import { option } from "./decorators/option-decorator";
import { BaseAction } from './base-action';

export class BaseDefaultAction extends BaseAction {

    @option("help", "h")
    public help: boolean = false;

}