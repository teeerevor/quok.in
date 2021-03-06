module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['airbnb', 'prettier'],
    parser: 'babel-eslint',
    rules: {
        'object-shorthand': [2, 'properties'],
        'func-names': 0,
        'no-spaced-func': 0,
        'consistent-return': 0,
        'guard-for-in': 0,
        'no-param-reassign': [1, { props: false }],
        'no-use-before-define': [2, { functions: false }],
        'import/no-dynamic-require': 0,
        'func-call-spacing': 0,
        'no-plusplus': 0,
        'no-bitwise': [2, { allow: ['~'] }],
        'comma-dangle': ['error', 'always-multiline'],
        'import/extensions': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/prop-types': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': [1, 'never'],
        'react/react-in-jsx-scope': 0,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['~', './']],
                extensions: ['.js'],
            },
        },
    },
};
