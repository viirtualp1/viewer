module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'vue/no-v-html': ['off'],
        'vue/multi-word-component-names': ['off'],
        'vue/max-attributes-per-line': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
        'vue/singleline-html-element-content-newline': ['off'],
        'vue/html-self-closing': ['off'],
    },
}

