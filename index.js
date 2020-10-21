module.exports = {
    env: {
        "es6": true,
        "browser": true
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "./eslint-rules/react",
        "./eslint-rules/variables",
        "./eslint-rules/imports",
        "./eslint-rules/spacing-and-tabs"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": { "jsx": true },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        "@typescript-eslint/ban-ts-ignore": "warn",
        "@typescript-eslint/ban-ts-comment": "off", // covered by above
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "no-empty": "warn",
        "indent": ["error", 4, { "SwitchCase": 1, "ignoredNodes": ["JSXElement"] }],
        "@typescript-eslint/indent": ["error", 4],
        "no-irregular-whitespace": "error",
        "no-trailing-spaces": "error",
        "max-len": ["error", {"code": 140}],
        "no-extra-semi": "error",
        "semi-spacing": "off",
        "semi": [ "error", "always" ],
        "lines-between-class-members": "off",
        "no-restricted-syntax": "warn",
        "func-names": "off",
        "func-style": "off",
        "no-loop-func": "warn",
        "no-template-curly-in-string": "off",
        "no-multi-str": "off",
        "new-cap": "off",
        "no-useless-constructor": "off",
        "no-array-constructor": "off",
        "no-sparse-arrays": 0,
        "@typescript-eslint/array-type": ["error", { "default": "array" }],
    }
}
