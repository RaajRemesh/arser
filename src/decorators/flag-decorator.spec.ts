import { Test, TestCase, Setup } from "alsatian";
import { flag as flagFactory } from "./flag-decorator";
import { Assert } from "alsatian-fluent-assertions";
import { getDecoratorInfo } from "./get-decorator-info";
import { OptionOptions, OptionDecoratorInfo } from "../models";

export class FlagDecoratorTests {
    testObj: any;

    @Setup
    beforeEach() {
        this.testObj = new Object();
    }

    @Test()
    factory_acceptedParameterPatterns_signatureCompileTest(name: string) {
        const nameOnly = flagFactory("nameonly");
        Assert(nameOnly).is(Function);
        const nameAndShort = flagFactory("name", "shortalso");
        Assert(nameAndShort).is(Function);
        const nameShortOpts = flagFactory("name", "short", { isFlag: true });
        Assert(nameShortOpts).is(Function);
        const nameShortHelp = flagFactory("name", "short", "And some help text.");
        Assert(nameShortHelp).is(Function);
    }

    @TestCase("a name", "n", "help text", { helpText: "help text", isFlag: true })
    @TestCase("a name", "n", { helpText: "abc" }, { helpText: "abc", isFlag: true })
    @Test()
    decorator_storesConfig(name: string, short: string, third: string | OptionOptions, expectedOptions: OptionOptions) {
        const propName = "someprop";
        const flagDec = flagFactory(name, short, third);
        flagDec(this.testObj, propName);

        const info = getDecoratorInfo(this.testObj, OptionDecoratorInfo);
        Assert(info)
            .has(i => i.options)
            .that.has(propName)
            .that.hasFirst()
            .that.has({
                name: name,
                shortName: short,
                options: expectedOptions
            });
    }
}