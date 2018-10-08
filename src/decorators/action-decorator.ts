import { ActionDecoratorInfo, ActionPropertyDecoratorInfo, metadataKeyPrefix } from '../models';
import { ActionOptions } from '../models/action-options';
import { DefaultActionOptions } from '../models/default-action-options';
import { BaseAction } from '../base-action';

export const defaultActionMetadataKey: string
    = metadataKeyPrefix + ActionDecoratorInfo.name;
export const propertyActionMetadataKey: string
    = metadataKeyPrefix + ActionPropertyDecoratorInfo.name;

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 * @param opts The default action's options.
 */
function _actionDecoratorFactory(opts?: DefaultActionOptions  /* implicitly default when name omitted */): ClassDecorator;

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 * @param target The class defining the default action.
 */
function _actionDecoratorFactory<TClass extends Function>(target: TClass): void;

/**
 * Identifies a named action for the CLI.
 * @param name The name of the action, as parsed on the commandline. Ex: "clone" in "git clone".
 * @param opts Options relating to the action.
 */
function _actionDecoratorFactory(name: string, opts?: ActionOptions): PropertyDecorator;

/**
 * Identifies a named action for the CLI.
 * @param name The name of the action, as parsed on the commandline. Ex: "clone" in "git clone".
 * @param helpText The help text for this action.
 * @param opts Options relating to the action.
 */
function _actionDecoratorFactory(name: string, helpText?: string, opts?: ActionOptions): PropertyDecorator;

// The composite/implementation of the above signatures.
function _actionDecoratorFactory<TClass extends Function>(
    nameOrOptsOrTarget?: string | DefaultActionOptions | TClass,
    optsOrHelpText: ActionOptions | string = null,
    opts: ActionOptions = null,
): TClass | PropertyDecorator | void {
    let name: string;
    let options: ActionOptions;
    let isDefault: boolean;
    if (typeof nameOrOptsOrTarget === "function") {
        // its the default command
        const target = nameOrOptsOrTarget;
        name = null;
        isDefault = true;
        options = {};
        _defaultActionClassDecorator(target);
    } else if (typeof nameOrOptsOrTarget === "string") {
        // then, its an ordinary command, not the default command.
        name = nameOrOptsOrTarget;
        if (typeof optsOrHelpText === "object") {
            options = optsOrHelpText;
        } else {
            options = opts || {};
            options.helpText = optsOrHelpText;
        }
        isDefault = false;
        return _actionPropertyDecorator;
    } else {
        // its the default command
        name = null;
        options = <ActionOptions> nameOrOptsOrTarget || {};
        isDefault = true;
        return _defaultActionClassDecorator;
    }

    /**
     * Decorates a class, storing information about each, new instance of it with Reflect.get/set.
     * @param target The class instance (object) to which this decorator applies.
     */
    function _defaultActionClassDecorator<TClass extends Function>(target: TClass): void {
        let model: ActionDecoratorInfo = Reflect.get(target, defaultActionMetadataKey) || new ActionDecoratorInfo();
        model.actions.push({ name, isDefault, options });
        Reflect.set(target, defaultActionMetadataKey, model);
    }

    function _actionPropertyDecorator<T extends Object, K extends keyof T, V extends T[K] & BaseAction>(
        target: T,
        propertyKey: string
    ): void {
        let model: ActionPropertyDecoratorInfo = Reflect.get(target, propertyActionMetadataKey) || new ActionPropertyDecoratorInfo();
        model.actions[propertyKey] = model.actions[propertyKey] || [];
        model.actions[propertyKey].push({ name, isDefault, options });
        Reflect.set(target, propertyActionMetadataKey, model);
    }
}

/**
 * Identifies a CLI's default action. There can only be one default action per CLI.
 */
export const action = _actionDecoratorFactory;