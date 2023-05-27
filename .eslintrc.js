module.exports = {
 extends: ["@igorkowalczyk/eslint-config", "next"],
 rules: {
  "react/no-unescaped-entities": "off",
  "react/prop-types": "off",
  "@next/next/no-html-link-for-pages": "off",
  "import/no-anonymous-default-export": "off",
 },
 env: {
  es6: true,
 },
};
