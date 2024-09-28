import eslintConfig from "@igorkowalczyk/eslint-config";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.react,
 ...eslintConfig.next,
 ...eslintConfig.node,
 ...eslintConfig.tailwindcss,
 ...eslintConfig.typescript,
 {
  files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs"],
  rules: {
   "require-await": "off",
  },
 },
];
