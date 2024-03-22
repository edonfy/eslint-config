/* eslint-env node */
const edonfy = ({ vue = false, ts = false, overrides = [], rules = {}, env = {}, globals = {} }) => {
  const config = {
    env: {
      browser: true,
      es2021: true,
      ...env,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    extends: [
      'eslint:recommended',
      ...(vue ? ['plugin:vue/vue3-essential'] : []),
    ],
    plugins: [
      ...(ts ? ['@typescript-eslint'] : []),
      ...(vue ? ['vue'] : []),
    ],
    rules: {
      // base
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-unused-vars': 1,

      // typescript
      ...(ts ? {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-comment': 0,
      } : {}),

      // vue
      ...(vue ? {
        'vue/multi-word-component-names': 0,
      } : {}),

      // 扩展
      ...rules,
    },
    overrides: [...overrides],
    globals: { ...globals },
  }

  if (ts) {
    config.parserOptions.parser = '@typescript-eslint/parser'
    config.extends.push('plugin:@typescript-eslint/recommended')
  }

  return config
}

module.exports = {
  edonfy,
}