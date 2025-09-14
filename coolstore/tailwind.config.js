module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "porsche-vietnamvnabbey": "var(--porsche-vietnamvnabbey)",
        "porsche-vietnamvnblack": "var(--porsche-vietnamvnblack)",
        "porsche-vietnamvnearly-dawn": "var(--porsche-vietnamvnearly-dawn)",
        "porsche-vietnamvngray": "var(--porsche-vietnamvngray)",
        "porsche-vietnamvniron": "var(--porsche-vietnamvniron)",
        "porsche-vietnamvnmahogany": "var(--porsche-vietnamvnmahogany)",
        "porsche-vietnamvnmako": "var(--porsche-vietnamvnmako)",
        "porsche-vietnamvnmatisse": "var(--porsche-vietnamvnmatisse)",
        "porsche-vietnamvnmetallic-bronze":
          "var(--porsche-vietnamvnmetallic-bronze)",
        "porsche-vietnamvnmonza": "var(--porsche-vietnamvnmonza)",
        "porsche-vietnamvnold-gold": "var(--porsche-vietnamvnold-gold)",
        "porsche-vietnamvnoslo-gray": "var(--porsche-vietnamvnoslo-gray)",
        "porsche-vietnamvnouter-space": "var(--porsche-vietnamvnouter-space)",
        "porsche-vietnamvnporcelain": "var(--porsche-vietnamvnporcelain)",
        "porsche-vietnamvnrajah": "var(--porsche-vietnamvnrajah)",
        "porsche-vietnamvnrope": "var(--porsche-vietnamvnrope)",
        "porsche-vietnamvnsan-juan": "var(--porsche-vietnamvnsan-juan)",
        "porsche-vietnamvnshark": "var(--porsche-vietnamvnshark)",
        "porsche-vietnamvnsilver-sand": "var(--porsche-vietnamvnsilver-sand)",
        "porsche-vietnamvntall-poppy": "var(--porsche-vietnamvntall-poppy)",
        "porsche-vietnamvntamarillo": "var(--porsche-vietnamvntamarillo)",
        "porsche-vietnamvnvalencia": "var(--porsche-vietnamvnvalencia)",
        "porsche-vietnamvnwest-coast": "var(--porsche-vietnamvnwest-coast)",
        "porsche-vietnamvnwhite": "var(--porsche-vietnamvnwhite)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "porsche-vietnam-vn-arial-narrow":
          "var(--porsche-vietnam-vn-arial-narrow-font-family)",
        "porsche-vietnam-vn-semantic-heading-2":
          "var(--porsche-vietnam-vn-semantic-heading-2-font-family)",
        "porsche-vietnam-vn-semantic-heading-4":
          "var(--porsche-vietnam-vn-semantic-heading-4-font-family)",
        "porsche-vietnam-vn-semantic-input":
          "var(--porsche-vietnam-vn-semantic-input-font-family)",
        "porsche-vietnam-vn-semantic-link":
          "var(--porsche-vietnam-vn-semantic-link-font-family)",
        "porsche-vietnam-vn-semantic-strong":
          "var(--porsche-vietnam-vn-semantic-strong-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
