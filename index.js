/* eslint-env node */

module.exports = {
    parser: '@babel/eslint-parser',
    extends: [
        'eslint:recommended',
    ],
    parserOptions: {
        requireConfigFile: false,
    },
    rules: {
        // base
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'quote-props': ['error', 'as-needed'],
        'no-unused-vars': 1,
        'comma-dangle': ['error', 'only-multiline'],
        quotes: ['error', 'single'],
    },
}