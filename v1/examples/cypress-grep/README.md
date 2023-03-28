# saucectl cypress & @cypress/grep example

Example running saucectl with cypress & @cypress/grep.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

_If you're using VS Code, you can use [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) to run the following commands directly from VS Code._

### Install npm dependencies

```shell
npm install -g saucectl
npm install
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

### Run tests

```shell
saucectl run
```

This will start saucectl and run all the suites as configured in the [config file](.sauce/config.yml).

#### Run a specific suite

```shell
saucectl run --select-suite "Filter by test title"
```

## Configuration

To use @cypress/grep with saucectl, there are a few important configuration options in the config file to make note of.

### Specifying cypress env vars

Arguments to @cypress/grep (`grep`, `grepTags`, etc.) are typically provided as cypress env vars:

```
cypress run --env grepTags="@smoke"
```

The equivalent configuration for saucectl is the `config/env` dict for a suite:

```yaml
suites:
  - name: "Filter by test title"
    browser: chrome
    platformName: Windows 11
    config:
      specPattern: [ "cypress/e2e/**/*.*" ]
      env:
        grepTags: "@smoke"
        # grep: A test title to grep for
```

See [the docs](https://docs.saucelabs.com/web-apps/automated-testing/cypress/yaml/v1/#env-1) for more details.

### Filtering shards with @cypress/grep

If you want to configure your suite to use [sharding](https://docs.saucelabs.com/web-apps/automated-testing/cypress/yaml/v1/#shard), you can optionally use the `shardGrepEnabled` feature to have saucectl filter specs according to the grep arguments before test execution time. This is similar to how the `grepFilterSpecs` option works in @cypress/grep.

```yaml
suites:
  - name: "Filter with sharding"
    browser: chrome
    platformName: Windows 11
    shard: spec
    shardGrepEnabled: true  # <--
    config:
      specPattern: [ "cypress/e2e/**/*.*" ]
      env:
        grepTags: "@smoke"
```

### Defining dependencies

Since @cypress/grep is a run-time dependency, we need to configure saucectl to ensure the dependencies are available when tests are executed. This example uses the `npm/dependencies` feature which will bundle **locally installed** packages (and any transitive dependencies) along with the test payload.

```yaml
npm:
  dependencies:
    - "@cypress/grep"
```

For best practices on managing your npm dependencies, see [the docs](https://docs.saucelabs.com/web-apps/automated-testing/cypress/advanced/#including-node-dependencies).

### Full config :eyes:

Explore the [full config file](.sauce/config.yml) for this example and the [documentation](https://docs.saucelabs.com/web-apps/automated-testing/cypress/yaml/v1/) for more details.
