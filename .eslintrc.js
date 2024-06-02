module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin", "unused-imports"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js", "seed.ts"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ],
    "@typescript-eslint/semi": ["error", "never"],
    "eol-last": ["error", "always"],
    "unused-imports/no-unused-imports": "warn",
    "no-trailing-spaces": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "arrow-parens": ["warn", "as-needed"],
    "space-in-parens": ["error", "never"],
    "no-lonely-if": "error",
    "dot-location": ["error", "property"],
    "no-var": "warn",
    "comma-style": ["error", "last"],
    "comma-dangle": "off",
    "default-case": "error",
    "no-redeclare": "error",
    "no-useless-return": "error",
    "object-curly-spacing": ["warn", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "dot-notation": "error",
    "max-depth": ["error", 3],
    quotes: ["warn", "double"],
    semi: "off",
    "space-infix-ops": "error"
  }
}
