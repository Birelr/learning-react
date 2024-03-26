export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          600: "#1f2937",
          700: "#111827",
        },
        transparentblack: "rgba(0, 0, 0, 0.5)", // Renk adında "-" karakterini "_" ile değiştirdik
      },
    },
  },
  plugins: [],
};
