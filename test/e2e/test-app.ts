import { Parser } from "../../src";
import { DefaultAction } from "./models/default-action";

const model = new Parser(DefaultAction).parse(process.argv);
console.log(JSON.stringify(model, null, 2));