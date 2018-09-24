# vas ist das

ohh yeah.

Look in package.json under scripts. You can define your own, there.

## Terminology
### Action
An action specified without dashes on the commandline. The "pull" in "git pull," for example, is an action.

### Option
An action-modifying option that takes one or more parameters.

### Flag
An action-modifying boolean flag. E.g., "--help" is a flag on the default action.

## Usage
```typescript
@action()
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
