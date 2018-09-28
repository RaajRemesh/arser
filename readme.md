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

### myapp.ts

```typescript
const tools: string = [ "wrench", "hammer", "pickaxe" ];

@action("finagle")
class FinagleAction extends BaseAction {

    @option("tool", "t", "The tool for finagling your toolables."
        { valid: tools })
    tool: string = "wrench";

    @option("turns", "n", "How much to finagle.",
        { valid: /\d+/, parse: Number })
    turns: number = 1;

}

@action( /* default/top-level */ )
class MyAppCLI extends BaseDefaultAction {

    finagle = FinagleAction;

    @flag("force", "f", "Compel the toolable to finagle at your own risk.")
    version: boolean = false;
}

const model = new Parser(MyAppCLI)
    .assertValidConfiguration() // you can also move this to your tests
    .parse(process.argv);

runMyApp(model);
```

### Running myapp.ts

The top-level class marked with an empty `@action` is your default action class. When running
your program, if you don't specify an action from that class, it will use the default, itself,
and it will look for any options, there. If inheriting from BaseDefaultClass, the default
options include `--help` and `--version`.

```console
ubuntu@home:~$ myapp --help
ubuntu@home:~$ myapp --version
```

If you specify an action, control falls to the referenced class:

```console
ubuntu@home:~$ myapp finagle -t wrench -n 3
 -> Successfully finagled with the wrench three times.
```

Each action can have subactions and options/flags.

## To do
1. Consistency check during AssertValidConfiguration() (no duplicate short names, etc)
2. Add NodeJS quick-complete option.
3. Flesh out a nice wiki
4. Flesh out this readme
5. Consider dash dash (" -- ") and treatment of subsequent values
6. Consider parsing culture. i18n.

[banner]: https://github.com/cdibbs/arser/blob/master/resources/arser-cli-clerk.svg "The only way to discover the limits of the possible is to go beyond them into the impossible. - Arthur C. Clarke"