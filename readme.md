![Arser CLI Clerk][banner]

# Arser CLI Clerk
A type-safe commandline (**ar**)guments par(**ser**) written in TypeScript. Arser uses a
decorator/model-tree approach to specifying your CLI, with customization
made possible through method references and overrides.

## Terminology

### Action
An action specified without dashes on the commandline. The "clone" in "git
clone," for example, is an action.

### Option
An action-modifying option that takes one or more parameters.

### Flag
An action-modifying boolean flag. E.g., "--help" is a flag on the default
action.

## Usage
```typescript
export const tools: [ "wrench", "hammer", "pickaxe" ]
    = [ "wrench", "hammer", "pickaxe" ];

@action("finagle")
export class FinagleAction extends BaseAction {

    @option("tool", "t", { from: tools })
    tool: typeof tools[number] = "wrench";
}

@action( /* default/top-level */ )
class MyAppCLI extends BaseDefaultAction {
    finagle = FinagleAction;

    @flag("version", "v")
    version: boolean = false;
}

const model = new Parser(MyAppCLI)
    .assertValidConfiguration() // you can also move this to your tests
    .parse(process.argv);

runMyApp(model);
```

## To do
1. Consistency check during AssertValidConfiguration() (no duplicate short names, etc)
2. Add NodeJS quick-complete option.
3. Flesh out a nice wiki
4. Flesh out this readme
5. Consider dash dash (" -- ") and treatment of subsequent values
6. Consider parsing culture. i18n.

[banner]: https://raw.githubusercontent.com/cdibbs/arser/blob/master/resources/arser-cli-clerk.svg "The only way to discover the limits of the possible is to go beyond them into the impossible. - Arthur C. Clarke"