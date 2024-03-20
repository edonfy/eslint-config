/* eslint-env node */

const edonfy = (opts) => {
  const options = Object.assign({ vue: false, ts: false }, opts)
  const config = {
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    extends: [
      'eslint:recommended',
    ],
    plugins: [],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-unused-vars': 1,
    },
  }

  if (options.ts) {
    config.plugins.push('@typescript-eslint')
    config.parserOptions.parser = '@typescript-eslint/parser'
    config.extends.push('plugin:@typescript-eslint/recommended')

    const tsRules = {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 1,
      // '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    }

    Object.assign(config.rules, tsRules)
  }

  if (options.vue) {
    config.plugins.push('vue')
    config.extends.push('plugin:vue/vue3-essential')

    const vueRules = {
      'vue/multi-word-component-names': 0,
    }

    Object.assign(config.rules, vueRules)
  }

  const { overrides, rules, env } = options

  if (overrides) {
    config.overrides = overrides
  }

  if (rules) {
    Object.assign(config.rules, rules)
  }

  if (env) {
    Object.assign(config.env, env)
  }

  return config
}

module.exports = {
  edonfy,
}