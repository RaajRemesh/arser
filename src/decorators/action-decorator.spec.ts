import { Test, Setup, TestCase } from "alsatian";
import { action as actionFactory } from "./action-decorator";
import { Assert } from "alsatian-fluent-assertions";
import { ActionOptions, ActionDecoratorInfo, ActionPropertyDecoratorInfo } from "../models";
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
        const nameHelpTextAndOpts = actionFactory("name", "help text", {});
        Assert(nameHelpTextAndOpts).is(Function);
    }

    @TestCase("a name", "help text", { })
    @TestCase("a name 2", "abc", { })
    @Test()
    propertyDecorator_storesConfig(name: string, helpText: string, opts: ActionOptions) {
        const actionDec = actionFactory(name, helpText, opts);
        const testPropKey = "something";
        actionDec(this.testObj, testPropKey);

        const info = getDecoratorInfo(this.testObj, ActionPropertyDecoratorInfo);
        Assert(info)
            .has(i => i.actions)
            .that.has(a => a[testPropKey])
            .that.hasFirst()
            .that.has({
                name: name,
                options: opts,
                isDefault: false
            });
    }
}

class TestTarget {

}