import { IActionOptions } from './i-action-options';
import { IDefaultActionOptions } from './i-default-action-options';

// Need to be fleshed out rather than declared
export declare function command(name: string, opts?: IActionOptions, defaultCommand?: true | false): any;
export declare function command(opts?: IDefaultActionOptions  /* implicitly default when name omitted */): any;