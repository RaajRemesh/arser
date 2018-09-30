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
An action-modifying option that takes one or more parameters. The "b" in "git -b [branch]"
is an option. Via configuration, you can also use the windows-style "/p" format.

### Flag
An action-modifying boolean flag. E.g., "--help" is a flag on the default
action.

## Usage

### myapp.ts

```typescript
const tools: string = [ "wrench", "hammer", "pickaxe" ];

class FinagleAction extends BaseLaunchableAction<MyAppCLI> {

    @option("tool", "t", "The tool for finagling your toolables."
        { valid: tools })
    tool: string = "wrench";

    @option("turns", "n", "How much to finagle.",
        { valid: /\d+/, parse: Number })
    turns: number = 1;

}

@action /* default/top-level */
class MyAppCLI extends BaseLaunchableDefaultAction {

    /* Optional, used with .launch(), below. */
    constructor(
        @inject(FinagleActionToken) protected finagleAction: Func<MyAppCLI>
    ) {}

    @action("finagle", "Use a tool.")
    finagle = new ;

    @flag("force", "f", "Compel the toolable to finagle at your own risk.")
    version: boolean = false;
}

// You can either just get a model:
const model = new Parser(MyAppCLI)
    .assertValidConfiguration() // you can also move this to your tests
    .parse(process.argv);

// Or, use Arser + your favorite DI framework to launch your app:
container.build<IParser>()
    .assertValidConfiguration()
    .parse(process.argv)
    .launch(); // await/.launchAsync()

```

### Running myapp.ts

The top-level class marked with an empty `@action` is your default action class. When running
your program, if you don't specify an action from that class, it will use the default,
and it will look for any options, there. If inheriting from BaseDefaultClass, the `--help`
option is included and displays some default help text constructed from your models.

```console
ubuntu@home:~$ myapp --help
ubuntu@home:~$ myapp --version
```

If you specify an action, control falls to the referenced class:

```console
ubuntu@home:~$ myapp finagle -t wrench -n 3
 -> Successfully finagled; used the wrench three times.
```

Actions can have nested sub-actions and flags, allowing you to build a consistent
language for launching your application from the commandline.

## To do
1. Consistency check during AssertValidConfiguration() (no duplicate short names, etc)
2. Flesh out a nice wiki
3. Flesh out this readme
4. Consider dash dash (" -- ") and treatment of subsequent values
5. Consider parsing culture. i18n.

[banner]: https://github.com/cdibbs/arser/blob/master/resources/arser-cli-clerk.svg "The only way to discover the limits of the possible is to go beyond them into the impossible. - Arthur C. Clarke"