import config from "@igorkowalczyk/prettier-config";

/**
 * @type {import("prettier").Options}
 */
export default {
 ...config,
 plugins: ["prettier-plugin-tailwindcss"],
};
