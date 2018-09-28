import { Test, Setup, TestCase } from "alsatian";
import { action as actionFactory } from "./action-decorator";
import { Assert } from "alsatian-fluent-assertions";
import { ActionOptions, ActionDecoratorInfo } from "../models";
import { getDecoratorInfo } from "./get-decorator-info";

export class ActionDecoratorTests {
    testObj: any;

    @Setup
    beforeEach() {
        this.testObj = new Object();
    }

    @Test()
    factory_acceptedParameterPatterns_signatureCompileTest(name: string) {
        const targetOnly = actionFactory(TestTarget);
        Assert(targetOnly).not.isDefined(); // non-factory behavior; decorator immediately applied
        const nameOnly = actionFactory("nameonly");
        Assert(nameOnly).is(Function);
        const nameAndOpts = actionFactory("name", {});
        Assert(nameAndOpts).is(Function);
        const nameOptsAndDef = actionFactory("name", {}, true);
        Assert(nameOptsAndDef).is(Function);
    }

    @TestCase("a name", { helpText: "help text" }, true)
    @TestCase("a name", { helpText: "abc" }, false)
    @Test()
    decorator_storesConfig(name: string, opts: ActionOptions, isDef: boolean) {
        const actionDec = actionFactory(name, opts, isDef);
        actionDec(this.testObj);

        const info = getDecoratorInfo(this.testObj, ActionDecoratorInfo);
        Assert(info)
            .has(i => i.actions)
            .that.hasFirst()
            .that.has({
                name: name,
                options: opts,
                isDefault: isDef
            });
    }
}

class TestTarget {

}