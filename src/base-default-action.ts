import { flag } from "./flag-decorator";
import { BaseAction } from './base-action';

export class BaseDefaultAction extends BaseAction {

    @flag("help", "h")
    public help: boolean;

}