import { IActionOptions } from '../i-action-options';
import { IDefaultActionOptions } from '../i-default-action-options';
import { IActionConfig } from '../i-action-config';

const actionMetadataKey = "us.dibbern.oss.arser.decorators.action";

export function action(name: string, opts?: IActionOptions, isDefaultAction?: true | false): any;
export function action(opts?: IDefaultActionOptions  /* implicitly default when name omitted */): any;

// actual implementation must encompass all signatures ^^^
export function action(nameOrOpts: string | IDefaultActionOptions, opts: IActionOptions = null, isDefaultAction: boolean = null): any {
    let name: string;
    let options: IActionOptions;
    let isDefault: boolean;
    if (typeof nameOrOpts === "string") {
        // then, its an ordinary command, not the default command.
        name = nameOrOpts;
        options = opts || {};
        isDefault = isDefaultAction || false;
    } else {
        // its the default command
        name = null;
        options = nameOrOpts || {};
        isDefault = true;
    }

    // decorators are basically closure factories for a preprocessing function
    return function (target: Object, propertyKey: string) {
        let d: { [propKey: string]: IActionConfig } = Reflect.get(target, actionMetadataKey) || {};
        d[propertyKey] = { name, isDefault, options };
        Reflect.set(target, actionMetadataKey, d);
    }
}