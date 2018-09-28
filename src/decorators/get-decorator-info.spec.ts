import { Test, TestCase } from "alsatian";
import { metadataKeyPrefix, IDecoratorInfo } from "../models";
import { getDecoratorInfo } from "./get-decorator-info";
import { Assert } from "alsatian-fluent-assertions";

export class GetDecoratorInfoTests {
    @Test()
    usesCorrectKey() {
        const target = {};
        var key = metadataKeyPrefix + TestClass.name;
        var testData = new TestClass();
        Reflect.set(target, key, testData);

        const result = getDecoratorInfo(target, TestClass);
        Assert(result).equals(testData);
    }
}

class TestClass implements IDecoratorInfo {
    target: any;
}