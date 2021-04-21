# saucectl cypress & cucumber example

Example running saucectl with cypress & cucumber.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/testrunner-toolkit/installation).

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Running The Examples

Simply check out this repo, navigate into `examples/cucumber` and run the command below :rocket:

```bash
saucectl run
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example. 

Note: Take note of the following setting in the package.json:
```json
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
  }
```
This is a very important configuration for the [preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) to be able to pickup implementations for its feature files.
