import { action, option, BaseAction } from "../../../src";

@action("custom")
export class CustomAction extends BaseAction {

    strange: string[] = [];

    parse(current: ArgV, all: ArgV[]): void {
        for (let i=current.position; i<all.length; i++) {
            if (! all[i].isOperator) {
                all[i].isConsumed = true;
                this.strange.push(all[i].part);
            }
        }
    }
}

class ArgV {
    part: string;

    isConsumed: boolean;

    position: number;

    /** Whether it appears to be a standard operator: /--?([a-zA-Z_][a-zA-Z_0-9-]*)/ */
    isOperator: boolean; 
}