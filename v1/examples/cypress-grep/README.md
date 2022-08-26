# saucectl cypress & cypress-grep example

Example running saucectl with cypress & cypress-grep.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Install Local NPM Dependencies

Run the following command inside the `examples/cypress-grep` folder :rocket:

```bash
npm install
```

## Running the Examples

Run the following command inside the `examples/cypress-grep` folder :rocket:

```bash
saucectl run
```

## Running the Examples with Filtered Tests

Run the following command inside the `examples/cypress-grep` foler :rocket:

Filtering tests by tags
```bash
saucectl run --env "CYPRESS_grepTags=@mytags"
```

Filtering tests by test title
```bash
saucectl run --env "CYPRESS_grep=hello"
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.
