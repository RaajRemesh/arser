import { OptionOptions } from "../models/option-options";
import { metadataKeyPrefix, OptionDecoratorInfo } from "../models";

const optionMetadataKey: string
    = metadataKeyPrefix + OptionDecoratorInfo.name;

/**
 * Defines an option property for the current action class.
 * @param name The option name. Ex: "help" in "git --help"
 * @param short The short form of the option. Ex: "h" in 
 * @param helpText A short help text for this option.
 */
function _optionDecoratorFactory(name: string, short?: string, helpText?: string, addtlOpts?: OptionOptions): PropertyDecorator;

/**
 * Defines an option property for the current action class. For global options
 * @param name The option name. Ex: "help" in "git --help"
 * @param short The short form of the option. Ex: "h" in "git -h".
 * @param opts Options for this option.
 */
function _optionDecoratorFactory(name: string, short?: string, opts?: OptionOptions): PropertyDecorator;
function _optionDecoratorFactory(name: string, short?: string, optsOrHelpText?: OptionOptions | string): PropertyDecorator {

    /**
     * Decorates an object property, storing information about it with Reflect.get/set.
     * @param target The object to which this decorator instance applies.
     * @param propertyKey The property to which this decorator instance applies.
     */
    function _optionDecorator(target: Object, propertyKey: string | symbol): void {

    }

    return _optionDecorator;
}

export const option = _optionDecoratorFactory;