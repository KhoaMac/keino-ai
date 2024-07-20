import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Generate custom fontSize based on Figma
      fontSize: {
        'title-small-semibold': ['2.25rem', { lineHeight: '1.5', fontWeight: '600' }], // font-size: 36, line-height: 54
        'title-small-regular': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }], // font-size: 18, line-height: 27
        'heading-medium-semibold': ['1.75rem', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0.25em'}], // font-size: 18, line-height: 27
        'body-medium-semibold': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // font-size: 14, line-height: 21
      },
      colors: {
        primary: 'var(--primary-color)',
        'primary-disabled': 'var(--primary-disabled-color)',
        'gray-scale-100': 'var(--gray-scale-100-color)',
        'gray-scale-80': 'var(--gray-scale-80-color)',
        'gray-scale-60': 'var(--gray-scale-60-color)',
        'gray-scale-40': 'var(--gray-scale-40-color)',
        'gray-scale-20': 'var(--gray-scale-20-color)',
        'gray-scale-15': 'var(--gray-scale-15-color)',
      },
      extend: {
        ':root': {
          '--primary-color': '#8F47FF',
          '--primary-disabled-color': '#D4BBF7',
          '--gray-scale-100-color': '#1D1D1D',
          '--gray-scale-80-color': '#434343',
          '--gray-scale-60-color': '#737373',
          '--gray-scale-40-color': '#A1A1A1',
          '--gray-scale-20-color': '#F4F4F4',
          '--gray-scale-15-color': '#F9FAFC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
