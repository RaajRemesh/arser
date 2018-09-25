import { Test, Setup } from "alsatian";
import { Assert } from "alsatian-fluent-assertions";
import { Parser } from "./parser";
import { BaseDefaultAction } from "./base-default-action";

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
}

export class TestModel extends BaseDefaultAction {

}