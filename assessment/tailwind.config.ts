import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        'primary': '#007AFF',
        'secondary': '#7F56D9',
        'tertiary': '#F5F6FF',

      },
      boxShadow: {
        'small': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        h1: ['48px', '56px'],
        h2: ['36px', '44px'],
        h3: ['28px', '36px'],
        h4: ['18px', '28px'],
        body: ['14px', '20px'],
        caption: ['12px', '16px'],
      },
      fontWeight: {
        bold: '700',
        semiBold: '600',
        regular: '400',
      },
      borderRadius: {
        'small': '3px',
        'medium': '6px',
        'large': '10px',
        'xl': '24px',
        'round': '999px'
      },
      fontFamily: {
        sans: ['Inter']
      }

    },
  },
  plugins: [],
};
export default config;
