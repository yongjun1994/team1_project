module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ 이게 정확해야 VS Code가 클래스 인식함
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
