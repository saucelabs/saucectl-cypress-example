# saucectl cypress & cucumber example

Example running saucectl with cypress & cucumber.

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

## Running The Examples

Simply check out this repo, navigate into `examples/cucumber` and run the command below :rocket:

```bash
saucectl run
```

### Running With Tags

```bash
saucectl run --env "CYPRESS_TAGS=@smoke"
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.
