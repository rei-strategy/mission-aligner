import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0C66E4",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          foreground: "#2F4858",
        },
        accent: {
          DEFAULT: "#2F4858",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: {
          100: "#738496",
          200: "#596773",
          300: "#454F59",
          400: "#38414A",
          500: "#2C333A",
          600: "#282E33",
          700: "#22272B",
          800: "#1D2125",
          900: "#101214",
        },
        gray: {
          100: "#DEE4EA",
          200: "#C7D1DB",
          300: "#B6C2CF",
          400: "#9FADBC",
          500: "#8C9BAB",
        },
        blue: {
          50: "#E9F2FF",
          100: "#CCE0FF",
          200: "#85B8FF",
          300: "#579DFF",
          400: "#388BFF",
          500: "#1D7AFC",
          600: "#0C66E4",
          700: "#0055CC",
        },
        green: {
          50: "#DCFFF1",
          100: "#BAF3DB",
          200: "#7EE2B8",
          300: "#4BCE97",
          400: "#2ABB7F",
        },
        teal: {
          50: "#E7F9FF",
          100: "#C6EDFB",
          200: "#9DD9EE",
          300: "#6CC3E0",
          400: "#42B2D7",
          500: "#2898BD",
        },
        purple: {
          50: "#F3F0FF",
          100: "#DFD8FD",
          200: "#B8ACF6",
          300: "#9F8FEF",
          400: "#8F7EE7",
          500: "#8270DB",
          600: "#6E5DC6",
          700: "#5E4DB2",
        },
        red: {
          50: "#FFECEB",
          100: "#FFD5D2",
          200: "#FD9891",
          300: "#F87168",
          400: "#F15B50",
          500: "#E2483D",
          600: "#C9372C",
        },
        orange: {
          50: "#FFF3EB",
          100: "#FEDEC8",
          200: "#FEC195",
          300: "#FEA362",
          400: "#F38A3F",
        },
        yellow: {
          50: "#FFF7D6",
          100: "#F8E6A0",
          200: "#F5CD47",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
