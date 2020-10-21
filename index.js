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
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": { "jsx": true },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": ["warn", "never", { "svg": "always" }],
        "import/order": "off",
        "import/no-extraneous-dependencies": "off",
        "import/orders": "off",
        "import/named": "off",
        "import/no-deprecated": "off",
        "import/no-duplicates": "error",
        "import/no-cycle": "warn",
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
        "keyword-spacing": "off",
        "space-in-parens": ["error", "always"],
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-infix-ops": "off",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "spaced-comment": "off",
        "no-tabs": "off",
        "no-multi-spaces": "error",
        "no-mixed-spaces-and-tabs": "off",
        "no-multiple-empty-lines": "error",
        "lines-around-comment": "off",
        "comma-spacing": "off",        
        "@typescript-eslint/array-type": ["error", { "default": "array" }],
        "vars-on-top": "off",
        "one-var": "off",
        "no-var": "error",
        "no-delete-var": "error",
        "no-label-var": "off",
        "no-redeclare": "error",
        "no-undef": "off",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-unused-vars":  "off",
        "no-use-before-define": "off",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "warn",
        "camelcase": "off",
        "no-catch-shadow": "warn",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-props-no-spreading": "off",
        "react/display-name": "off",
        "react/jsx-closing-bracket-location": "off",
        "react/button-has-type": "off",
        "react/require-default-props": "off",
        "react/no-array-index-key": "warn",
        "react/no-find-dom-node": "warn",
        "react/prefer-stateless-function": "warn",
        "react/jsx-key": "warn",
        "react/sort-comp": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-tag-spacing": "warn",
        "react/destructuring-assignment": "error",
        "react/no-children-prop": "error",
        "react/jsx-fragments": ["error", "syntax"],
        "react/prop-types": "error",
        "react/jsx-indent": ["warn", 4  ],
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-curly-spacing": ["warn", {"when": "always", "children": true, "spacing": { "objectLiterals": "never" } } ],
        "react/jsx-filename-extension": [ "warn", { "extensions": [".js", ".jsx", ".ts", ".tsx"] } ],
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/no-static-element-interactions": "warn"
    }
}
