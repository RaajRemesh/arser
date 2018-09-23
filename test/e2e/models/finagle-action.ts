import { command, option, BaseAction } from "../../../src";

export const tools: [ "wrench", "hammer", "pickaxe" ]
    = [ "wrench", "hammer", "pickaxe" ];

@command("finagle")
export class FinagleAction extends BaseAction {

    @option("tool", "t", { from: tools })
    tool: typeof tools[number] = "wrench";

    @option("nail", "n", { type: "number" })
    nail: number = 3.14;

    @option("thing", "i", { type: "string" })
    thing: string = "";

    @option("quick", "q", { complete: this.quickComplete })
    quick: string = "";

    quickComplete(fragment: string): string {
        return "i complete your commandline!";
    }
}