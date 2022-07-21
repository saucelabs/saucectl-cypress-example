# saucectl cypress & typescript example

Example running saucectl with cypress & typescript.

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

Run the following command inside the `examples/typescript` folder :rocket:

```bash
npm install
```


## Running The Examples

Run the following command inside the `examples/typescript` folder :rocket:

```bash
saucectl run
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.

**NOTE:**
Some examples were taken from the cypress.io testing [repository](https://github.com/cypress-io/cypress-example-kitchensink)
