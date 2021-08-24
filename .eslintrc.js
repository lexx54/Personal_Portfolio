module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prefer-const": ["error", {
      "destructuring": "any"
    }],
    "object-shorthand": ["error", "always"],
    "arrow-spacing":"error",
    "eqeqeq":"error",
    "nonblock-statement-body-position" : ["error", "beside"],
    "no-nested-ternary":"error",
    "indent": ["error", 2],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "keyword-spacing": ["error", { "before": true }],
    "padded-blocks": ["error", "never"],
    "eol-last": ["error", "always"]
  },
};
