module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        indent: "off",
        "no-unused-vars": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "prettier/prettier": [
            "error",
            {
                arrowParens: "always",
                bracketSpacing: true,
                endOfLine: "lf",
                printWidth: 80,
                semi: true,
                singleQuote: false,
                tabWidth: 4,
                trailingComma: "es5",
                useTabs: false,
            },
        ],
    },
};
