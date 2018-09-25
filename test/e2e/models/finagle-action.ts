import { action, option, BaseAction } from "../../../src";

export const tools: [ "wrench", "hammer", "pickaxe" ]
    = [ "wrench", "hammer", "pickaxe" ];

@action("finagle")
export class FinagleAction extends BaseAction {

    @option("tool", "t", { 
        helpText: "Specifies the tool to use for this operation",
        required: true,
        valid: tools })
    tool: typeof tools[number] = "wrench";

    @option("nail", "n", { parse: Number })
    nail: number = 3.14;

    @option("thing", "i", { parse: FinagleAction.thingParser })
    thing: string = "";

    @option("quick", "q", { valid: /[a-z]*/ })
    quick: string = "";

    static thingParser(raw: string): string {
        return raw + raw;
    }
}