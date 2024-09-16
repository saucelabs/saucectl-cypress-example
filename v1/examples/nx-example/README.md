# nx-saucectl Nx plugin example

Example Nx workspace using the nx-saucectl plugin.

## Setup

### Set Your Sauce Labs Credentials

```sh
export SAUCE_USERNAME={YOUR SAUCE USERNAME}
export SAUCE_ACCESS_KEY={YOUR SAUCE ACCESS KEY}
```

### Start a tunnel

```sh
sc run -c sc-config.yml
```

If you don't have Sauce Connect 5 installed, follow [the instructions](https://docs.saucelabs.com/secure-connections/sauce-connect-5/installation/).

### Start the dev server

```sh
npx nx run nx-example:serve
```

### Run the saucectl task

```sh
npx nx run nx-example-e2e:saucectl
```
