import { metadataKeyPrefix, OptionDecoratorInfo, OptionOptions } from '../models';

export const flagMetadataKey: string
    = metadataKeyPrefix + OptionDecoratorInfo.name;

/**
 * Specifies that the property should be set from a boolean flag.
 * @param name The flag name. Ex: "help" in "git --help"
 * @param short The optional shorthand flag name. Ex: "h" in "git -h"
 * @param helpText The help text for this option.
 */
function _flagDecoratorFactory(name: string, short?: string, helpText?: string, addtlOpts?: OptionOptions): PropertyDecorator;

/**
 * Specifies that the property should be set from a boolean flag.
 * @param name The flag name. Ex: "help" in "git --help"
 * @param short The optional shorthand flag name. Ex: "h" in "git -h"
 * @param opts Options for the flag.
 */
function _flagDecoratorFactory(name: string, short?: string, opts?: OptionOptions): PropertyDecorator;

/**
 * Specifies that the property should be set from a boolean flag.
 * @param name The flag name. Ex: "help" in "git --help"
 * @param short The optional shorthand flag name. Ex: "h" in "git -h"
 * @param optsOrHelpText Options for the flag or just the help text.
 */
function _flagDecoratorFactory(name: string, short?: string, optsOrHelpText?: string | OptionOptions): PropertyDecorator;

function _flagDecoratorFactory(name: string, short?: string, optsOrHelpText?: string | OptionOptions, opts?: OptionOptions): PropertyDecorator {
    
    /**
     * Decorates an object property, storing information about it with Reflect.get/set.
     * @param target The object to which this decorator instance applies.
     * @param propertyKey The property to which this decorator instance applies.
     */
    function _flagDecorator(target: Object, propertyKey: string | symbol): void {

    }

    return _flagDecorator;
}

/**
 * Shenanigans!!!
 */
export const flag = _flagDecoratorFactory;