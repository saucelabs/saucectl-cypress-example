# saucectl cypress & cucumber example

Example running saucectl with cypress & cucumber.

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

## Running The Examples

Run the following command inside the `examples/cucumber` folder :rocket:

```bash
saucectl run
```

### Running With Tags

Run the following command inside the `examples/cucumber` folder :rocket:

```bash
saucectl run --env "CYPRESS_TAGS=@smoke"
```

## Reports

### Generating

The project includes configuration to generate a JSON report and an HTML
report. These reports are enabled and configured in the
[.cypress-cucumber-preprocessorrc.json](./.cypress-cucumber-preprocessorrc.json)
file.

### Downloading

The reports are configured to output to a directory called `__assets__` which
allows them to automatically be attached to the job that executed the tests. The
JSON report can be viewed directly from the job link.

However, the HTML report is not displayed on the web UI. Itcan be downloaded by 
configuring the `artifacts` setting in [.sauce/config.yml](.sauce/config.yml).

```
# Controls what artifacts to fetch when the suites have finished.
artifacts:
  download:
    when: always
    match:
      - "*.html"
    directory: ./artifacts/
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.

