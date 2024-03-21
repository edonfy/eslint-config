# eslint-config

> Opinionated eslint set of rules

## Usage

```bash
npm i -D @edonfy/eslint-config
```

Add it to `.eslintrc.cjs` file:

```js
/* eslint-env node */
const { edonfy } = require('@edonfy/eslint-config')

module.exports = edonfy({
  vue: false
  ts: false
})
```