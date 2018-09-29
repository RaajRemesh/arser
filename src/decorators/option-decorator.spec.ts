import { option as optionFactory } from './option-decorator';
import { Test, Setup, TestCase } from "alsatian";
import { Assert } from 'alsatian-fluent-assertions';
import { OptionOptions, OptionDecoratorInfo } from '../models';
import { getDecoratorInfo } from './get-decorator-info';

export class OptionDecoratorTests {
    testObj: any;

    @Setup
    beforeEach() {
        this.testObj = new Object();
    }

    @Test()
    factory_acceptedParameterPatterns_signatureCompileTest(name: string) {
        const nameOnly = optionFactory("nameonly");
        Assert(nameOnly).is(Function);
        const nameAndShort = optionFactory("name", "shortalso");
        Assert(nameAndShort).is(Function);
        const nameShortOpts = optionFactory("name", "short", { isFlag: true });
        Assert(nameShortOpts).is(Function);
        const nameShortHelp = optionFactory("name", "short", "And some help text.");
        Assert(nameShortHelp).is(Function);
    }

    @TestCase("a name", "n", "help text", { helpText: "help text", isFlag: true })
    @TestCase("a name", "n", { helpText: "abc" }, { helpText: "abc", isFlag: true })
    @Test()
    decorator_storesConfig(name: string, short: string, third: OptionOptions | string, addltOptions: OptionOptions, expectedOptions: OptionOptions) {
        const propName = "someprop";
        const flagDec = optionFactory(name, short, third, addltOptions);
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