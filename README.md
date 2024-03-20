# eslint-config

> Opinionated eslint set of rules

## Usage

```bash
npm i -D @edonfy/eslint-config
```

Add it to `.eslintrc.js` file:

```js
const { edonfy } = require('@edonfy/eslint-config')

module.exports = edonfy({
  vue: false
  ts: false
})
```