import { Test, Setup, TestCase } from "alsatian";
import { Assert } from "alsatian-fluent-assertions";
import { Parser } from "./parser";
import { BaseDefaultAction } from "./base-default-action";
import { flag, action, option } from "./decorators";
import { BaseAction } from ".";

export class ParserTest {
    @Setup
    beforeEach() {

    }

    @Test()
    parse_returnsRequestedModelType() {
        const parser = new Parser(TestModel);
        const result = parser.parse([]);
        Assert(result).is(TestModel);
    }

    @TestCase(DupFlagsTestModel, /duplicate flag/)
    @TestCase(DupFlagsTestModel, /duplicate short flag/)
    @TestCase(DupActionsTestModel, /duplicate action/)
    @TestCase(DupOptionTestModel, /duplicate option/)
    @TestCase(DupShortOptionTestModel, /duplicate short option/)
    @Test()
    assertConfigurationValid_throwsOnDuplicates(TestClass: { new(): BaseDefaultAction }, errMsg: RegExp) {
        const lambda = () => {
            new Parser(TestClass)
                .assertConfigurationValid();
        };
        Assert(lambda)
            .throws()
            .that.has(e => e.message)
            .that.matches(errMsg);
    }

    @Test()
    assertConfigurationValid_noThrowsOnValid(TestClass: { new(): BaseDefaultAction }, errMsg: RegExp) {
        const lambda = () => {
            new Parser(ValidTestModel)
                .assertConfigurationValid();
        };
        Assert(lambda).not.throws();
    }
}

/// Test models:

export class TestModel extends BaseDefaultAction {

}

@action
export class DupFlagsTestModel extends BaseDefaultAction {
    @flag("one") one: boolean;
    @flag("one") two: boolean;
}

@action
export class DupShortFlagsTestModel extends BaseDefaultAction {
    @flag("one", "o") one: boolean;
    @flag("two", "o") two: boolean;
}

@action
export class DupOptionTestModel extends BaseDefaultAction {
    @option("one") one: boolean;
    @option("one") two: boolean;
}

@action
export class DupShortOptionTestModel extends BaseDefaultAction {
    @option("one", "o") one: boolean;
    @option("two", "o") two: boolean;
}

@action("one") export class SubActionDup1 extends BaseAction {}
@action("one") export class SubActionDup2 extends BaseAction {}
@action export class DupActionsTestModel extends BaseDefaultAction {
    dup1 = SubActionDup1;
    dup2 = SubActionDup2;
}

@action("one") export class SubActionValid1 extends BaseAction {}
@action("two") export class SubActionValid2 extends BaseAction {}
@action export class ValidTestModel extends BaseDefaultAction {
    one = SubActionValid1;
    two = SubActionValid2;
    @flag("valid", "f") prop: boolean;
    @flag("valid2", "2") prop2: boolean;
    @option("abc", "a") prop3: string;
    @option("cde", "c") prop4: string;
}


