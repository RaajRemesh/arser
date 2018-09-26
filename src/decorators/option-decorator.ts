import { OptionOptions } from "../models/option-options";

const actionMetadataKey = "us.dibbern.oss.arser.decorators.prop.option";

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
function _optionDecoratorFactory(name: string, short?: string, opts?: OptionOptions): PropertyDecorator

function _optionDecoratorFactory(name: string, short?: string, optsOrHelpText?: OptionOptions | string): PropertyDecorator {

    function _optionDecorator(target: Object, propertyKey: string | symbol): void {

    }

    return _optionDecorator;
}

export const option = _optionDecoratorFactory;