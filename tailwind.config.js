import plugin from "tailwindcss/plugin";

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        surface: {
          50: "#f9fafb",
          800: "#1f2937",
        },
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ":root": {
          "--color-primary-50": theme("colors.primary.50"),
          "--color-primary-100": theme("colors.primary.100"),
          "--color-primary-200": theme("colors.primary.200"),
          "--color-primary-300": theme("colors.primary.300"),
          "--color-primary-400": theme("colors.primary.400"),
          "--color-primary-500": theme("colors.primary.500"),
          "--color-primary-600": theme("colors.primary.600"),
          "--color-primary-700": theme("colors.primary.700"),
          "--color-primary-800": theme("colors.primary.800"),
          "--color-primary-900": theme("colors.primary.900"),
          "--color-surface-50": theme("colors.surface.50"),
          "--color-surface-800": theme("colors.surface.800"),
        },
      });
    }),
  ],
};
