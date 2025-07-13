# OSCARLEON v4

This repository contains the static files for Oscar León's personal site.

## Running Tests

The project uses [Jest](https://jestjs.io/) with the `jsdom` environment to test
basic DOM interactions found in `script.js`.

Install dependencies and run the test suite with:

```bash
npm install
npm test
```

These commands execute the Jest test runner which validates the menu toggle and
filter behaviour.

## Building Minified Assets
Run `npm run build` to generate minified CSS and JS.
