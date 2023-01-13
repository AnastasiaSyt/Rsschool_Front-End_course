module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-typescript/base',
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    // rules: {
    //     '@typescript-eslint/no-explicit-any': 2,
    // },
};
