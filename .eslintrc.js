module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:lodash/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],
  // parserOptions: {
  //   'ecmaVersion': 7,
  //   'sourceType': 'module',
  // },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  rules: {
    "import/default": ["error"],
    "import/named": ["error"],
    "import/namespace": ["error", { allowComputed: false }],
    "import/prefer-default-export": ["warn"],
    "import/no-extraneous-dependencies": "off",
    "linebreak-style": "off",
    "max-lines": ["error"],
    "max-len": [
      "error",
      {
        code: 150,
        ignoreUrls: true,
        ignoreRegExpLiterals: true
      }
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "react/forbid-prop-types": ["error", { forbid: ["any"] }],
    "react/no-array-index-key": ["warn"],
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/static-property-placement": "off",
    "react-hooks/exhaustive-deps": "off",
    "lodash/prefer-lodash-method": "off",
    "lodash/prefer-includes": "off",
    "lodash/prefer-lodash-typecheck": "off",
    "lodash/matches-prop-shorthand": "off",
    "lodash/prefer-get": "off",
    indent: ["error", 2],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-unused-expressions": [
      2,
      { allowShortCircuit: true, allowTernary: true }
    ],
    "no-return-assign": [2, "except-parens"],
    // 'padded-blocks': ['error', 'always', { allowSingleLineBlocks: true }],
    "padded-blocks": "off"
  },
  overrides: [
    {
      files: ["src/**/*.spec.js"],
      rules: {
        "max-lines": ["warn"] // write your unit tests!
      }
    }
  ]
};
