/* eslint-env node */

module.exports = {
    extends: [
        'eslint:recommended'
    ],
    rules: {
        // base
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'quote-props': ['error', 'as-needed'],
        'no-unused-vars': 'off',
    }
}