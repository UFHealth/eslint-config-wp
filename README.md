# @ufhealth/eslint-config-wp

> The shareable EcmaScript standard for developing UF Health WordPress projects.

[![NPM (scoped)](https://img.shields.io/npm/v/@ufhealth/eslint-config-wp.svg)](https://www.npmjs.org/package/@ufhealth/eslint-config-wp)
[![Build Status](https://travis-ci.com/UFHealth/eslint-config-wp.svg?branch=master)](https://travis-ci.com/UFHealth/eslint-config-wp)

## Key features

- Based on [`@ufhealth/eslint-config-standard`](https://github.com/UFHealth/eslint-config-standard)
- Allows common globals exposed by WordPress in front-end views and in the editor
- Includes WordPress-flavored React/JSX support using the `wp.element` pragma.

## Installation & usage

```bash
yarn install @ufhealth/eslint-config-wp
```

### Default usage

In your `.eslintrc`, `eslint.config.js` or `package.json#eslint`:

```json
{
  "extends": ["@ufhealth/eslint-config-wp"]
}
```

By default, this configuration supports [the React library bundled with WordPress](https://make.wordpress.org/core/2018/12/06/javascript-packages-and-interoperability-in-5-0-and-beyond/), exposed as `wp.element`. If you're writing scripts for the block editor, or enqueueing `wp-element` for use on the front-end, you don't need to do anything (and we highly recommend you don't).

However, if your script isn't for the editor and you'd like to use a different version of React (or another library like [Preact](https://preactjs.com/))...

### Using a different React library

...no problem! Just change the `pragma` and `version` settings accordingly:

```json
{
  "extends": ["@ufhealth/eslint-config-wp"],
  "settings": {
    "react": {
      "pragma": "Preact",
      "version": "8.4"
    }
  }
}
```

_**NOTE:** You'll need to make sure your `.babelrc` pragma setting matches whatever you choose, and also make sure you `import` your respective library wherever you use JSX (this second step isn't required if you're using the `wp.element` default)._
