# saucectl cypress & multiple reporter example

Example running saucectl with cypress & [multiple reporters](https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters)

To illustrate how to run tests with multiple reporters, we will use the
following reporters:
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)

Our runner is preconfigured to use [cypress-multi-reporters](https://github.com/YOU54F/cypress-plugins/tree/master/cypress-multi-reporters)
by default. This allows you to easily define additional reporters via the
`cypress.reporters` option in your [.sauce/config.yml](.sauce/config.yml).

The `cypress-mochawesome-reporter` plugin still needs to be hooked up to
Cypress events in your `cypress.config.js`. The exact needs of the plugin will
vary depending on the plugin you choose.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/).

_If you're using VS Code, you can use [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) to run the following commands directly from VS Code._

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Install Local NPM Dependencies

Run the following command inside the `examples/multi-reporter` folder :rocket:

```bash
npm install
```

## Running The Examples

Run the following command inside the `examples/multi-reporter` folder :rocket:

```bash
saucectl run
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.
