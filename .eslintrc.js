export default {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "prettier"
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "vue/multi-word-component-names": "off", // Cho phép tên component một từ
        "@typescript-eslint/no-unused-vars": ["warn"], // Cảnh báo biến không dùng
        "@typescript-eslint/explicit-function-return-type": "off", // Không bắt buộc khai báo kiểu trả về
        "no-console": "warn", // Cảnh báo khi dùng console.log
        "no-debugger": "error" // Không cho phép debugger trong production
    }
};
