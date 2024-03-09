module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:perfectionist/recommended-natural',
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
    },

    plugins: ['react', 'import', 'jsx-a11y', 'perfectionist', '@typescript-eslint', 'prettier'],

    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'perfectionist/sort-objects': [
            'error',
            {
                order: 'asc',
                type: 'natural',
            },
        ],
        'prettier/prettier': ['error', { ...require('./.prettierrc.js') }],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        semi: [2, 'always'],
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {},
        },
        react: {
            version: 'detect',
        },
    },
};
