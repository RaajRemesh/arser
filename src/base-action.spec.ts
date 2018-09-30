import { Test } from "alsatian";
import { action } from "./decorators";
import { BaseDefaultAction } from "./base-default-action";
import { BaseAction } from "./base-action";
import { Assert } from "alsatian-fluent-assertions";

export class BaseActionTests {
    @Test()
    helpText_prefacedWithBaseSummary() {

        @action({ isDefault: true, helpText: "something" })
        class Test extends BaseAction {
            static summary: string
                = "This is a wonderful application.\n"
                + "Full of love, joy, and happiness.";
        }

        const testInst = new Test();
        Assert(testInst.helpText)
            .contains(Test.summary);
    }

    @Test()
    helpText_listsTopLevelOptionsFlagsAndActions() {

    }

    @Test()
    helpText_isPretty() {

    }
}