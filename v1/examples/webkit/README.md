# saucectl cypress & webkit example

This example demonstrates how to run a cypress test against webkit in SauceLabs. (https://docs.cypress.io/guides/guides/launching-browsers#WebKit-Experimental)

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

_If you're using VS Code, you can use [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) to run the following commands directly from VS Code._

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Running the test

```bash
saucectl run
```

This command will run using the default configuration file [.sauce/config.yml](.sauce/config.yml).

## Example walkthrough

### Important files

* [.sauceignore](.sauceignore) - Defines the files to **not** archive when saucectl creates the test payload. Follows the same semantics as a [.gitignore](https://git-scm.com/docs/gitignore) file.
* [.sauce/config.yml](.sauce/config.yml) - The saucectl config file. In general, it defines what tests to run, how to run them and where to run them. See the [reference](https://docs.saucelabs.com/web-apps/automated-testing/cypress/yaml/v1/) for more details.

### Important configuration

To enable webkit support, you must opt in by setting `experimentalWebKitSupport: true` in your [cypress configuration file](cypress.config.js).
