import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/transform.js",
      "**/_buildManifest.js",
      "**/_ssgManifest.js",
      "**/chunks/**",
      "**/static/**",
      "**/development/**",
      "**/server/**",
      "**/client/**",
      "**/app/**",
      "**/pages/**",
      "**/api/**",
      "**/middleware.ts",
      "**/next-env.d.ts",
      "**/next.config.js",
      "**/postcss.config.js",
      "**/tailwind.config.js",
      "**/turbopack/**",
      "**/__turbopack__/**",
      "**/__turbopack_*__/**",
      "**/*.turbopack.*",
      "**/*.turbopack-*",
      "**/turbopack-*",
      "**/.next/static/**",
      "**/.next/server/**",
      "**/.next/types/**",
      "**/.next/cache/**",
      "**/.next/development/**",
      "**/.next/production/**",
      "**/.next/static/chunks/**",
      "**/.next/static/development/**",
      "**/.next/static/production/**",
      "**/.next/static/css/**",
      "**/.next/static/media/**",
      "**/.next/static/images/**",
      "**/.next/static/fonts/**",
      "**/.next/static/js/**",
      "**/.next/static/json/**",
      "**/.next/static/other/**",
      "**/.next/static/worker/**",
      "**/.next/static/webpack/**",
      "**/.next/static/runtime/**",
      "**/.next/static/edge-runtime/**",
      "**/.next/static/edge-chunks/**",
      "**/.next/static/edge-pages/**",
      "**/.next/static/edge-middleware/**",
      "**/.next/static/edge-functions/**",
      "**/.next/static/edge-api-routes/**",
      "**/.next/static/edge-app/**",
      "**/.next/static/edge-pages/**",
      "**/.next/static/edge-middleware/**",
      "**/.next/static/edge-functions/**",
      "**/.next/static/edge-api-routes/**",
      "**/.next/static/edge-app/**",
      "**/.next/static/edge-pages/**",
      "**/.next/static/edge-middleware/**",
      "**/.next/static/edge-functions/**",
      "**/.next/static/edge-api-routes/**",
      "**/.next/static/edge-app/**"
    ],
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "error", // Require React in scope
      "react/prop-types": "off", // Not needed with TypeScript
      "react/self-closing-comp": "error",
      "react/jsx-sort-props": ["error", {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true,
        "multiline": "last",
        "noSortAlphabetically": false
      }],

      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_|^__turbopack_|^__TURBOPACK__",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-require-imports": "error",

      // Import rules
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }],
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",

      // General rules
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": "off", // Using TypeScript version instead
      "prefer-const": "error",
      "no-var": "error",

      // Accessibility rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/role-has-required-aria-props": "error",

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-unwanted-polyfillio": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];

export default eslintConfig;
