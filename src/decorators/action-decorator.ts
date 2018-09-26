import { IActionOptions } from '../models/i-action-options';
import { IDefaultActionOptions } from '../models/i-default-action-options';
import { IActionConfig } from '../models/i-action-config';

const actionMetadataKey = "us.dibbern.oss.arser.decorators.class.action";

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 * @param target The class defining the default action.
 */
 // (Not a true factory, when called this way. Instead, a convenience method for the user.)
function _actionDecoratorFactory<TClass extends Function>(target: TClass): void;

/**
 * Identifies a named action for the CLI.
 * @param name The name of the action, as parsed on the commandline. Ex: "clone" in "git clone".
 * @param opts Options relating to the action.
 * @param isDefaultAction Whether to also use this action as the CLI's default action.
 */
function _actionDecoratorFactory(name: string, opts?: IActionOptions, isDefaultAction?: true | false): ClassDecorator;

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 * @param opts The default action's options.
 */
function _actionDecoratorFactory(opts?: IDefaultActionOptions  /* implicitly default when name omitted */): ClassDecorator;

// The composite/implementation of the above signatures.
function _actionDecoratorFactory<TClass extends Function>(
    nameOrOptsOrTarget?: string | IDefaultActionOptions | TClass,
    opts: IActionOptions = null,
    isDefaultAction: boolean = null
): ClassDecorator | void {
    let name: string;
    let options: IActionOptions;
    let isDefault: boolean;
    if (typeof nameOrOptsOrTarget === "string") {
        // then, its an ordinary command, not the default command.
        name = nameOrOptsOrTarget;
        options = opts || {};
        isDefault = isDefaultAction || false;
    } else if (typeof nameOrOptsOrTarget === "function") {
        _actionDecorator(nameOrOptsOrTarget);
        return;
    } else {
        // its the default command
        name = null;
        options = nameOrOptsOrTarget || {};
        isDefault = true;
    }

    // decorators are basically closure factories for a preprocessing function
    function _actionDecorator<TClass extends Function>(target: TClass): void {
        let d: { [propKey: string]: IActionConfig } = Reflect.get(target, actionMetadataKey) || {};
        d[target.name] = { name, isDefault, options };
        Reflect.set(target, actionMetadataKey, d);
    }

    return _actionDecorator;
}

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 */
export const action = _actionDecoratorFactory;