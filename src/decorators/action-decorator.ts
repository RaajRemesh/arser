import { ActionOptions } from '../models/action-options';
import { DefaultActionOptions } from '../models/default-action-options';
import { ActionConfig } from '../models/action-config';
import { ActionDecoratorInfo, metadataKeyPrefix } from '../models';

export const actionMetadataKey: string
    = metadataKeyPrefix + ActionDecoratorInfo.name;

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
function _actionDecoratorFactory(name: string, opts?: ActionOptions, isDefaultAction?: true | false): ClassDecorator;

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 * @param opts The default action's options.
 */
function _actionDecoratorFactory(opts?: DefaultActionOptions  /* implicitly default when name omitted */): ClassDecorator;

// The composite/implementation of the above signatures.
function _actionDecoratorFactory<TClass extends Function>(
    nameOrOptsOrTarget?: string | DefaultActionOptions | TClass,
    opts: ActionOptions = null,
    isDefaultAction: boolean = null
): ClassDecorator | void {
    let name: string;
    let options: ActionOptions;
    let isDefault: boolean;
    if (typeof nameOrOptsOrTarget === "string") {
        // then, its an ordinary command, not the default command.
        name = nameOrOptsOrTarget;
        options = opts || {};
        isDefault = isDefaultAction || false;
    } else if (typeof nameOrOptsOrTarget === "function") {
        _actionDecorator(/* target */ nameOrOptsOrTarget);
        return;
    } else {
        // its the default command
        name = null;
        options = nameOrOptsOrTarget || {};
        isDefault = true;
    }

    /**
     * Decorates a class, storing information about each, new instance of it with Reflect.get/set.
     * @param target The class instance (object) to which this decorator applies.
     */
    function _actionDecorator<TClass extends Function>(target: TClass): void {
        let model: ActionDecoratorInfo = Reflect.get(target, actionMetadataKey) || new ActionDecoratorInfo();
        model.actions.push({ name, isDefault, options });
        Reflect.set(target, actionMetadataKey, model);
    }

    return _actionDecorator;
}

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 */
export const action = _actionDecoratorFactory;