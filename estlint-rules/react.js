module.exports = {
    "rules": {
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