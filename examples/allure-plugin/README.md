# saucectl cypress & allure plugin example

Example running saucectl with cypress & [cypress allure plugin](https://github.com/Shelex/cypress-allure-plugin)

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

Simply check out this repo, navigate into `examples/allure-plugin` and run the command below :rocket:

```bash
saucectl run
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.

## Allure Test Report

To review the allure test report, you need to move all the downloaded files to `allure-results`.
```bash
find -E artifacts -regex '.*(json|mp4)' -print0 | xargs -0 -I {} mv {} allure-results
```
note: this command was only verified on macOS.

And then generate allure report.
```bash
allure generate allure-results --clean -o allure-report
```
