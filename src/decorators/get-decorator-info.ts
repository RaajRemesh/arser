import { IDecoratorInfo, metadataKeyPrefix } from "../models/i-decorator-info";

export function getDecoratorInfo<TInfo extends IDecoratorInfo>(
    target: Object,
    decoratorInfo: { new(...args: any[]): TInfo }
): TInfo
{
    if (typeof target === 'function') {
        target = target['prototype'];
    }

    const key = metadataKeyPrefix + decoratorInfo.name;
    return Reflect.get(target, key) || {};
};